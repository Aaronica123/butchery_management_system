import { Body, Controller, Post,Get } from '@nestjs/common';
import { ExpensesService } from './expenses.service.js';
import { ExpenseDto } from './obj/expense.dto/expense.dto.js';
@Controller('api/expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post('/create')
  update(@Body() bd:ExpenseDto){
    return this.expensesService.update(bd);
  }

  @Get('/fetch')
  fetch(){
    return this.expensesService.fetch();
  }
}
