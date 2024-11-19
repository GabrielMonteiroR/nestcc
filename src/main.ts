import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      //ignorar valores que nao estao no dto
      whitelist: true,
      //lançar um erro se um dado que nao esta no dto
      forbidNonWhitelisted: true
    })
  )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
