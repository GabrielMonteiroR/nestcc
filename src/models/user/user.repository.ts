import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user) {
    this.users.push(user);
  }

  async getAll() {
    return this.users;
  }

  async EmailExists(email: string) {
    const user = this.users.find((user) => user.email == email);
    return user !== undefined;
  }

  async findById(id: string) {
    const user = this.users.find((user) => user.id == id);
    return user;
  }

  async update(id: string, newData: Partial<UserEntity>) {
    const user = await this.findById(id);
    if (!user) {
      throw new Error('User not found.');
    }

    Object.entries(newData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      user[key] = value;
    });

    return user;
  }
}
