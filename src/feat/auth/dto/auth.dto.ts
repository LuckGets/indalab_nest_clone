import { IRequest, User } from "../../../interfaces";

export type UserRegisterDto = Omit<User, "createdAt">;

export interface AuthRegisterReqDto extends IRequest {
  body: UserRegisterDto
}

