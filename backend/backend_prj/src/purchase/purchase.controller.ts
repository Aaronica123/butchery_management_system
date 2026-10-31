import { Body, Controller } from '@nestjs/common';
import { PurchaseService } from './purchase.service.js';
import { PurchaseDto } from './obj/purchase.dto/purchase.dto.js';
import { Post } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { AuthGuardTs } from '../guards/auth.guard.ts/auth.guard.ts.js';
@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}
  @UseGuards(AuthGuardTs)
  @Post("/create")
  create(@Body() bd: PurchaseDto){
    return this.purchaseService.create(bd);
  }
}
