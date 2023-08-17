import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TITLE',
        transport: Transport.GRPC,
        options: {
          package: 'app',
          protoPath: join(process.cwd(), 'src/app.proto'),
          url: '0.0.0.0:5000', //0.0.0.0:5000
        },
      },
      {
        name: 'QUESTION',
        transport: Transport.GRPC,
        options: {
          package: 'app',
          protoPath: join(process.cwd(), 'src/app.proto'),
          url: '0.0.0.0:5001', //0.0.0.0:5000
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
