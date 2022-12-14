import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../shared/errors/AppError';
import { IAuthenticateUserDTO } from '../../dtos/IAuthenticateUserDTO';
import { IUsersRepository } from '../../repositories/interfaces/IUsersRepository';

export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IAuthenticateUserDTO) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email or password', 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Incorrect email or password', 401);
    }

    const token = sign({ name: user.name, email: user.email }, '71e099e35bbc5c5f64abe0c0dda9091d', {
      subject: user.id,
      expiresIn: '1d'
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      token
    };
  }
}
