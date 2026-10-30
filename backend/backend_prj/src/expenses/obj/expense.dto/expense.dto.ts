import { IsNumber,IsOptional } from "class-validator";
export class ExpenseDto {
    @IsNumber()
    @IsOptional()
    rent: Number;
     @IsNumber()
    @IsOptional()
    water: Number;
     @IsNumber()
    @IsOptional()
    electricity: Number;
     @IsNumber()
    @IsOptional()
    gas: Number;
     @IsNumber()
    @IsOptional()
    wages: Number;
     @IsNumber()
    @IsOptional()
    transport: Number;
     @IsNumber()
    @IsOptional()
    packaging: Number;

}
