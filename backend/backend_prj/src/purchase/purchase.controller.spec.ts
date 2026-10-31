import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseController } from './purchase.controller.js';
import { PurchaseService } from './purchase.service.js';
import { AuthGuardTs } from '../guards/auth.guard.ts/auth.guard.ts.js';


describe('PurchaseController', () => {
  let controller: PurchaseController;
  const client=vitest.fn();
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseController],
      providers: [
        {provide:PurchaseService,useValue:vitest.fn()}
      ],
    }).overrideGuard(AuthGuardTs).useValue({canActivate:()=>true}).compile();
    client.mockResolvedValue(true)
    controller = module.get<PurchaseController>(PurchaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
