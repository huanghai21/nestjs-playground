import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupGlobalPipes } from './common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 添加全局验证管道
  setupGlobalPipes(app);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((error) => {
  console.error('Application failed to start:', error);
  process.exit(1);
});
