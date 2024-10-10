import { Document, Model } from "mongoose";

export interface User {
  email: string;
  username: string;
  password: string;
  createdAt: Date;
}

export interface UserDocument extends User, Document {
  validatePassword(str: string): Promise<boolean>;
}

export interface IUserModel extends Model<UserDocument> {}
