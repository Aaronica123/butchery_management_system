import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesService } from './expenses.service.js';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
import { NotFoundException } from '@nestjs/common';
describe('ExpensesService', () => {
  let service: ExpensesService;
  const client={
    update:vitest.fn().mockReturnThis(),
    schema:vitest.fn().mockReturnThis(),
    from:vitest.fn().mockReturnThis(),
    eq:vitest.fn().mockReturnThis(),
    select:vitest.fn()
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpensesService,{
        provide:DbServiceTs,useValue:{client:client}
      }],
    }).compile();

    service = module.get<ExpensesService>(ExpensesService);
    vitest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  test('successful update',async()=>{
    const input={rent:0,wages:0,electricity:100,
      transport:1000,gas:0,packaging:152,water:100,total:1352}
      client.select.mockResolvedValue({data:[input]})
      const value=await service.update(input);
      expect(value).toStrictEqual([input])
  })
  test('failed update',async()=>{
     const input={rent:0,wages:0,electricity:100,
      transport:1000,gas:0,packaging:152,water:100,total:1352}
      client.select.mockResolvedValue({data:[]})
      await expect(service.update(input)).rejects.toThrow(NotFoundException)
  })
});
