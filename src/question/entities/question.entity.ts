import { ApiProperty } from '@nestjs/swagger';
import { OptionEntity } from 'src/options/entities/option.entity';
import { QuizEntity } from 'src/quiz/entities/quiz.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'question' })
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  question: string;

  // @ApiProperty()
  // @Column()
  // quiz_id: number;

  @ApiProperty()
  @OneToMany(() => QuestionEntity, (option) => option.question)
  options: OptionEntity[];

  @ApiProperty()
  @ManyToOne(() => QuizEntity, (quiz) => quiz.id, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  quiz: QuizEntity;
}
