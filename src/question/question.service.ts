import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionEntity } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
  ) {}
  async create(createQuestionDto: CreateQuestionDto) {
    return await this.questionRepository.save(
      this.questionRepository.create(createQuestionDto),
    );
  }

  findAll = async (params: any = {}) => {
    return await this.questionRepository.find(params);
  };

  findOne = async (
    condition: any = {},
  ): Promise<QuestionEntity | undefined> => {
    return await this.questionRepository.findOne({ where: condition });
  };

  updateOne = async (
    id: number,
    UpdateQuestionDto: UpdateQuestionDto,
  ): Promise<UpdateQuestionDto> => {
    UpdateQuestionDto.id = Number(id);
    return await this.questionRepository.save(UpdateQuestionDto);
  };

  deleteOne = async (id: any): Promise<boolean> => {
    const deletedItem: any = await this.questionRepository.softDelete(id);
    return deletedItem.affected >= 1;
  };
  async restoreDeletedOne(id: number): Promise<boolean> {
    const restoreResponse = await this.questionRepository.restore(id);
    return restoreResponse.affected >= 1;
  }
}
