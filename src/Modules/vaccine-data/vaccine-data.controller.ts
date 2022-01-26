import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VaccineDataService } from './vaccine-data.service';
import { VaccineData } from './../../Entities/vaccine.data.entity';
import { ApiTags } from '@nestjs/swagger';

/**
 * This is the vaccine data controller
 */
@ApiTags('vaccine Data')
@Controller('vaccine-data')
export class VaccineDataController {
  constructor(private readonly vaccineDataService: VaccineDataService) {}

  /**
   * This method is used to add data to the vaccine data table
   * @param data is taken from the user
   * @returns add data to the database
   */
  @Post('addVaccineData')
  async addVaccineData(@Body() data: VaccineData) {
    return await this.vaccineDataService.addVaccineData(data);
  }

  /**
   * This method is used to get data based on aadhaar number
   * @param aadhaarnumber is taken from the user
   * @returns all related data
   */
  @Get('getVaccineByaadhhaar/:aadhaarnumber')
  async getDataByAadhaar(@Param('aadhaarnumber') aadhaarnumber: string) {
    return await this.vaccineDataService.getDataByAadhaar(aadhaarnumber);
  }

  /**
   * This method is used get data based on status
   * @param status is taken from the user
   * @returns display all related data
   */
  @Get('getDataBasedOnStatus/:status')
  async getDataByStatus(@Param('status') status: string) {
    return await this.vaccineDataService.getDataByStatus(status);
  }

  /**
   * This method is used get vaccine based on VaccineName
   * @param status is taken from the user
   * @returns display all related data
   */
  @Get('getDataBasedOnVaccine/:VaccineName')
  async getDataByVaccine(@Param('VaccineName') VaccineName: string) {
    return await this.vaccineDataService.getDataByVaccine(VaccineName);
  }

  /**
   * This method is used get vaccine based on date
   * @param status is taken from the user
   * @returns display all related data
   */
  @Get('getDataBasedOnDate/:date')
  async getVaccineBydate(@Param('date') date: string) {
    return await this.vaccineDataService.getVaccineBydate(date);
  }
}
