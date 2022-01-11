import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new LoggerMiddleware().use;

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(logger);
  await app.listen(3000);
}
bootstrap();
