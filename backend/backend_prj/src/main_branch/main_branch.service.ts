import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient,SupabaseClient } from '@supabase/supabase-js';
import { MainBranchDto } from './obj/main_branch.dto/main_branch.dto.js';
import { ConflictException } from '@nestjs/common';
@Injectable()
export class MainBranchService {
     client: SupabaseClient;
    constructor(config: ConfigService){
        this.client=createClient(
            config.getOrThrow("URL"),
            config.getOrThrow("KEY")
        )
    }

    async create(bd: MainBranchDto){
        const {data,error}=await this.client.schema("butchery_schema").from("main_branch").insert({
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
