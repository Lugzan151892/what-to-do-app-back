import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { DictionaryCityModule } from "./city/dictionary-city.module.js";


const MODULES = [DictionaryCityModule];

@Module({
  imports: [
    ...MODULES,
    RouterModule.register([
      {
        path: 'dictionary',
        module: DictionaryModule,
        children: MODULES
      }
    ])
  ]
})
export class DictionaryModule {}