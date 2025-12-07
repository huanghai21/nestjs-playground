// users/user.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreateUserDto } from '../model/users/dto/create-user.dto';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'testpassword',
    };
    const createdUser = await service.create(createUserDto);
    expect(createdUser).toHaveProperty('id');
    expect(createdUser.username).toBe('testuser');
    expect(createdUser.email).toBe('test@example.com');
  });

  it('should find all users', async () => {
    const users = await service.findAll();
    expect(Array.isArray(users)).toBe(true);
  });

  it('should find one user by id', async () => {
    const createUserDto: CreateUserDto = {
      username: 'testuser2',
      email: 'test2@example.com',
      password: 'testpassword2',
    };
    const createdUser = await service.create(createUserDto);
    const foundUser = await service.findOne(createdUser.id);
    expect(foundUser).toBeDefined();
    expect(foundUser?.id).toBe(createdUser.id);
  });

  it('should find one user by username', async () => {
    const createUserDto: CreateUserDto = {
      username: 'testuser3',
      email: 'test3@example.com',
      password: 'testpassword3',
    };
    await service.create(createUserDto);
    const foundUser = await service.findByUsername('testuser3');
    expect(foundUser).toBeDefined();
    expect(foundUser?.username).toBe('testuser3');
  });

  it('should find one user by email', async () => {
    const createUserDto: CreateUserDto = {
      username: 'testuser4',
      email: 'test4@example.com',
      password: 'testpassword4',
    };
    await service.create(createUserDto);
    const foundUser = await service.findByEmail('test4@example.com');
    expect(foundUser).toBeDefined();
    expect(foundUser?.email).toBe('test4@example.com');
  });
});
