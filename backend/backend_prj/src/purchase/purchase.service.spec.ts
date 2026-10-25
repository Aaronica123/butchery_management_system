import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseService } from './purchase.service.js';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
describe('PurchaseService', () => {
  let service: PurchaseService;

  const client={
    schema:vitest.fn().mockReturnThis(),
    from:vitest.fn().mockReturnThis(),
    insert:vitest.fn().mockReturnThis(),
    select:vitest.fn()
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseService,
        {provide:DbServiceTs,useValue:{client:client}}
      ],
    }).compile();

    service = module.get<PurchaseService>(PurchaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
