import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
