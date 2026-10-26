import { Controller, Get, Param } from "@nestjs/common";
import { DictionaryCityService } from "./dictionary-city.service.js";


@Controller('city')
export class DictionaryCityController {
  constructor(private readonly cityService: DictionaryCityService){}

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(id);
  }
}