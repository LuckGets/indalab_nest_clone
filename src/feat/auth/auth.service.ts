import { UserDocument } from "../../interfaces";
import { AuthRepository } from "./auth.repository";
import { UserRegisterDto } from "./dto/auth.dto";

export class AuthService {
  constructor(private authRepo: AuthRepository) { }

  public register(registerDto: UserRegisterDto): Promise<UserDocument> {
    return this.authRepo.createUser(registerDto);
  }
}
