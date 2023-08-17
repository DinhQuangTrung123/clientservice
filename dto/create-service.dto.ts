import { IsString } from 'class-validator';
export class CreateTitleDto {
  @IsString()
  name: string;
}

export class CreateQuestionDto {
  @IsString()
  content: string;
}
