import { ApiProperty } from '@nestjs/swagger';
import { QuestionEntity } from 'src/question/entities/question.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'quiz_category' })
export class QuizEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  description: string;
}
