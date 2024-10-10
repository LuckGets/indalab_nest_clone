import { IErrorArgs, StatusCode } from "../interfaces";

export class AppError extends Error {
  public statusCode: number;

  constructor(args: IErrorArgs) {
    const { message, statusCode } = args;
    super(message);
    this.statusCode = statusCode;
  }

  public static badRequest(message: string): AppError {
    return new AppError({ message, statusCode: StatusCode.BadRequest });
  }

  public static unAuthorized(message: string): AppError {
    return new AppError({ message, statusCode: StatusCode.UnAuthorized });
  }

  public static notFound(message: string): AppError {
    return new AppError({ message, statusCode: StatusCode.NotFound });
  }

  public static internalError(message: string = "Internal Server Error. Please try again"): AppError {
    return new AppError({ message, statusCode: StatusCode.InternalError });
  }
}
