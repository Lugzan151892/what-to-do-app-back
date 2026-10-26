import { Injectable } from "@nestjs/common";
import { CreateCityDto } from "./dto/dictionary-city.dto.js";

@Injectable()
export class DictionaryCityService {
  private readonly cityList: Array<{ id: string } & CreateCityDto> = [];

  findAll() {
    return this.cityList;
  }

  findOne(id: string) {
    return this.cityList.find((e) => e.id);
  }

  create(dto: CreateCityDto) {
    return this.cityList.push({ id: 'test', ...dto })
  }
}