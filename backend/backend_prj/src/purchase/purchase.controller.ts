import { Body, Controller } from '@nestjs/common';
import { PurchaseService } from './purchase.service.js';
import { PurchaseDto } from './obj/purchase.dto/purchase.dto.js';
import { Post } from '@nestjs/common';
@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post("/create")
  create(@Body() bd: PurchaseDto){
    return this.purchaseService.create(bd);
  }
}
