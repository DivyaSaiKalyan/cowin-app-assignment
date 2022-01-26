import { Test, TestingModule } from '@nestjs/testing';
import { VaccineDataService } from './vaccine-data.service';

describe('VaccineDataService', () => {
  let service: VaccineDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VaccineDataService]
    }).compile();

    service = module.get<VaccineDataService>(VaccineDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
