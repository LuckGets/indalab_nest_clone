// import "reflect-metadata";
// import { MetadataKeys } from "./interface";
// import { AppError } from "../../exception";
//
// export function Body(paramKey: string): ParameterDecorator {
//   return function(
//     target: object,
//     propKey: string | symbol | undefined,
//     parameterIndex: number,
//   ) {
//     if (propKey) {
//       Reflect.defineMetadata(MetadataKeys.BodyParam, paramKey, target, propKey);
//     } else {
//       throw AppError.internalError();
//     }
//   };
// }
