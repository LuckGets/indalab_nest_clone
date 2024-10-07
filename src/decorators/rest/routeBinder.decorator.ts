import "reflect-metadata"
import { MetadataKeys, RestMethod } from "./interface"

function RouteBinder(method:string) {
  return function(path:string) {
    return function(target:any, propKey:string, desc:PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.Path, path,target, propKey)
      Reflect.defineMetadata(MetadataKeys.Method, method,target, propKey)
    }
  }
}


export const Get = RouteBinder(RestMethod.Get)
export const Post = RouteBinder(RestMethod.Post)
export const Put = RouteBinder(RestMethod.Put)
export const Patch = RouteBinder(RestMethod.Patch)
export const Delete = RouteBinder(RestMethod.Delete)
