import "reflect-metadata";
import { IRequestHandler, IRouterInstance } from "../../interfaces";
import { AppRouter } from "../../providers/routeInstance";
import { MetadataKeys, RestMethod } from "./interface";
import { Locals } from "../../providers";

export function Controller(apiPath: string) {
  return function(target: any) {
    const apiPrefix = Locals.apiPrefix;
    const routerInstance: IRouterInstance = AppRouter.instance;

    // Instantiate the controller class to bind the constructor in the runtime
    const controllerInstance = new target();

    Object.getOwnPropertyNames(target.prototype).forEach((propKey) => {
      const routeHandler: IRequestHandler =
        controllerInstance[propKey].bind(controllerInstance);

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
