import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PurchaseModule } from './purchase/purchase.module.js';
import { ConfigModule } from '@nestjs/config';
import { MainBranchModule } from './main_branch/main_branch.module.js';
@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),PurchaseModule, MainBranchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
