import { IsNumber } from "class-validator";
export class SalesObj {
    @IsNumber()
    cash: number;

    @IsNumber()
    mpesa:number;
}
