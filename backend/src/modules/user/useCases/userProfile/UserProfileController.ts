import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/prisma/UsersRepository';
import { UserProfileUseCase } from './UserProfileUseCase';

export class UserProfileController {
  async handle(request: Request, response: Response) {
    const id = request.user;

    const showUser = new UserProfileUseCase(new UserRepository());

    const user = await showUser.execute(id);

    return response.json(user);
  }
}
