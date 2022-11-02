import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizEntity } from './entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizEntity)
    private readonly quizRepository: Repository<QuizEntity>,
  ) {}
  async create(createQuizDto: CreateQuizDto) {
    return await this.quizRepository.save(
      this.quizRepository.create(createQuizDto),
    );
  }

  findAll = async (params: any = {}) => {
    return await this.quizRepository.find(params);
  };

  findOne = async (condition: any = {}): Promise<QuizEntity | undefined> => {
    return await this.quizRepository.findOne({ where: condition });
  };

  updateOne = async (
    id: number,
    UpdateQuizDto: UpdateQuizDto,
  ): Promise<UpdateQuizDto> => {
    UpdateQuizDto.id = Number(id);
    return await this.quizRepository.save(UpdateQuizDto);
  };

  deleteOne = async (id: any): Promise<boolean> => {
    const deletedItem: any = await this.quizRepository.softDelete(id);
    return deletedItem.affected >= 1;
  };
  async restoreDeletedOne(id: number): Promise<boolean> {
    const restoreResponse = await this.quizRepository.restore(id);
    return restoreResponse.affected >= 1;
  }
}
