import { IsEmail, IsISO8601, IsOptional, IsString, MinLength, MaxLength } from 'class-validator';

export class UpdateChildDto {
    @IsOptional()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    // "YYYY-MM-DD" gibi ISO tarih bekliyoruz
    @IsOptional()
    @IsISO8601()
    birthdate?: string;
}