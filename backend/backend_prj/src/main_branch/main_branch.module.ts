import { Module } from '@nestjs/common';
import { MainBranchService } from './main_branch.service.js';
import { MainBranchController } from './main_branch.controller.js';

@Module({
  controllers: [MainBranchController],
  providers: [MainBranchService],
})
export class MainBranchModule {}
