import {
  Injectable,
  NotFoundException,
  BadRequestException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { VaccineData } from './../../Entities/vaccine.data.entity';
import {
  FindUser,
  FindVaccineName
} from './../../Common/Providers/find.service';
import { User } from 'src/Entities/user.entity';
import { VaccineNames } from './../../Entities/vaccine.name.entity';
/**
 * this is vaccind data service class all data related business logies are avaliabale here
 */
@Injectable()
export class VaccineDataService {
  constructor(
    @InjectRepository(VaccineData)
    private readonly vaccineDataRepository: Repository<VaccineData>,
    private readonly findUser: FindUser,
    private readonly findvaccineName: FindVaccineName
  ) {}

  /**
   * This is a add vaccine data method
   * @param data is taken form the user
   * @returns updated value
   */
  async addVaccineData(data: VaccineData) {
    const getUser = await this.findUser.userMethods(data.aadhaarnumber);
    const getVaccineName = await this.findvaccineName.findVaccineName(
      data.vaccineName
    );
    const getdoseNumber = await getManager().query(
      `select sum(doseNumber) "doseNumber" from vaccine_data where aadhaarnumber=${getUser.aadhaarnumber};`
    );
    const a = getdoseNumber[0];
    let vaccineData = new VaccineData();
    let user = new User();
    let vaccineNames = new VaccineNames();
    if (!getUser || !getVaccineName) {
      throw new NotFoundException('Incorrect data');
    } else {
      vaccineData = data;
      if (data.doseNumber == 1 && a.doseNumber == null) {
        vaccineData.status = 'partially vaccinated';
      } else if (data.doseNumber == 2 && a.doseNumber == 1) {
        vaccineData.status = 'fully vaccinated';
      } else if (data.doseNumber == 3 && a.doseNumber == 3) {
        vaccineData.status = 'booster dose done';
      } else {
        throw new BadRequestException('vaccine dose number is invalid');
      }
      vaccineNames = getVaccineName;
      user = getUser;
      //await vaccineNames.addVaccineDate(vaccineData);
      //await user.addVaccineData(vaccineData);
      vaccineData.user = user;
      vaccineData.vaccineNames = vaccineNames;
      return await this.vaccineDataRepository.save(vaccineData);
    }
  }

  /**
   * This method is used to get data based on aadhaar number
   * @param aadhaarnumber is taken from the user
   * @returns all related data
   */
  async getDataByAadhaar(aadhaarnumber: string) {
    return await this.vaccineDataRepository.find({
      aadhaarnumber: aadhaarnumber
    });
  }

  /**
   * This method is used get data based on status
   * @param status is taken from the user
   * @returns display all related data
   */
  async getDataByStatus(status: string) {
    return await this.vaccineDataRepository.find({ status: status });
  }

  /**
   * This method is used get data based on VaccineName
   * @param status is taken from the user
   * @returns display all related data
   */
  async getDataByVaccine(VaccineName: string) {
    return await this.vaccineDataRepository.find({ vaccineName: VaccineName });
  }

  /**
   * This method is used get data based on date
   * @param status is taken from the user
   * @returns display all related data
   */
  async getVaccineBydate(date: string) {
    return await this.vaccineDataRepository.find({ doseDate: date });
  }
}
