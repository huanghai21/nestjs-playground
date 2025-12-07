// users/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../model/users/dto/create-user.dto';
import { User } from '../model/users/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) // 注入User实体的Repository
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User(
      createUserDto.username,
      createUserDto.email,
      createUserDto.password, // 注意：在实际项目中应该对密码进行哈希处理
    );
    return await this.userRepository.save(user); // 保存到数据库
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find(); // 查询所有用户
  }

  async findOne(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id }); // 根据ID查询单个用户
  }

  async findByUsername(username: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ username }); // 根据用户名查询用户
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ email }); // 根据邮箱查询用户
  }
}
// Test comment
