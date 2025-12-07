// users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '../model/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 注册User实体到TypeORM
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
