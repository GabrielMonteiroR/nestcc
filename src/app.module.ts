import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { userRepository } from './user/user.repository';

@Module({
  imports: [UserModule],
})
export class AppModule {}
