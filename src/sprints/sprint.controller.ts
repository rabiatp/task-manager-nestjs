import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { SprintService } from "./sprints.service";
import { CurrentUser } from "src/common/current-user.decorator";
import { CreateSprintDto, UpdateSprintDto } from "./dto/sprint.dto";
import { TaskStatus } from "@prisma/client";

@UseGuards(AuthGuard('jwt'))
@Controller("sprints")

export class SprintController {
    constructor(private service: SprintService) { }

    @Get()
    list() { return this.service.list() }

    @Get(":id")
    get(@Param("id", new ParseUUIDPipe()) id: string) {
        return this.service.get(id)
    }

    @Post("create")
    create(@CurrentUser() u: { id: string }, @Body() dto: CreateSprintDto) {
        return this.service.create(u.id, dto)
    }

    @Patch(":id")
    update(@Param("id", new ParseUUIDPipe()) id: string, @Body() dto: UpdateSprintDto) {
        return this.service.update(id, dto);
    }

    @Delete(":id")
    remove(@Param("id", new ParseUUIDPipe()) id: string) {
        return this.service.remove(id)
    }
}