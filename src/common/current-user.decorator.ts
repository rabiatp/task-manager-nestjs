import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator((_d, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const u = req.user || {};
    return { id: u.userId ?? u.sub };
});
