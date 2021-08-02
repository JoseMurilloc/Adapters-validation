import { User } from 'src/entities/User';
import { IUserRepository } from '../IUserRepository'

export class FakePostgresUsersRepository implements IUserRepository {
  private users: Array<User> = [{
    name: 'initial-user',
    email: 'intialuser@gmail.com',
    password: '123456'
  }];

  async findByEmail(email: string): Promise<Omit<User, 'password'>> {
    const user = this.users.find(u => u.email === email);
    return user
  }
  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}
