import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../shared/errors/AppError';

interface ITokenPayload {
  username: string;
  iat: number;
  exp: number;
  sub: string;
}


export async function ensureAuthenticateUser(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, '71e099e35bbc5c5f64abe0c0dda9091d') as ITokenPayload;

    request.user = sub;

    return next();
  } catch (err) {
    throw new AppError('Token Invalid');
  }
}
