import type { AuthUser } from './auth-user';

export interface AuthRepository {
  login(
    email: string,
    password: string,
  ): Promise<string>;

  logout(): Promise<void>;

  getCurrentUser(): Promise<AuthUser>;
}