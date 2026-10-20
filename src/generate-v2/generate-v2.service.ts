import { Injectable } from '@nestjs/common';
import { CreateGenerateV2Dto } from './dto/create-generate-v2.dto.js';
import { UpdateGenerateV2Dto } from './dto/update-generate-v2.dto.js';

@Injectable()
export class GenerateV2Service {
  create(createGenerateV2Dto: CreateGenerateV2Dto) {
    return 'This action adds a new generateV2';
  }

  findAll() {
    return `This action returns all generateV2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generateV2`;
  }

  update(id: number, updateGenerateV2Dto: UpdateGenerateV2Dto) {
    return `This action updates a #${id} generateV2`;
  }

  remove(id: number) {
    return `This action removes a #${id} generateV2`;
  }
}
