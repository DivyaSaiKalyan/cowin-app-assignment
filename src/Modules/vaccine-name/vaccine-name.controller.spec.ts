import { Test, TestingModule } from '@nestjs/testing';
import { VaccineNameController } from './vaccine-name.controller';

describe('VaccineNameController', () => {
  let controller: VaccineNameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaccineNameController]
    }).compile();

    controller = module.get<VaccineNameController>(VaccineNameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
