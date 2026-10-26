import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import type { Request } from "express";
import { GenerateService } from "./generate.service.js";
import { GenerateRequestDto } from "./dto/generate-request.dto.js";

@Controller('generate')
export class GenerateController {
  constructor(private generateService: GenerateService) {}
  @Get()
  getTestGenerate(@Req() request: Request) {
    const result = this.generateService.getList();
    return {
      data: 'test',
      result,
    }
  }

  @Post()
  handleGenerate(@Body() generateDto: GenerateRequestDto) {
    return this.generateService.generate(generateDto)
  }
}