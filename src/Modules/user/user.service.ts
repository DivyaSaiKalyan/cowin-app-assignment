import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './UserDto/user.dto';
import { JwtServiceClass } from './../../Common/Providers/jwt.service';
import { Response } from 'express';
/**This bcrypt is used to hash the password */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');
/**
 * This is user service class all business logics are avaliable here
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtserviceClass: JwtServiceClass
  ) {}

  /**
   * This method is used to register the user
   * @param data is taken from the user
   * @returns save the data in register entity
   */
  async registerUser(data: User) {
    const user = new User();
    const userData = Object.assign(user, data);
    return await this.userRepository.save(userData);
  }

  /**
   * This method is used to login the user and generate the jwt token
   * @param data is teken from the user
   * @returns user without password
   */
  async loginUser(data: UserDto, response: Response) {
    const getUser = await this.userRepository.findOne({
      aadhaarnumber: data.aadhaarNumber
    });
    const match = await bcrypt.compare(data.password, getUser.password);
    if (!getUser || match == false) {
      throw new UnauthorizedException('incorrect credentials');
    }
    await this.jwtserviceClass.createJwtToken(response, getUser);
    const { password, ...result } = getUser;
    return result;
  }
  /**
   * This method is used to update the password
   * @param password
   * @param aadhaarNumber
   * @returns
   */
  async updatePassword(password: string, aadhaarNumber: string) {
    const getUser = await this.userRepository.findOne({
      aadhaarnumber: aadhaarNumber
    });
    const user = new User();
    user.password = password;
    //return await this.userRepository.update({ id: getUser.id });
  }
}
