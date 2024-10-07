import { IApplication } from "../interfaces";
import express from "express"
import morgan from "morgan"

export class Boostrap {

  static init(app:IApplication): IApplication {
    app = app.use(express.json())  
    app = app.use(morgan("dev"))
    return app
  }
}


