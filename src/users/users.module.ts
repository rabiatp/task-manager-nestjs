// users/users.module.ts
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PrismaModule } from "prisma/prisma.module"; // <-- EKLE

@Module({
    imports: [PrismaModule], // <-- EKLE
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule { }
