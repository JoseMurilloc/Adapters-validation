export interface ICryptProtocol {
  hashPassword(password: string, useLengthToGenerate: number): Promise<string>
  comparePasswords(password: string, encryptPassword: string): Promise<boolean>
}

