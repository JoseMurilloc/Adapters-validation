import { IUserRepository } from "../IUserRepository";
import { User } from "../../../entities/User";
import {connection} from '../../../database';
import { Knex } from "knex";

export class PostgresUsersRepository implements IUserRepository {
  private userDbConnection:  Knex<any, unknown[]>;

  constructor() {
    this.userDbConnection = connection
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.userDbConnection
      .select<User>('*')
      .from('users')
      .where('email', email)
      .first()

    return user;
  }

  async save(user: User): Promise<void> {
    try {
      await this.userDbConnection.insert(user).into('users')
    } catch(err) {
      throw new Error(err)
    }
  }
}
