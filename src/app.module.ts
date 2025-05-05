import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from './prisma/prisma.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './service/users.service';
import { UniversityService } from './service/university.service';
import { UniversityController } from './controllers/university.controller';
import { LocalStrategy } from './local-strategy.service';
import { JwtStrategy } from './service/jwt.servicve'; 

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'seuSegredoSuperSecreto',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [UsersController, UniversityController],
  providers: [
    PrismaService,
    UsersService,
    UniversityService,
    LocalStrategy,
    JwtStrategy, 
  ],
})
export class AppModule {}