import { ApiProperty } from '@nestjs/swagger';
/**
 * this class is data transfer object only user input data is avaliable here
 */
export class UserDto {
  @ApiProperty()
  aadhaarNumber: string;

  @ApiProperty()
  password: string;
}
