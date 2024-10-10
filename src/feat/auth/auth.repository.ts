import { IModel, IUserModel, UserDocument } from "../../interfaces";
import { UserRegisterDto } from "./dto/auth.dto";

export class AuthRepository {
  constructor(private userModel :IUserModel) { }

  public createUser(body: UserRegisterDto): Promise<UserDocument> {
    const { username, email, password } = body;
    const newUser = new this.userModel({
      email,
      username,
      password,
    });
    return newUser.save();
  }
}
