import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUsersDTO } from './dto/ListUsers.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepo: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const user = new UserEntity();
    user.email = userData.email;
    user.name = userData.name;
    user.password = userData.password;
    user.id = uuid();

    await this.userRepo.save(user);
    return { user: new ListUsersDTO(user.id, user.name) };
  }

  @Get()
  async getAllUsers() {
    const users = await this.userRepo.getAll();
    console.log(users);
    const usersList = users.map((user) => new ListUsersDTO(user.id, user.name));

    return usersList;
  }
}
