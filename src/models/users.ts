import { Schema, model } from "mongoose";
import { UserDocument } from "../interfaces";
import { z } from "zod";
import { Bcrypt } from "../helper";

const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: function (email) {
          return z.string().email().safeParse(email).success;
        },
        message: (props) => `${props.value} is not a valid email.`,
      },
      createIndexes: { unique: true },
    },
    username: {
      type: String,
      required: [true, "Username is required."],
    },
    password: {
      type: String,
      required: [true, "Username is required."],
      select: false,
    },
  },
  { timestamps: true },
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    this.password = await Bcrypt.hash(this.password);
    return next();
  } catch (err) {
    next(err as Error);
  }
});

UserSchema.methods.validatePassword = function(password:string):Promise<boolean> {
  return Bcrypt.compare(password, this.password)
}

export default model("User", UserSchema);
