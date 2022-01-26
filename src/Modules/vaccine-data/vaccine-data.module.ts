import { Module } from '@nestjs/common';
import { VaccineDataController } from './vaccine-data.controller';
import { VaccineDataService } from './vaccine-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaccineData } from './../../Entities/vaccine.data.entity';
import { VaccineNames } from './../../Entities/vaccine.name.entity';
import {
  FindUser,
  FindVaccineName
} from './../../Common/Providers/find.service';
import { User } from 'src/Entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VaccineData, User, VaccineNames])],

  controllers: [VaccineDataController],
  providers: [VaccineDataService, FindUser, FindVaccineName]
})
export class VaccineDataModule {}
