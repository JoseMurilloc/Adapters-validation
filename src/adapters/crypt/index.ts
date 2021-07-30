import { BcrypeJSAdapter } from "./adapterImplementation/BcrypeJSAdapter";
import { ICryptProtocol } from "./protocol/ICryptProtocol";

export class Crypt implements ICryptProtocol {
  constructor(
    private bcrypeJSAdapter: BcrypeJSAdapter
  ) {}
  async hashPassword(password: string, useLengthToGenerate: number): Promise<string> {
    return await this.bcrypeJSAdapter.hashPassword(password, useLengthToGenerate)
  }
  async comparePasswords(password: string, encryptPassword: string): Promise<boolean> {
    return await this.bcrypeJSAdapter.comparePasswords(password, encryptPassword)
  }
}
