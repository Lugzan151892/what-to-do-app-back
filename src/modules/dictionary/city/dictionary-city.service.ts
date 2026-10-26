import { Injectable } from "@nestjs/common";

@Injectable()
export class DictionaryCityService {
  private readonly cityList: Array<{ id: string }> = [];

  findAll() {
    return this.cityList;
  }

  findOne(id: string) {
    return this.cityList.find((e) => e.id);
  }
}