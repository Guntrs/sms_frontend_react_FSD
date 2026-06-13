import type { AuthUser } from '../../domain/auth-user';

export interface AuthUserDto {
  user_id: number;
  user_key: string;
  person_id: number;
  user_name: string;
  user_full_name: string;
  user_email: string;
  user_phone: string | null;
  status: number;
}

export const authUserDtoToDomain = (
  dto: AuthUserDto,
): AuthUser => ({
  userId: dto.user_id,
  userKey: dto.user_key,
  personId: dto.person_id,
  userName: dto.user_name,
  fullName: dto.user_full_name,
  email: dto.user_email,
  phone: dto.user_phone,
  status: dto.status,
});