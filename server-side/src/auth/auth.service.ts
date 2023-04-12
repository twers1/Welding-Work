import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import {JwtService} from '@nestjs/jwt'
import {hash, verify} from 'argon2'
import {AuthDto} from './auth.dto'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    async login(dto: AuthDto) {
        const user = await this.validateUser(dto)

        return {
            user: this.returnUserFields(user),
            accessToken: await this.issueAccessToken(user.id)
        }
    }

    async register(dto: AuthDto) {
        const oldUser = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })
        if(oldUser) throw new BadRequestException('Email занят')

        const user = await this.prisma.user.create({
            data:{
                email: dto.email
                password: await hash(dto.password)
            }
        })
        return {
            user: this.returnUserFields(user),
            accessToken: await this.issueAccessToken(user.id)
        }
    }

    async validateUser(dto: AuthDto): Promise<User> {
        
    }
}