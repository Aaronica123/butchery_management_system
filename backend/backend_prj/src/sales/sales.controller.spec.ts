import { Test, TestingModule } from '@nestjs/testing';
import { SalesController } from './sales.controller.js';
import { SalesService } from './sales.service.js';

describe('SalesController', () => {
  let controller: SalesController;
  const val=vitest.fn()
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesController],
      providers: [{provide:SalesService,useValue:val}],
    }).compile();

    controller = module.get<SalesController>(SalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
