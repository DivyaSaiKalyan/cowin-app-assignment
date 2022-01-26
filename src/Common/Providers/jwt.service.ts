import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { User } from 'src/Entities/user.entity';

/**
 * This is jwt service method this is the place to generate all jwt tokens
 */
export class JwtServiceClass {
  constructor(private readonly jwtService: JwtService) {}

  /**
   * Create jwt token method
   * @param response is imported from the express library
   * @param data is taken from the user
   * @returns the token
   */
  async createJwtToken(response: Response, data: User): Promise<string> {
    const jwt = await this.jwtService.signAsync({
      aadhaarnumber: data.aadhaarnumber
    });
    response.cookie('jwt', jwt, { httpOnly: true });
    return jwt;
  }

  /**
   * verify jwt token method
   * @param token is recived from the method
   * @returns the verify token
   */
  async verifyJwtToken(token: string): Promise<string> {
    try {
      const verify = await this.jwtService.verifyAsync(token);
      return verify;
    } catch (error) {
      throw error;
    }
  }

  /**
   * delete jwt token method
   * @param response is imported from the express library
   * @returns if cookie is clear show success message
   */
  async deleteToken(response: Response) {
    response.clearCookie('jwt');
    return {
      message: 'you are successfully logout'
    };
  }
}
