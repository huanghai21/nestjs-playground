import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { User } from './model/users/user.entity';

@Module({
  imports: [
    // 配置TypeORM连接SQLite
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite', // 数据库文件路径（项目根目录）
      entities: [User], // 注册实体类
      synchronize: true, // 开发环境下自动同步表结构（生产环境禁用）
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
