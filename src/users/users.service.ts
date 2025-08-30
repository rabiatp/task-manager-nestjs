// users/users.service.ts
import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    findById(id: string) {
        const profile = this.prisma.user.findUnique({
            where: { id },
            select: { id: true, name: true, email: true, role: true },
        });
        return profile;
    }
}
