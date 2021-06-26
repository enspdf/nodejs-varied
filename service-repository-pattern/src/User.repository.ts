import Database, { UserRequestDto } from './Database'

export class UserRepository {
  public db = Database

  async createUser(userData: UserRequestDto) {
    return this.db.create(userData)
  }
}
