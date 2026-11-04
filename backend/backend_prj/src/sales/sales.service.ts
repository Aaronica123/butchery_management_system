import { Injectable } from '@nestjs/common';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
import { SalesObj } from './obj/sales.obj/sales.obj.js';
@Injectable()
export class SalesService {
    constructor(private readonly db:DbServiceTs){}

   async create(body:SalesObj){
    const{data,error}=await this.db.client.schema("butchery_schema").from("sales").insert({
        cash:body.cash,
        mpesa:body.mpesa
    }).select("*")
    if(error){
        throw new Error(error.message)
    }
    return data;
   }
   async fetch(){
    const {data,error}=await this.db.client.schema("butchery_schema").from("sales").select("*");
    if(error){
        throw new Error(error.message)
    }
    return data;
   }
}
