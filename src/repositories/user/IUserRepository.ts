import { User } from '../../entities/User'

export interface IUserRepository {
  findByEmail(email: string): Promise<Omit<User, 'password'>>;
  save(user: User): Promise<void>;
}
