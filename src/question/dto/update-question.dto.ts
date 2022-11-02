import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateQuestionDto } from './create-question.dto';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
  id: number;

  @ApiProperty()
  question: string;

  @ApiProperty()
  quiz_id: number;
}
