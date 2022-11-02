import { ApiProperty } from '@nestjs/swagger';
import { QuestionEntity } from 'src/question/entities/question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'options' })
export class OptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  option: string;

  @ApiProperty()
  @ManyToOne(() => QuestionEntity, (question) => question.options)
  question: QuestionEntity;
}
