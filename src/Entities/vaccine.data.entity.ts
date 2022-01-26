import { ApiProperty } from '@nestjs/swagger';
import moment from 'moment';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { MaintainanceEntity } from './maintainance.entity';
import { User } from './user.entity';
import { VaccineNames } from './vaccine.name.entity';
/**
 * This is a vaccine data entity
 */
@Entity()
export class VaccineData extends MaintainanceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  doseDate: string;

  @Column()
  @ApiProperty()
  doseNumber: number;

  @Column()
  @ApiProperty()
  vaccineName: string;

  @Column()
  status: string;

  @BeforeInsert()
  async changeDate() {
    this.doseDate = moment().format('MMM Do YY');
  }

  @ManyToOne(() => User, (user) => user.vaccineData)
  @JoinColumn()
  user: User;

  @ManyToOne(() => VaccineNames, (vaccineNames) => vaccineNames.vaccineData)
  @JoinColumn()
  vaccineNames: VaccineNames;
}
