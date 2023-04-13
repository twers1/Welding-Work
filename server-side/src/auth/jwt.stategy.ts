import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {PrismaService} from 'src/prisma.service';   
import { ConfigService } from '@nestjs/config';
import {User} from '@prisma/client';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) 
{
    constructor(
        private configService: ConfigService,
        private prismaService: PrismaService
    ){ 
        super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: true,
        secretOrKey: configService.get('JWT_SECRET'),
    })
}

    async validate({id}: Pick<User, 'id'>) {
        return this.prismaService.user.findUnique({
            where: {
                id: +id}})
            }
        }