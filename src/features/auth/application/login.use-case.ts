import type { AuthRepository } from '../domain/auth-repository';

export class LoginUseCase {
  private readonly repository: AuthRepository;

  constructor(repository: AuthRepository) {
    this.repository = repository;
  }

  execute(email: string, password: string) {
    return this.repository.login(email, password);
  }
}