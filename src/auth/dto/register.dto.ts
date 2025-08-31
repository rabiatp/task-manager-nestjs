import { IsDateString, IsEmail, IsIn, IsNotEmpty, MinLength, IsUUID, ValidateIf } from 'class-validator';

export const ROLE_VALUES = ['PARENT', 'TEEN', 'CHILD'] as const;
export type RoleDto = (typeof ROLE_VALUES)[number];

export class RegisterDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;

    @IsDateString()
    birthdate: string;

    @IsIn(ROLE_VALUES)
    role: RoleDto;

    @ValidateIf(o => o.role !== 'PARENT')
    @IsUUID()
    parentId?: string;
}
