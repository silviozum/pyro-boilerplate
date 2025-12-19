import { Module } from '@nestjs/common';

//controllers
import { UserController } from './controllers/user.controller';
import { LoginController } from './controllers/login.controller';
//services
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
//repositories
import { UserRepository } from './repositories/user.repository';
//prisma module
import { PrismaModule } from '../../prisma/prisma.module';   
//jwt module
import { JwtModule } from '@nestjs/jwt';
@Module({ 
  controllers: [
    UserController,
    LoginController,
  ],
  providers: [
    UserService,
    UserRepository,
    LoginService
  ],
  imports: [PrismaModule, 
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class AppModule {}

