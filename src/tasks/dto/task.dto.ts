import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, ArrayUnique } from "class-validator";
import { TaskStatus, Priority } from "@prisma/client";

export class CreateTaskDto {
    @IsString() @IsNotEmpty()
    title!: string;

    @IsOptional() @IsString()
    description?: string;

    @IsUUID()
    sprintId!: string;

    @IsOptional() @IsEnum(Priority)
    priority?: Priority;

    @IsOptional() @IsArray() @ArrayUnique() @IsUUID("4", { each: true })
    assigneeIds?: string[];
}

export class UpdateTaskDto {
    @IsOptional() @IsString() @IsNotEmpty()
    title?: string;

    @IsOptional() @IsString()
    description?: string;

    @IsOptional() @IsUUID()
    sprintId?: string;

    @IsOptional() @IsEnum(Priority)
    priority?: Priority;

    @IsOptional() @IsEnum(TaskStatus)
    status?: TaskStatus;

    @IsOptional() @IsArray() @ArrayUnique() @IsUUID("4", { each: true })
    assigneeIds?: string[];
}