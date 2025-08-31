import { Module } from "@nestjs/common";

import { PrismaService } from "prisma/prisma.service";
import { SprintController } from "./sprint.controller";
import { SprintService } from "./sprints.service";

@Module({
    controllers: [SprintController],
    providers: [SprintService, PrismaService],
    exports: [SprintService],
})
export class SprintsModule { }