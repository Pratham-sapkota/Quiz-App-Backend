import { ApiProperty } from '@nestjs/swagger';
import { QuizEntity } from 'src/quiz/entities/quiz.entity';

export class CreateQuestionDto {
  @ApiProperty()
  question: string;

  // @ApiProperty()
  // quiz_id: number;
}
