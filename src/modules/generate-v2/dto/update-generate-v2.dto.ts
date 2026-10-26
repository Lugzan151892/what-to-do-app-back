import { PartialType } from '@nestjs/mapped-types';
import { CreateGenerateV2Dto } from './create-generate-v2.dto.js';

export class UpdateGenerateV2Dto extends PartialType(CreateGenerateV2Dto) {}
