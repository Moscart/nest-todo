import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the NestJS Todo API! Use /todos endpoint to manage your tasks.';
  }
}
