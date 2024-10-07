import mongoose, { Mongoose } from "mongoose";
import { Locals } from "./locals";
import { AppError } from "../exception";

export class Database {
  public static async init(): Promise<Mongoose> {
    try {
      const MONGO_URL = Locals.mongoURl;
      console.log(MONGO_URL)
      console.log("Starting connect DB pool...");
      const result = await mongoose.connect(MONGO_URL);
      console.log("Connecting to the db: ", MONGO_URL)
      return result
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
