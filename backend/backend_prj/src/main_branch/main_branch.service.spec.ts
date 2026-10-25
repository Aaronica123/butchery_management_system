import { Test, TestingModule } from '@nestjs/testing';
import { MainBranchService } from './main_branch.service.js';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
describe('MainBranchService', () => {
  let service: MainBranchService;
  const client={
    schema:vitest.fn().mockReturnThis(),
    from:vitest.fn().mockReturnThis(),
    insert:vitest.fn().mockReturnThis(),
    select:vitest.fn()
  }
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MainBranchService,
        {provide:DbServiceTs,useValue:{client:client}}],
    }).compile();

    service = module.get<MainBranchService>(MainBranchService);
    vitest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  test('success creation',async()=>{
    const input={meat:"beef",
    received:100,
    sold:15,
    wasted:5,
    transfered:0}
    client.select.mockReturnValue({data:input,error:null})
    const value=await service.create({meat:"beef",received:100,sold:15,wasted:5,transfered:0})
    expect(value).toBe(input)
  })
});
