import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { MaintainanceEntity } from './maintainance.entity';
import { VaccineData } from './vaccine.data.entity';
/**This bcrypt is used to hash the password */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');
/**
 * This is user entity all required columns are avaliable here
 */
@Entity({ name: 'cowin_user_Details' })
export class User extends MaintainanceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @ApiProperty()
  @IsEmail()
  email: string;

  @Column({ unique: true })
  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @Column({ nullable: false })
  @ApiProperty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak'
  })
  password: string;

  @Column()
  @ApiProperty()
  gender: string;

  @Column()
  @ApiProperty()
  affectedForCovid: boolean;

  @Column()
  @ApiProperty()
  recoverFromCovid: string;

  @BeforeInsert()
  async strongPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToMany(() => VaccineData, (vaccineData) => vaccineData.user, {
    cascade: true
  })
  vaccineData: VaccineData[];

  async addVaccineData(vaccineData: VaccineData) {
    if (this.vaccineData == null) {
      this.vaccineData = new Array<VaccineData>();
    }
    this.vaccineData.push(vaccineData);
  }

  @BeforeUpdate()
  async updatePassword(): Promise<void> {
    if (this.password) {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    }
  }
}
