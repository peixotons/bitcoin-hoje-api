import { NestFactory } from '@nestjs/core';
import { HttpException, HttpStatus } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const whitelist = configService.get<string>('CORS_WHITELIST')?.split(',') || [];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new HttpException('Not allowed by CORS', HttpStatus.FORBIDDEN));
      }
    },
  });

  await app.listen(configService.get<number>('PORT') || 3000);
}
bootstrap();
