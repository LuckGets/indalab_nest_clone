import { IApplication } from "../interfaces";
import express from "express"

export class Boostrap {

  static init(app:IApplication): IApplication {
    app = app.use(express.json())  
    return app
  }
}


