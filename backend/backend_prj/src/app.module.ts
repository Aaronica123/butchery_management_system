import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PurchaseModule } from './purchase/purchase.module.js';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
