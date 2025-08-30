import { Body, Controller, Delete, ForbiddenException, Get, Param, Patch, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "@nestjs/passport";
import { UpdateChildDto } from "src/auth/dto/children.dto";

@Controller('users')
export class UsersController {
    constructor(private users: UsersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    me(@Req() req: any) {
        return this.users.findById(req.user.userId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('children')
    listenChildren(@Req() req: any) {
        if (req.user.role !== 'PARENT') {
            throw new ForbiddenException();
        }
        return this.users.listenChildren(req.user.userId)
    }

    @UseGuards(AuthGuard("jwt"))
    @Get("children/:id")
    async getChild(@Req() req: any, @Param("id") id: string) {
        if (req.user.role !== "PARENT") {
            throw new ForbiddenException("Only parents can view a child");
        }
        return this.users.getChild(req.user.userId, id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('children/:id')
    updateChildren(@Req() req: any, @Param('id') id: string, @Body() dto: UpdateChildDto) {
        if (req.user.role !== 'PARENT') throw new ForbiddenException();
        return this.users.updateChild(req.user.userId, id, dto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('children/:id')
    deleteChildren(@Req() req: any, @Param('id') id: string) {
        if (req.user.role !== 'PARENT') throw new ForbiddenException();
        return this.users.deleteChild(req.user.userId, id)
    }
}