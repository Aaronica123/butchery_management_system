import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient,SupabaseClient } from '@supabase/supabase-js';
import { MainBranchDto } from './obj/main_branch.dto/main_branch.dto.js';
import { ConflictException } from '@nestjs/common';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
@Injectable()
export class MainBranchService {
    constructor(private readonly db:DbServiceTs){}
    async create(bd: MainBranchDto){
        
        const {data,error}=await this.db.client.schema("butchery_schema").from("main_branch").insert({
            meat:bd.meat,
            wasted: bd.wasted,
            received:bd.received,
            sold:bd.sold,
            transfered:bd.transfered,
            created: new Date().toLocaleString()
        }).select();
        if(Number(error?.code)==23505){
            console.log(error);
            throw new ConflictException("Duplicate stock entry");
        }
        return data;

    }
}
