import { Body, Controller, Post,Get } from '@nestjs/common';
import { SalesService } from './sales.service.js';
import { SalesObj } from './obj/sales.obj/sales.obj.js';

@Controller('api/sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}
  @Post("/create")
  create(@Body() bd:SalesObj){
   return this.salesService.create(bd);
  }

  @Get("/fetch")
  fetch(){
    return this.salesService.fetch()
  }
}
