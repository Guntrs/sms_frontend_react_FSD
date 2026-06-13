import type { AuthRepository } from '../domain/auth-repository';
import type { AuthUser } from '../domain/auth-user';

import { authApi } from '../api/auth.api';

import {
  authUserDtoToDomain,
  type AuthUserDto,
} from '../model/dto/auth-user.dto';

export class AuthRepositoryImpl implements AuthRepository {
  async login(
    email: string,
    password: string,
  ): Promise<string> {
    const response = await authApi.login(
      email,
      password,
    );

    return response.data.token;
  }

  async logout(): Promise<void> {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    await authApi.logout(token);
  }

  async getCurrentUser(): Promise<AuthUser> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token not found');
    }

    const response = await authApi.me(token);

    const dto = response.data.user as AuthUserDto;

    return authUserDtoToDomain(dto);
  }
}