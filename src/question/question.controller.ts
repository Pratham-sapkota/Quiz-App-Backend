import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Questions')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    return await this.questionService.create(createQuestionDto);
  }

  @Get()
  async findAll() {
    return await this.questionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Param() params: any) {
    return await this.questionService.findOne(params);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return await this.questionService.updateOne(id, updateQuestionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.questionService.deleteOne(id);
  }
}
