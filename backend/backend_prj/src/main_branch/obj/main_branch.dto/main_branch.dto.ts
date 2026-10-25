import { IsAlphanumeric, IsNotEmpty, IsNumber, Min } from "class-validator";
export class MainBranchDto {
    @IsAlphanumeric()
    @IsNotEmpty()
    meat:string;

    @IsNumber()
    @Min(0)
    received:number;

    @IsNumber()
    @Min(0)
    wasted: number;

    @IsNumber()
    @Min(0)
    sold: number;

    @IsNumber()
    @Min(0)
    transfered: number;
}
