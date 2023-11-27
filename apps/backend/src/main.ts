import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from '@backend/app.module';

const { SERVER_PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_DOMAIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });

  await app.listen(SERVER_PORT ?? 2000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  return app;
}

export const app = bootstrap();
