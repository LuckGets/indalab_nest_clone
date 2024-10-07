import "reflect-metadata";
import { IRequestHandler, IRouterInstance } from "../../interfaces";
import { AppRouter } from "../../providers/routeInstance";
import { MetadataKeys, RestMethod } from "./interface";
import { Locals } from "../../providers";

export function Controller(apiPath: string) {
  return function(target: Function) {
    const apiPrefix = Locals.apiPrefix;
    const routerInstance: IRouterInstance = AppRouter.instance;
    Object.getOwnPropertyNames(target.prototype).forEach((propKey) => {
      const routeHandler: IRequestHandler = target.prototype[propKey];

      const path: string = Reflect.getMetadata(
        MetadataKeys.Path,
        target.prototype,
        propKey,
      );

      const method: RestMethod = Reflect.getMetadata(
        MetadataKeys.Method,
        target.prototype,
        propKey,
      );

      if (path && method) {
        routerInstance[method](`${apiPrefix}${apiPath}${path}`, routeHandler);
      }
    });
  };
}
