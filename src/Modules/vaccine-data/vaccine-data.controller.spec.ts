import { Test, TestingModule } from '@nestjs/testing';
import { VaccineDataController } from './vaccine-data.controller';

describe('VaccineDataController', () => {
  let controller: VaccineDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaccineDataController]
    }).compile();

    controller = module.get<VaccineDataController>(VaccineDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
