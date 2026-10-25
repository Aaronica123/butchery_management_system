import { Test, TestingModule } from '@nestjs/testing';
import { MainBranchService } from './main_branch.service.js';

describe('MainBranchService', () => {
  let service: MainBranchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainBranchService],
    }).compile();

    service = module.get<MainBranchService>(MainBranchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
