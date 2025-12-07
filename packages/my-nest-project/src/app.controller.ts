import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // 使用根路径作为前缀
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  getHelloExe(): string {
    return this.appService.getHelloExe();
  }
}
