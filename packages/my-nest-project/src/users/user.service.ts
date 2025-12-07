// users/user.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../model/users/dto/create-user.dto';
import { User } from '../model/users/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  create(createUserDto: CreateUserDto): User {
    const user = new User(
      createUserDto.username,
      createUserDto.email,
      createUserDto.password, // 注意：在实际项目中应该对密码进行哈希处理
    );
    user.id = this.idCounter++;
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  findByUsername(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
// Test comment
