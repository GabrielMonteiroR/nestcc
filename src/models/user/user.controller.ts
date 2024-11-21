import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUsersDTO } from './dto/ListUsers.dto';
import { updateUserDTO } from './dto/UpdateUser.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(
    private userRepo: UserRepository,
    private userService: UserService,
  ) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const user = new UserEntity();
    user.email = userData.email;
    user.name = userData.name;
    user.password = userData.password;
    user.id = uuid();

    await this.userService.createUser(user);
    return { user: new ListUsersDTO(user.id, user.name) };
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.listUsers();
    return users;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() newData: updateUserDTO) {
    const userUpdated = await this.userRepo.update(id, newData);
    return {
      user: userUpdated,
      message: 'User updated with success.',
    };
  }
}
