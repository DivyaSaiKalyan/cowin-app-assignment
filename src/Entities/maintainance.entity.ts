import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';
import { Column } from 'typeorm';
/**
 * This is a Maintainance entity
 */
export class MaintainanceEntity {
  @Column()
  @ApiProperty()
  @IsString()
  name: string;

  @Column()
  @ApiProperty()
  @MaxLength(12)
  aadhaarnumber: string;
}
