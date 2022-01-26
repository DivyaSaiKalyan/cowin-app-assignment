import { Module } from '@nestjs/common';
import { VaccineNameController } from './vaccine-name.controller';
import { VaccineNameService } from './vaccine-name.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaccineNames } from './../../Entities/vaccine.name.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VaccineNames])],

  controllers: [VaccineNameController],
  providers: [VaccineNameService]
})
export class VaccineNameModule {}
