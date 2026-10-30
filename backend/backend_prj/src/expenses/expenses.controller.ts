import { Body, Controller, Put } from '@nestjs/common';
import { ExpensesService } from './expenses.service.js';
import { ExpenseDto } from './obj/expense.dto/expense.dto.js';
@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Put('/update')
  update(@Body() bd:ExpenseDto){
    return this.expensesService.update(bd);
  }
}
