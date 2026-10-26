import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GenerateModule } from './modules/generate/generate.module.js';
import { DictionaryModule } from './modules/dictionary/dictionary.module.js';

@Module({
  imports: [GenerateModule, DictionaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
