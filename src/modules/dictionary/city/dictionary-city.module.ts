import { Module } from "@nestjs/common";
import { DictionaryCityController } from "./dictionary-city.controller.js";
import { DictionaryCityService } from "./dictionary-city.service.js";

@Module({
  controllers: [DictionaryCityController],
  providers: [DictionaryCityService]
})
export class DictionaryCityModule {}