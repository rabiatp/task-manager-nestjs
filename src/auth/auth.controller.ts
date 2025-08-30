import { Body, Controller, Get, HttpCode, Post, UseGuards } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly auth: AuthService) { }

    @Post('register')
    @HttpCode(201)
    async register(@Body() dto: RegisterDto) {
        return this.auth.register(dto)
    }

    @Post('login')
    @HttpCode(200)
    async login(@Body() dto: LoginDto) {
        return this.auth.login(dto)
    }

}