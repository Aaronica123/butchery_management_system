import { Test, TestingModule } from '@nestjs/testing';
import { SalesService } from './sales.service.js';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
describe('SalesService', () => {
  let service: SalesService;
  const client={
    schema:vitest.fn().mockReturnThis(),
    from:vitest.fn().mockReturnThis(),
    insert:vitest.fn().mockReturnThis(),
    select:vitest.fn()
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesService,
        {provide:DbServiceTs,useValue:{client:client}}
      ],
    }).compile();

    service = module.get<SalesService>(SalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
