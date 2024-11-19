import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async save(user) {
    this.users.push(user);
  }

  async getAll() {
    return this.users;
  }

  async EmailExists(email: string) {
    const user = this.users.find((usuario) => usuario.email == email);
    return user !== undefined;
  }
}
