// auth/auth.module.ts
import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy"; // <-- EKLE

@Module({
    imports: [
        ConfigModule,
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (cfg: ConfigService) => ({
                secret: cfg.get<string>("JWT_SECRET"),
                signOptions: { expiresIn: cfg.get<string>("JWT_EXPIRES_IN") || "1d" },
            }),
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy], // <-- EKLE
    exports: [JwtModule, PassportModule],
})
export class AuthModule { }
