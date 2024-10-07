import { IApplication, IServerOptions } from "./interfaces";
import { Server } from "./server";
import express from "express";
import dotenv from "dotenv";
import { Locals } from "./providers";
import { Database } from "./providers/database";
import { MainAuthController } from "./feat";
import "./feat"

dotenv.config();

function main(): void {
  const serverOptions: IServerOptions = {
    port: Locals.PORT,
    apiPrefix: Locals.apiPrefix,
    model: Database,
  };
  const app: IApplication = express();

  new Server(serverOptions, app).init();
}

main();
