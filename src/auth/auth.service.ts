import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "prisma/prisma.service";
import { RegisterDto } from "./dto/register.dto";
import { BadRequestException, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'
import { LoginDto } from "./dto/login.dto";
import { $Enums } from "@prisma/client";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) { }

    async register(dto: RegisterDto) {
        const exists = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (exists) throw new BadRequestException('Email already in use');

        let parentId: string | null = null;

        if (dto.role === 'PARENT') {
            if (dto.parentId) throw new BadRequestException('parentId must be empty for PARENT');
        } else {
            if (!dto.parentId) throw new BadRequestException('parentId is required for TEEN/CHILD');

            // (ÖNERİLEN doğrulama) parent var mı ve gerçekten PARENT mı?
            const parent = await this.prisma.user.findUnique({
                where: { id: dto.parentId },
                select: { role: true },
            });
            if (!parent || parent.role !== 'PARENT') {
                throw new BadRequestException('Invalid parentId (must reference a PARENT)');
            }

            parentId = dto.parentId;
        }

        const hash = await bcrypt.hash(dto.password, 10);

        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email,
                password: hash,
                birthdate: new Date(dto.birthdate),
                role: dto.role as $Enums.Role,
                parentId, // PARENT için null, TEEN/CHILD için dto.parentId
            },
            select: { id: true, name: true, email: true, role: true, parentId: true },
        });

        const token = await this.jwt.signAsync({ sub: user.id, email: user.email, role: user.role });
        return { user, token };
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (!user) throw new BadRequestException('Invalid user');

        const ok = await bcrypt.compare(dto.password, user.password);
        if (!ok) throw new BadRequestException('Invalied User')

        const token = await this.sign(user.id, user.email, user.role);

        //şifre hashi korumak için 
        const { password, ...safe } = user
        return { user: { id: safe.id, name: safe.name, email: safe.email, role: safe.role }, token }
    }

    private async sign(sub: string, email: string, role: string) {
        return this.jwt.signAsync({ sub, email, role });
    }



}