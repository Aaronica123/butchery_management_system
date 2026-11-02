import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const cors_config={
  origin:["http://localhost:8018","http://localhost:3000"],
  methods:["GET","POST","PUT"],
  allowedHeaders:["Authorization","Content-Type"],
  credentials:true
 }
  const app = await NestFactory.create(AppModule,{cors:cors_config});
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      transform:true,
      forbidNonWhitelisted:true
    })
  )
 
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
