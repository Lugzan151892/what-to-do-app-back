import { Test, TestingModule } from '@nestjs/testing';
import { GenerateV2Controller } from './generate-v2.controller.js';
import { GenerateV2Service } from './generate-v2.service.js';

describe('GenerateV2Controller', () => {
  let controller: GenerateV2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateV2Controller],
      providers: [GenerateV2Service],
    }).compile();

    controller = module.get<GenerateV2Controller>(GenerateV2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
