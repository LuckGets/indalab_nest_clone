import { IApplication, IServerOptions } from "./interfaces";
import { Server } from "./server";
import express from "express";
import dotenv from "dotenv";
import { Locals } from "./providers";
import { AppRouter } from "./providers/routeInstance";
import { Database } from "./providers/database";
import { MainAuthController } from "./feat";
import "./feat/auth/auth.controller"


dotenv.config();

function main(): void {
  const serverOptions: IServerOptions = {
    port: Locals.PORT,
    apiPrefix: Locals.apiPrefix,
    routes: AppRouter.instance,
    model: Database,
  };
  const app: IApplication = express();

  new Server(serverOptions, app).init();
}

main();
