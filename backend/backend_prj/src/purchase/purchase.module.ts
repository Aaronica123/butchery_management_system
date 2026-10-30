import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service.js';
import { PurchaseController } from './purchase.controller.js';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService,DbServiceTs],
})
export class PurchaseModule {}
