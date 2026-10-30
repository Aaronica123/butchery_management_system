import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PurchaseModule } from './purchase/purchase.module.js';
import { ConfigModule } from '@nestjs/config';
import { MainBranchModule } from './main_branch/main_branch.module.js';
import { ExpensesModule } from './expenses/expenses.module.js';
@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),PurchaseModule, MainBranchModule, ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
