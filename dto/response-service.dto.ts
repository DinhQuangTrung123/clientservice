import { Expose } from 'class-transformer';
export class TitleResponse {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  error: string;
}

export class QuestionResponse {
  @Expose()
  id: number;

  @Expose()
  content: string;
}
