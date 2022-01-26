import { Test, TestingModule } from '@nestjs/testing';
import { VaccineNameService } from './vaccine-name.service';

describe('VaccineNameService', () => {
  let service: VaccineNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VaccineNameService]
    }).compile();

    service = module.get<VaccineNameService>(VaccineNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
