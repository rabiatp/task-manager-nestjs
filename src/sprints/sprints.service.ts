import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { NotFoundError } from "rxjs";
import { CreateSprintDto, UpdateSprintDto } from "./dto/sprint.dto";

@Injectable()
export class SprintService {
    constructor(private prisma: PrismaService) { }

    list() {
        return this.prisma.sprint.findMany({
            orderBy: { startDate: "desc" },
            select: { id: true, name: true, startDate: true, endDate: true }
        })
    }
    async get(id: string) {
        const s = await this.prisma.sprint.findUnique({
            where: { id }, select: {
                id: true, name: true, startDate: true, endDate: true
            }
        })
        if (!s) throw new NotFoundException("Sprint not found")
        return s;
    }

    create(userID: string, dto: CreateSprintDto) {
        const start = new Date(dto.startDate)
        const end = new Date(dto.endDate)
        if (start > end) throw new BadRequestException("Start date can not be after end date")


        try {
            const c = this.prisma.sprint.create({
                data: {
                    name: dto.name,
                    startDate: start,
                    endDate: end,
                    createdById: userID
                },
                select: { id: true, name: true, startDate: true, endDate: true },
            })
            return c
        } catch (error) {
            return error
        }
    }

    async update(id: string, dto: UpdateSprintDto) {
        const existing = await this.prisma.sprint.findUnique({ where: { id } });
        if (!existing) throw new NotFoundException("Sprint not found")

        const start = dto.startDate ? new Date(dto.startDate) : existing?.startDate;
        const end = dto.endDate ? new Date(dto.endDate) : existing?.endDate
        if (start > end) throw new BadRequestException("Start date can not be after end date")

        return this.prisma.sprint.update({
            where: { id },
            data: {
                ...dto,
                startDate: start,
                endDate: end
            },
            select: { id: true, name: true, startDate: true, endDate: true },
        })
    }
    async remove(id: string) {
        const existing = await this.prisma.sprint.findUnique({ where: { id } });
        if (!existing) throw new NotFoundException("Sprint not Found")

        return this.prisma.sprint.delete({ where: { id } })
    }
}