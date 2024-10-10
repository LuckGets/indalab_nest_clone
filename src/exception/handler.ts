import {
  IApplication,
  INextFunction,
  IRequest,
  IResponse,
  StatusCode,
} from "../interfaces";
import { AppError } from "./custom.error";

export class Handler {
  public static notFoundHandler(app: IApplication): IApplication {
    app.use("*", (req: IRequest, res: IResponse, next: INextFunction) => {
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      res
        .status(StatusCode.NotFound)
        .json({
          message: `Path '${req.originalUrl}' not found on this [IP: '${ip}']!`,
        });
    });
    return app;
  }

  public static errorHandler(
    err: AppError,
    req: IRequest,
    res: IResponse,
    next: INextFunction,
  ): void {
    console.log(err)
    res.status(err.statusCode || 500).json({ error: err.message });
  }
}
