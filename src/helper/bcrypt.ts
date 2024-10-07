import bcrypt from "bcryptjs"

export class Bcrypt {
  
  private static salt : number = 10;

  public static async hash(strToHash: string): Promise<string> {
    const saltStr = bcrypt.genSaltSync(this.salt)
    return bcrypt.hash(strToHash,saltStr)
  }

  public static async compare(strToCompare:string, hashedStr:string): Promise<boolean> {
    return bcrypt.compare(strToCompare,hashedStr)
  }
}

