import { ICryptProtocol } from "../protocol/ICryptProtocol";
import {hash,compare} from 'bcrypt'

export class BcrypeJSAdapter implements ICryptProtocol {
  async comparePasswords(password: string, encryptPassword: string): Promise<boolean> {
    return await compare(password, encryptPassword)
  }

  async hashPassword(password: string, useLengthToGenerate: number): Promise<string> {
    return hash(password, useLengthToGenerate)
  }

}

