import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateOptionDto } from './create-option.dto';

export class UpdateOptionDto extends PartialType(CreateOptionDto) {
  id: number;

  @ApiProperty()
  option: string;

  @ApiProperty()
  ques_id: number;
}
