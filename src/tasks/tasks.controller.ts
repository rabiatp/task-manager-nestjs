import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CurrentUser } from "../common/current-user.decorator";
import { TasksService } from "./tasks.services";
import { CreateTaskDto, UpdateTaskDto } from "./dto/task.dto";

@UseGuards(AuthGuard("jwt"))
@Controller("tasks")
export class TasksController {
    constructor(private service: TasksService) { }

    @Get()
    list(@Query("sprintId") sprintId?: string) { return this.service.list(sprintId); }

    @Get(":id")
    get(@Param("id", new ParseUUIDPipe()) id: string) { return this.service.get(id); }

    @Post()
    create(@CurrentUser() u: { id: string }, @Body() dto: CreateTaskDto) {
        return this.service.create(u.id, dto);
    }

    @Patch(":id")
    update(@Param("id", new ParseUUIDPipe()) id: string, @Body() dto: UpdateTaskDto) {
        return this.service.update(id, dto);
    }

    @Delete(":id")
    remove(@Param("id", new ParseUUIDPipe()) id: string) { return this.service.remove(id); }
}
