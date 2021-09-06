import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 3000;

  await app.listen(port);
  Logger.debug(`Listening on port ${port}`);
}
bootstrap();