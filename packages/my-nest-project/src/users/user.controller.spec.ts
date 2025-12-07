// users/user.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from '../model/users/dto/create-user.dto';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    const createUserDto: CreateUserDto = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'testpassword',
    };
    const createdUser = service.create(createUserDto);
    jest.spyOn(service, 'create').mockReturnValue(createdUser);
    expect(controller.create(createUserDto)).toBe(createdUser);
  });

  it('should find all users', () => {
    const users = service.findAll();
    jest.spyOn(service, 'findAll').mockReturnValue(users);
    expect(controller.findAll()).toBe(users);
  });

  it('should find one user by id', () => {
    const createUserDto: CreateUserDto = {
      username: 'testuser2',
      email: 'test2@example.com',
      password: 'testpassword2',
    };
    const createdUser = service.create(createUserDto);
    jest.spyOn(service, 'findOne').mockReturnValue(createdUser);
    expect(controller.findOne('1')).toBe(createdUser);
  });

  it('should find one user by username', () => {
    const createUserDto: CreateUserDto = {
      username: 'testuser3',
      email: 'test3@example.com',
      password: 'testpassword3',
    };
    const createdUser = service.create(createUserDto);
    jest.spyOn(service, 'findByUsername').mockReturnValue(createdUser);
    expect(controller.findByUsername('testuser3')).toBe(createdUser);
  });

  it('should find one user by email', () => {
    const createUserDto: CreateUserDto = {
      username: 'testuser4',
      email: 'test4@example.com',
      password: 'testpassword4',
    };
    const createdUser = service.create(createUserDto);
    jest.spyOn(service, 'findByEmail').mockReturnValue(createdUser);
    expect(controller.findByEmail('test4@example.com')).toBe(createdUser);
  });
});
