import { Body, Controller, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/Entities/user.entity';
import { UserService } from './user.service';
import { UserDto } from './UserDto/user.dto';
import { Response } from 'express';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * This method is used to register the user
   * @param data is taken from the user
   * @returns save the data in register entity
   */
  @Post('register')
  async createUser(@Body() data: User) {
    return await this.userService.registerUser(data);
  }

  @Post('login')
  async loginUser(
    @Body() data: UserDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return await this.userService.loginUser(data, response);
  }

  /**
   * This method is used to update the password
   * @param password
   * @param aadhaarNumber
   * @returns
   */
  @Put('UpdatePassword/:aadhaarNumber')
  async updatePassword(
    @Param('aadhaarNumber') aadhaarNumber: string,
    @Param('password') password: string
  ) {
    return await this.userService.updatePassword(password, aadhaarNumber);
  }
}
