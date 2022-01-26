import { Body, Controller, Post } from '@nestjs/common';
import { VaccineNameService } from './vaccine-name.service';
import { VaccineNames } from './../../Entities/vaccine.name.entity';
import { ApiTags } from '@nestjs/swagger';
/**
 * This controller is used to post the vaccine names
 */
@ApiTags('vaccine info')
@Controller('vaccine-name')
export class VaccineNameController {
  constructor(private readonly vaccinenameService: VaccineNameService) {}

  /**
   * This method is used to post the vaccine names
   * @param data is taken from the user
   * @returns save data to database
   */
  @Post('addVaccine')
  async addVaccine(@Body() data: VaccineNames) {
    return await this.vaccinenameService.addVaccine(data);
  }
}
