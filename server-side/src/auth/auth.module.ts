import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { getJwtConfig } from "src/config/jwt.config";
import { JwtStrategy } from "./jwt.stategy";

@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService, JwtStrategy],
    imports: [ConfigModule, JwtModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService], 
  useFactory: getJwtConfig
    })]
  })
  export class AuthModule {}
  