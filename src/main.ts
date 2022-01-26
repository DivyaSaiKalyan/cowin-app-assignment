import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './Config/Swagger/swagger';
import { ValidationPipe } from './Common/Pipes/validation.pipes';
import * as cookieParser from 'cookie-parser';
import { HttpExceptionFilter } from './Common/Filters/exception.filter';
/**
 * This method is main all execution is start from here
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('api', app, createDocument(app));
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
