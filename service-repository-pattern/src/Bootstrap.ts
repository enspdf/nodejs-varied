import 'dotenv/config'

import { UserRepository } from './User.repository'
import { UserService } from './User.service'
import { UserController } from './User.controller'

const userRepo = new UserRepository()
const userService = new UserService(userRepo)
export const userController = new UserController(userService)
