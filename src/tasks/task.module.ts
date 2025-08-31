import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.services";
import { PrismaService } from "prisma/prisma.service";

@Module({
    controllers: [TasksController],
    providers: [TasksService, PrismaService],
})
export class TasksModule { }