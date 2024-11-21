import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { isUniqueEmailValidator } from 'src/models/user/validators/isUniqueEmail.validator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, isUniqueEmailValidator],
})
export class UserModule {}
