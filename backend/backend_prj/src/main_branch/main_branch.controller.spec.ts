import { Test, TestingModule } from '@nestjs/testing';
import { MainBranchController } from './main_branch.controller.js';
import { MainBranchService } from './main_branch.service.js';
import { ConflictException, NotFoundException } from '@nestjs/common';


describe('MainBranchController', () => {
  let controller: MainBranchController;

  const mock=  {create:vitest.fn().mockReturnThis()
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainBranchController],
      providers: [
        
        {provide:MainBranchService,useValue:mock}
          
      ]
      ,
      
    }).compile();
    vitest.clearAllMocks();
    controller = module.get<MainBranchController>(MainBranchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  test('success creation',async()=>{
     const input={meat:"beef",received:100,sold:15,wasted:5,transfered:0}
   mock.create.mockResolvedValue(input);
  await expect(controller.create(input)).resolves.toEqual(input)
  expect(mock.create).toHaveBeenCalledWith(input)
  })
  test('failed creation',async()=>{
     const input={meat:"beef",received:100,sold:15,wasted:5,transfered:0}
     mock.create.mockRejectedValue(new ConflictException());
     
    await expect(controller.create(input)).rejects.toThrow(ConflictException)
    expect(mock.create).toHaveBeenCalledWith(input)
  })

});
