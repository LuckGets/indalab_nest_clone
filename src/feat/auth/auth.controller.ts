import { Controller, Get, Post } from "../../decorators";
import { INextFunction, IRequest, IResponse } from "../../interfaces";

@Controller("/auth")
export class AuthController {
  @Get("/")
  getUser(req: IRequest, res: IResponse, next: INextFunction) {
    res.status(200).json({ message: "Hello from GET /auth" });
  }

  @Post("/register")
  register(req: IRequest, res: IResponse, next: INextFunction) {
    res
      .status(201)
      .json({ message: `Hello from ${req.method} ${req.url}`, body: req.body });
  }
}
