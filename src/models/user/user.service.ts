import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { ListUsersDTO } from './dto/ListUsers.dto';
import { updateUserDTO } from './dto/UpdateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUse(userEntity: UserEntity) {
    await this.userRepository.save(userEntity);
  }

  async listUsers() {
    const dbUsers = await this.userRepository.find();
    const UsersMap = dbUsers.map(
      (user) => new ListUsersDTO(user.id, user.name),
    );
    return UsersMap;
  }

  async updateUser(id: string, userEntity: updateUserDTO) {
    await this.userRepository.update(id, userEntity);
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
  }
}
