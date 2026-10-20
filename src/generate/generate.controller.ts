import { Controller, Get, Req } from "@nestjs/common";
import type { Request } from "express";
import { GenerateService } from "./generate.service.js";

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
}