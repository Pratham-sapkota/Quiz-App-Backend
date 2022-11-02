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
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number, @Param() params: any) {
    return this.quizService.findOne(params);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.updateOne(id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizService.deleteOne(id);
  }
}
