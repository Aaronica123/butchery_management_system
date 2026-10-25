import { Body, Controller, Post } from '@nestjs/common';
import { MainBranchService } from './main_branch.service.js';
import { MainBranchDto } from './obj/main_branch.dto/main_branch.dto.js';

@Controller('main-branch')
export class MainBranchController {
  constructor(private readonly mainBranchService: MainBranchService) {}
  @Post("/create")
  create(@Body() bd:MainBranchDto){
   return this.mainBranchService.create(bd)
  }
}
