// users/users.service.ts
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { UpdateChildDto } from "src/auth/dto/children.dto";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async findById(id: string) {
        const profile = await this.prisma.user.findUnique({
            where: { id },
            select: { id: true, name: true, email: true, role: true },
        });
        return profile;
    }
    async getChild(parentId: string, id: string) {
        const child = await this.prisma.user.findFirst({
            where: { id, parentId }, // sahiplik kontrolü
            select: { id: true, name: true, email: true, birthdate: true, role: true, parentId: true },
        });
        if (!child) throw new NotFoundException("Child not found");
        return child;
    }
    async listenChildren(id: string) {
        const list = await this.prisma.user.findMany({
            where: { parentId: id }
        })
        return list
    }
    async updateChild(parentId: string, id: string, dto: UpdateChildDto) {
        const existing = await this.prisma.user.findFirst({
            where: { id, parentId },
            select: { id: true, birthdate: true },
        });
        if (!existing) throw new NotFoundException("Child not found");

        // dto.birthdate varsa onu kullan; yoksa mevcut doğum tarihi
        const birth = dto.birthdate ? new Date(dto.birthdate) : existing.birthdate;
        if (isNaN(birth.getTime())) {
            throw new BadRequestException("Invalid birth date");
        }

        const age = calcAge(birth);
        if (age >= 18) throw new BadRequestException("18+ cannot be under a parent");

        const role = age < 13 ? "CHILD" : "TEEN";

        return this.prisma.user.update({
            where: { id },
            data: {
                ...(dto.name !== undefined ? { name: dto.name } : {}),
                ...(dto.email !== undefined ? { email: dto.email } : {}),
                birthdate: birth,
                role,
            },
            select: { id: true, name: true, email: true, birthdate: true, role: true },
        });
    }

    async deleteChild(parentId: string, id: string) {
        const existing = await this.prisma.user.findFirst({ where: { id, parentId } });
        if (!existing) throw new NotFoundException();
        await this.prisma.user.delete({ where: { id } });
        return { ok: true };
    }

}
function calcAge(d: Date) {
    const t = new Date();
    let a = t.getFullYear() - d.getFullYear();
    const m = t.getMonth() - d.getMonth();
    if (m < 0 || (m === 0 && t.getDate() < d.getDate())) a--;
    return a;
}
