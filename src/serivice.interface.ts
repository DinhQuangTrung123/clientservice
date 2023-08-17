import { CreateQuestionDto, CreateTitleDto } from 'dto/create-service.dto';
import { QuestionResponse, TitleResponse } from 'dto/response-service.dto';

export default interface ServiceInterface {
  createTitle(createTitleDto: CreateTitleDto): Promise<TitleResponse>;
  createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<QuestionResponse>;
}

// export default interface ServiceInterface {
//   createQuestion(createTitleDto: CreateQuestionDto): Promise<QuestionResponse>;
// }
