import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VaccineNames } from './../../Entities/vaccine.name.entity';
/**
 * vaccine name related business logics are avaliable here
 */
@Injectable()
export class VaccineNameService {
  constructor(
    @InjectRepository(VaccineNames)
    private readonly vaccineNameRepository: Repository<VaccineNames>
  ) {}

  /**
   * this method is used to add the new vaccine
   * @param data taken from the admin
   * @returns show the output if data is added or not
   */
  async addVaccine(data: VaccineNames) {
    const getVaccine = await this.vaccineNameRepository.findOne({
      vaccineName: data.vaccineName
    });
    if (getVaccine) {
      throw new BadRequestException('vaccine name already exist..!');
    }
    return this.vaccineNameRepository.save(data);
  }
}
