import { Injectable } from "@nestjs/common";
import { GenerateRequestDto } from "./dto/generate-request.dto.js";

@Injectable()
export class GenerateService {
  private readonly list: any[] = [];

  getList() {
    return this.list;
  }

  generate(data: GenerateRequestDto) {
    console.log(data);

    return {
      success: true
    }
  }
}