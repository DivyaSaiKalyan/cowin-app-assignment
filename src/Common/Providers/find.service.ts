import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';
import { VaccineNames } from './../../Entities/vaccine.name.entity';
/**
 * This class is used to find the user related info
 */
@Injectable()
export class FindUser {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async userMethods(aadhaarnumber: string) {
    const getUser = await this.userRepository.findOne({
      where: [{ aadhaarnumber }]
    });
    return getUser;
  }
}
/**
 * This class is used to find the vaccine related info
 */
@Injectable()
export class FindVaccineName {
  constructor(
    @InjectRepository(VaccineNames)
    private readonly vaccineNameRepository: Repository<VaccineNames>
  ) {}

  async findVaccineName(name: string) {
    const getVaccineName = await this.vaccineNameRepository.findOne({
      vaccineName: name
    });
    return getVaccineName;
  }
}
