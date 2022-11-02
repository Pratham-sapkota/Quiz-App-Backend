import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty()
  question: string;

    @ApiProperty()
    quiz_id: number;
}
