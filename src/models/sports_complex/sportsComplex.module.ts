import { Module } from '@nestjs/common';
import { sportsComplexController } from './sportsComplex.controller';
import { SportsComplexEntity } from './sportsComplex.entity';

@Module({
  controllers: [sportsComplexController],
  providers: [SportsComplexEntity],
})
export class SportsComplexModule {}
