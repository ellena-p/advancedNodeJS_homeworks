import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "src/common/decorators/rolers.decorator";
import { Role } from "src/interfaces/user.interface";
import { Request } from 'express';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector){}
    canActivate(context: ExecutionContext): boolean{
        const rolesRequest = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY,[
            context.getHandler(),
            context.getClass()
        ]);
        if(!rolesRequest){
            return true;
        }
        const req = context.switchToHttp().getRequest<Request>();
        return rolesRequest.some((role)=> req.user['role'].includes(role));
    }
}