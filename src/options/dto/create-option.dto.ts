import { ApiProperty } from '@nestjs/swagger';

export class CreateOptionDto {
  @ApiProperty()
  option: string;

  @ApiProperty({ default: false })
  isCorrect: boolean;
}
