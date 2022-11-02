import { ApiProperty } from '@nestjs/swagger';

export class CreateOptionDto {
  @ApiProperty()
  option: string;

  @ApiProperty()
  ques_id: number;
}
