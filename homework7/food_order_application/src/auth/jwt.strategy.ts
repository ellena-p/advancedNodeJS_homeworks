import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Role } from "src/interfaces/user.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor() {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false, 
        secretOrKey:'secret_here'
    })
    }
    async validate (payload: { id: number; username: string; role: Role }){
        return {
            userId: payload.id,
            username: payload.username,
            role: payload.role
        }
    }
}