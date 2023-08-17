/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "app";

export interface createTitleDto {
  name: string;
  number: number;
}

export interface TitleResponse {
  name: string;
  number: number;
  id: number;
  error: string;
}

export interface createQuestionDto {
  content: string;
}

export interface QuestionResponse {
  content: string;
  id: number;
}

export const APP_PACKAGE_NAME = "app";

export interface TitleControllerClient {
  createTitle(request: createTitleDto, metadata?: Metadata): Observable<TitleResponse>;
}

export interface TitleControllerController {
  createTitle(
    request: createTitleDto,
    metadata?: Metadata,
  ): Promise<TitleResponse> | Observable<TitleResponse> | TitleResponse;
}

export function TitleControllerControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createTitle"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("TitleController", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("TitleController", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const TITLE_CONTROLLER_SERVICE_NAME = "TitleController";

export interface QuestionControllerClient {
  createQuestion(request: createQuestionDto, metadata?: Metadata): Observable<QuestionResponse>;
}

export interface QuestionControllerController {
  createQuestion(
    request: createQuestionDto,
    metadata?: Metadata,
  ): Promise<QuestionResponse> | Observable<QuestionResponse> | QuestionResponse;
}

export function QuestionControllerControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createQuestion"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("QuestionController", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("QuestionController", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const QUESTION_CONTROLLER_SERVICE_NAME = "QuestionController";
