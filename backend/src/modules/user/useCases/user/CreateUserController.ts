import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/prisma/UsersRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUser = new CreateUserUseCase(new UserRepository());

    const user = await createUser.execute({
      name, email, password
    });

    return response.json(user);
  }
}
