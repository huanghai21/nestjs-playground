import { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

/**
 * 配置全局验证管道
 * @param app Nest 应用实例
 */
export function setupGlobalPipes(app: INestApplication): void {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 自动过滤掉没有装饰器的属性
      forbidNonWhitelisted: true, // 如果收到多余参数，直接报错
      transform: true, // 自动类型转换
    }),
  );
}
