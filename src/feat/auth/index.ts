import { AuthController } from "./auth.controller"
import { AuthRepository } from "./auth.repository"
import UserModel from "../../models/users"
import { AuthService } from "./auth.service"

const authRepo = new AuthRepository(UserModel)
const authService = new AuthService(authRepo)

export const MainAuthController = new AuthController(authService)
