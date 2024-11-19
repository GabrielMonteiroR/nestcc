import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepo: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    await this.userRepo.save(userData);
    return userData;
  }

  @Get()
  async getAllUsers() {
    return this.userRepo.getAll();
  }
}
