import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VaccineData } from './vaccine.data.entity';
/**
 * This is a vaccine name entity
 */
@Entity()
export class VaccineNames {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @ApiProperty()
  vaccineName: string;

  @Column()
  @ApiProperty()
  effectiveDate: Date;

  // @BeforeInsert()
  // ChangeDate() {
  //   this.effectiveDate = moment(this.effectiveDate).format('DD MM YYYY');
  // }

  @OneToMany(() => VaccineData, (vaccineData) => vaccineData.vaccineNames)
  vaccineData: VaccineData[];

  async addVaccineDate(vaccineData: VaccineData) {
    if (this.vaccineData == null) {
      this.vaccineData = new Array<VaccineData>();
    }
    this.vaccineData.push(vaccineData);
  }
}
