// users/user.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../model/users/dto/create-user.dto';
import { User } from '../model/users/user.entity';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): User {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    return this.userService.findOne(Number(id));
  }

  @Get('username/:username')
  findByUsername(@Param('username') username: string): User | undefined {
    return this.userService.findByUsername(username);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string): User | undefined {
    return this.userService.findByEmail(email);
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto): User {
    return this.userService.create(createUserDto);
  }
}
