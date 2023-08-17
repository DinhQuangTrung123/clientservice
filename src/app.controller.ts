import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { QuestionResponse, TitleResponse } from 'dto/response-service.dto';
import { CreateQuestionDto, CreateTitleDto } from 'dto/create-service.dto';
import ServiceInterface from './serivice.interface';
import { ClientGrpc } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('TITLE') private clientTitle: ClientGrpc, // @Inject('QUESTION') private clientQuetion: ClientGrpc
    @Inject('QUESTION') private clientQuetion: ClientGrpc,
  ) {}

  private gRpcServiceTitle: ServiceInterface;
  private gRpcServiceQuestion: ServiceInterface;

  onModuleInit(): any {
    this.gRpcServiceTitle =
      this.clientTitle.getService<ServiceInterface>('TitleController');
    this.gRpcServiceQuestion =
      this.clientQuetion.getService<ServiceInterface>('QuestionController');
  }
  @Post('/title/create')
  async createTitle(@Body() createTitleDto: CreateTitleDto) {
    try {
      console.log('create');
      console.log(createTitleDto);
      const insertTitle = this.gRpcServiceTitle.createTitle(createTitleDto);
      console.log(await insertTitle['_subscribe']);
      console.log('Create title successful.');
      return insertTitle;
    } catch (error) {
      console.log('An error occurred:', error.message);
    }
  }

  @Post('/question/create')
  async createQuestion(
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<QuestionResponse> {
    console.log('create');
    console.log(createQuestionDto);
    const insertQuestion =
      this.gRpcServiceQuestion.createQuestion(createQuestionDto);
    console.log(await insertQuestion['_subscribe']);
    console.log('Create question successful');
    return insertQuestion;
  }
}
