import { UserRequestDto } from './Database'
import { UserService } from './User.service'

export class UserController {
  constructor(public readonly userService: UserService) {}

  async store(requestData: UserRequestDto) {
    return this.userService.createUser(requestData)
  }
}
