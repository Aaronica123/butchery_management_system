import { Test, TestingModule } from '@nestjs/testing';
import { MainBranchController } from './main_branch.controller.js';
import { MainBranchService } from './main_branch.service.js';


describe('MainBranchController', () => {
  let controller: MainBranchController;

  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainBranchController],
      providers: [MainBranchService]
      ,
      
    }).compile();

    controller = module.get<MainBranchController>(MainBranchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
