import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { OptionsModule } from './options/options.module';
import { QuizModule } from './quiz/quiz.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [UserModule, QuestionModule, OptionsModule, QuizModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
