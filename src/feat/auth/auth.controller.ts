import { Controller, Get, Post} from "../../decorators";
import { AppError } from "../../exception";
import { INextFunction, IRequest, IResponse } from "../../interfaces";
import { AuthService } from "./auth.service";
import { AuthRegisterReqDto, UserRegisterDto } from "./dto/auth.dto";

@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @Get("/")
  getUser(req: IRequest, res: IResponse, next: INextFunction) {
    res.status(200).json({ message: "Hello from GET /auth" });
  }

  @Post("/register")
  async register (req: IRequest, res: IResponse, next: INextFunction) {
    try {
      const { email, username,password} = req.body
      if (!email || !username || !password) {
        return AppError.badRequest("Data is missing")
      }
      const authRegisterDto: UserRegisterDto = {
        email,
        username,
      password,
      }
      const newUser = await this.authService.register(authRegisterDto);
      res.status(201).json({message : "Created user successful", newUser})
    } catch (err) {
      next(err);
    }
  }
}
