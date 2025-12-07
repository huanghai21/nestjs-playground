import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! 001';
  }
  getHelloExe(): string {
    return 'Hello Exe! 001';
  }
}
