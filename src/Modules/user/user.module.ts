import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtServiceClass } from './../../Common/Providers/jwt.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '3h' }
    })
  ],

  providers: [UserService, JwtServiceClass],
  controllers: [UserController]
})
export class UserModule {}
