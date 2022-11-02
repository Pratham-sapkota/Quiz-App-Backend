import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { OptionEntity } from './entities/option.entity';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(OptionEntity)
    private readonly optionRepository: Repository<OptionEntity>,
  ) {}
  async create(createOptionDto: CreateOptionDto) {
    return await this.optionRepository.save(
      this.optionRepository.create(createOptionDto),
    );
  }

  findAll = async (params: any = {}) => {
    return await this.optionRepository.find(params);
  };

  findOne = async (condition: any = {}): Promise<OptionEntity | undefined> => {
    return await this.optionRepository.findOne({ where: condition });
  };

  updateOne = async (
    id: number,
    UpdateOptionDto: UpdateOptionDto,
  ): Promise<UpdateOptionDto> => {
    UpdateOptionDto.id = Number(id);
    return await this.optionRepository.save(UpdateOptionDto);
  };

  deleteOne = async (id: any): Promise<boolean> => {
    const deletedItem: any = await this.optionRepository.softDelete(id);
    return deletedItem.affected >= 1;
  };
  async restoreDeletedOne(id: number): Promise<boolean> {
    const restoreResponse = await this.optionRepository.restore(id);
    return restoreResponse.affected >= 1;
  }
}
