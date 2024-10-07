import { IRequestHandler } from "../../interfaces";
import { MetadataKeys } from "./interface";

export function use(middleware: IRequestHandler) {
  return function(target: any, propKey: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.Middleware, target, propKey) || [];

    Reflect.defineMetadata(
      MetadataKeys.Middleware,
      [...middlewares, middleware],
      target,
      propKey,
    );
  };
}
