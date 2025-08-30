import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('users')
export class UsersController {
    constructor(private users: UsersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    me(@Req() req: any) {
        return this.users.findById(req.user.userId);
    }
}