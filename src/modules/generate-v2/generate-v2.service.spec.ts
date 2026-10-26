import { Test, TestingModule } from '@nestjs/testing';
import { GenerateV2Service } from './generate-v2.service.js';

describe('GenerateV2Service', () => {
  let service: GenerateV2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateV2Service],
    }).compile();

    service = module.get<GenerateV2Service>(GenerateV2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
