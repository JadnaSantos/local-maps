import { compare } from 'bcrypt';
import { AppError } from '../../../../shared/errors/AppError';
import { UserRepositoryInMemory } from '../../repositories/inmemory/UserRepositoryInMemory';
import { CreateUserUseCase } from '../user/CreateUserUseCase';
import { UserProfileUseCase } from './UserProfileUseCase';

let createUser: CreateUserUseCase;
let profileUser: UserProfileUseCase;
let profileFakeRepository: UserRepositoryInMemory;

describe('User Profile', () => {

  beforeEach(() => {
    profileFakeRepository = new UserRepositoryInMemory();
    profileUser = new UserProfileUseCase(profileFakeRepository);
    createUser = new CreateUserUseCase(profileFakeRepository);
  });

  it('shoul be able to show detail profille user', async () => {
    const user = {
      name: 'test_user',
      email: 'test_user@email.com',
      password: 'abc12345',
    };

    const userCreated = await createUser.execute({
      name: user.name,
      email: user.email,
      password: user.password
    });

    expect(userCreated).toHaveProperty('id');

    const listUser = await profileUser.execute(userCreated.id as string);

    const passwordMatch = await compare(user.password, listUser.password);

    expect(listUser).toHaveProperty('id');
    expect(listUser.email).toEqual(user.email);
    expect(listUser.name).toEqual(user.name);
    expect(passwordMatch).toBe(true);

  });

  it('should not be able to list un-existing users', () => {
    expect(async () => {
      const user_id = 'abasdsd';
      await profileUser.execute(user_id);
    }).rejects.toEqual(new AppError('User not found'));
  });
});
