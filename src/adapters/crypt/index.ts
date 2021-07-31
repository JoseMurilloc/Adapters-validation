import { BcrypeJSAdapter } from "./adapterImplementation/BcrypeJSAdapter";
import { ICryptProtocol } from "./protocol/ICryptProtocol";

export class Crypt implements ICryptProtocol {
  constructor(
    private cryptAdapter: BcrypeJSAdapter
  ) {}
  async hashPassword(
    password: string,
    useLengthToGenerate: number
  ): Promise<string> {
    return await this.cryptAdapter.hashPassword(password, useLengthToGenerate)
  }
  async comparePasswords(password: string, encryptPassword: string): Promise<boolean> {
    return await this.cryptAdapter.comparePasswords(password, encryptPassword)
  }
}
