import dotenv from "dotenv"
dotenv.config()

class Local {
  public PORT : number  
  public apiPrefix : string
  public mongoURl : string

  constructor() {
    this.PORT = Number(process.env.PORT) || 8080
    this.apiPrefix = process.env.apiPrefix || "/api/v1"
    this.mongoURl = process.env.mongoURL as string 
  }
  
}

export const Locals = new Local()
