import { Module } from '@nestjs/common';
import { SalesService } from './sales.service.js';
import { SalesController } from './sales.controller.js';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
@Module({
  controllers: [SalesController],
  providers: [SalesService,DbServiceTs],
})
export class SalesModule {}
