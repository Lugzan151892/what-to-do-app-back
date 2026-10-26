import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { DictionaryCityService } from "./dictionary-city.service.js";
import { CreateCityDto } from "./dto/dictionary-city.dto.js";


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

  @Post()
  createCity(@Body() cityDto: CreateCityDto) {
    return this.cityService.create(cityDto);
  }
}