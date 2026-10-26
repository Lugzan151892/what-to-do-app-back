import { Module } from '@nestjs/common';
import { GenerateV2Service } from './generate-v2.service.js';
import { GenerateV2Controller } from './generate-v2.controller.js';

@Module({
  controllers: [GenerateV2Controller],
  providers: [GenerateV2Service],
})
export class GenerateV2Module {}
