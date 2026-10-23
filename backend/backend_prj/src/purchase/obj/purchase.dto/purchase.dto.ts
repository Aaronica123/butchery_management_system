import { IsNumber,IsAlphanumeric,Min,IsPositive,IsNotEmpty } from "class-validator";
export class PurchaseDto {

    @IsAlphanumeric()
    @IsNotEmpty()
    first_name:string;

     @IsAlphanumeric()
    @IsNotEmpty()
    last_name:string;
    
    @IsAlphanumeric()
    @IsNotEmpty()
    meat:string;

    
    @IsNumber()
    @IsPositive()
    @Min(1)
    @IsNotEmpty()
    quantity: number;

}
