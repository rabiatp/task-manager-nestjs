import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSprintDto {
    @IsString() @IsNotEmpty()
    name!: string;

    @IsDateString()
    startDate!: string;

    @IsDateString()
    endDate!: string;
}

export class UpdateSprintDto {
    @IsOptional() @IsString() @IsNotEmpty()
    name?: string;

    @IsOptional() @IsDateString()
    startDate?: string;

    @IsOptional() @IsDateString()
    endDate?: string;
}