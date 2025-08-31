import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreateTaskDto, UpdateTaskDto } from "./dto/task.dto";

@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) { }

    private select = {
        id: true, title: true, description: true, status: true, priority: true,
        createdAt: true, updatedAt: true, sprintId: true, creatorId: true,
        sprint: { select: { id: true, name: true } },
        assignees: { select: { userId: true } },
    } as const;

    list(sprintId?: string) {
        return this.prisma.task.findMany({
            where: { ...(sprintId ? { sprintId } : {}) },
            orderBy: { updatedAt: "desc" },
            select: this.select,
        });
    }

    async get(id: string) {
        const t = await this.prisma.task.findUnique({ where: { id }, select: this.select });
        if (!t) throw new NotFoundException("Task not found");
        return t;
    }

    async create(userId: string, dto: CreateTaskDto) {
        const sp = await this.prisma.sprint.findUnique({ where: { id: dto.sprintId }, select: { id: true } });
        if (!sp) throw new BadRequestException("Sprint does not exist");

        const task = await this.prisma.task.create({
            data: {
                title: dto.title,
                description: dto.description,
                sprintId: dto.sprintId,
                priority: dto.priority ?? "MEDIUM",
                creatorId: userId,
            },
            select: this.select,
        });

        if (dto.assigneeIds?.length) {
            await this.prisma.taskAssignment.createMany({
                data: dto.assigneeIds.map(uid => ({ taskId: task.id, userId: uid })),
                skipDuplicates: true,
            });
        }
        return this.get(task.id);
    }

    async update(id: string, dto: UpdateTaskDto) {
        const existing = await this.prisma.task.findUnique({
            where: { id },
            select: { id: true, sprintId: true, assignees: { select: { userId: true } } },
        });
        if (!existing) throw new NotFoundException("Task not found");

        if (dto.sprintId) {
            const sp = await this.prisma.sprint.findUnique({ where: { id: dto.sprintId } });
            if (!sp) throw new BadRequestException("Sprint does not exist");
        }

        return this.prisma.$transaction(async (tx) => {
            if (dto.assigneeIds) {
                const curr = new Set(existing.assignees.map(a => a.userId));
                const next = new Set(dto.assigneeIds);
                const toAdd = [...next].filter(x => !curr.has(x));
                const toDel = [...curr].filter(x => !next.has(x));

                if (toDel.length) {
                    await tx.taskAssignment.deleteMany({ where: { taskId: id, userId: { in: toDel } } });
                }
                if (toAdd.length) {
                    await tx.taskAssignment.createMany({
                        data: toAdd.map(uid => ({ taskId: id, userId: uid })), skipDuplicates: true,
                    });
                }
            }

            await tx.task.update({
                where: { id },
                data: {
                    ...(dto.title && { title: dto.title }),
                    ...(dto.description !== undefined && { description: dto.description }),
                    ...(dto.priority && { priority: dto.priority }),
                    ...(dto.sprintId && { sprintId: dto.sprintId }),
                    ...(dto.status && { status: dto.status }),
                },
            });

            return tx.task.findUnique({ where: { id }, select: this.select });
        });
    }

    async remove(id: string) {
        await this.prisma.$transaction([
            this.prisma.taskAssignment.deleteMany({ where: { taskId: id } }),
            this.prisma.task.delete({ where: { id } }),
        ]);
        return { ok: true };
    }
}