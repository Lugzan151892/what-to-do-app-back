import { Injectable } from "@nestjs/common";

@Injectable()
export class GenerateService {
  private readonly list: any[] = [];

  getList() {
    return this.list;
  }
}