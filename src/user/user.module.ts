import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { isUniqueEmailValidator } from 'src/user/validators/isUniqueEmail.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, isUniqueEmailValidator],
})
export class UserModule { }
