import type { AuthRepository } from '../domain/auth-repository';
import type { AuthUser } from '../domain/auth-user';

export class GetCurrentUserUseCase {
  private readonly repository: AuthRepository;

  constructor(repository: AuthRepository) {
    this.repository = repository;
  }

  execute(): Promise<AuthUser> {
    return this.repository.getCurrentUser();
  }
}