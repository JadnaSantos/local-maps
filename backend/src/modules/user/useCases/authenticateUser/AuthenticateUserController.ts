import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/prisma/UsersRepository';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticatedUser = new AuthenticateUserUseCase(new UserRepository());

    const { user, token } = await authenticatedUser.execute({ email, password });

    return response.json({ user, token });
  }
}
