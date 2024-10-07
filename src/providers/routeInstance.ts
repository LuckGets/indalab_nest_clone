import { IRouterInstance } from "../interfaces";
import express from "express"

export class AppRouter {
  public static router : IRouterInstance

  static get instance():IRouterInstance {
    if(!AppRouter.router) {
      AppRouter.router = express.Router()
    }
    return AppRouter.router
  }
}
