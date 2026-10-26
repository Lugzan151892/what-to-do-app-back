import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenerateV2Service } from './generate-v2.service.js';
import { CreateGenerateV2Dto } from './dto/create-generate-v2.dto.js';
import { UpdateGenerateV2Dto } from './dto/update-generate-v2.dto.js';

@Controller('generate-v2')
export class GenerateV2Controller {
  constructor(private readonly generateV2Service: GenerateV2Service) {}

  @Post()
  create(@Body() createGenerateV2Dto: CreateGenerateV2Dto) {
    return this.generateV2Service.create(createGenerateV2Dto);
  }

  @Get()
  findAll() {
    return this.generateV2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generateV2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenerateV2Dto: UpdateGenerateV2Dto) {
    return this.generateV2Service.update(+id, updateGenerateV2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generateV2Service.remove(+id);
  }
}
