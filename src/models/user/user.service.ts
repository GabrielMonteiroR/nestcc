import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { ListUsersDTO } from './dto/ListUsers.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async listUsers() {
    const dbUsers = await this.userRepository.find();
    const UsersMap = dbUsers.map(
      (user) => new ListUsersDTO(user.id, user.name),
    );
    return UsersMap;
  }
}
