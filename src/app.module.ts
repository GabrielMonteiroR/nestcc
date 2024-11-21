import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SportsComplexModule } from './sports_complex/sportsComplex.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';

@Module({
  imports: [
    UserModule,
    SportsComplexModule,
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
})
export class AppModule {}
