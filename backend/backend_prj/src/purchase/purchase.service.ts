import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient,SupabaseClient } from '@supabase/supabase-js';
import { PurchaseDto } from './obj/purchase.dto/purchase.dto.js';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
@Injectable()
export class PurchaseService {
    
    constructor(private readonly db: DbServiceTs){
        
    }

    async create(bd: PurchaseDto){
        const {data,error}=await this.db.client.schema("butchery_schema").from("purchase").insert({
            first_name:bd.first_name,
            last_name:bd.last_name,
            meat:bd.meat,
            quantity:bd.quantity,
            status:"pending",
            created: new Date().toLocaleString(),
        }).select()
        if(error){
          throw new Error(error?.message)
        }
        return data;
    }
}
