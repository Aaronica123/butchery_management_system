import { Module } from '@nestjs/common';
import { MainBranchService } from './main_branch.service.js';
import { MainBranchController } from './main_branch.controller.js';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
@Module({

  controllers: [MainBranchController],
  providers: [MainBranchService,DbServiceTs],
})
export class MainBranchModule {}
