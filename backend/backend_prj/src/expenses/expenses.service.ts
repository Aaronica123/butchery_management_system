import { Injectable, NotFoundException } from '@nestjs/common';
import { DbServiceTs } from '../db.service.ts/db.service.ts.js';
import { ExpenseDto } from './obj/expense.dto/expense.dto.js';
@Injectable()
export class ExpensesService {
    constructor(private readonly client:DbServiceTs){}

    async update(bd:ExpenseDto){
        const{data,error}=await this.client.client.schema("butchery_schema").from("expenses").update({
        electricity:bd.electricity,
        water:bd.water,
        wages:bd.wages,
        gas:bd.gas,
        packaging:bd.packaging,
        transport:bd.transport,
        rent:bd.rent,
        updated:new Date().toLocaleDateString()
        }).eq("created",new Date().toLocaleDateString()).select();
        
        if(data?.length==0){
            throw new NotFoundException("Could not update record not created")
        }
        if(error){
            throw new Error(error?.message);
        }
        return data;
    }
}
