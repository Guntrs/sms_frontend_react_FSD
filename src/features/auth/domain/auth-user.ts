export interface AuthUser {
  userId: number;
  userKey: string;
  personId: number;
  userName: string;
  fullName: string;
  email: string;
  phone: string | null;
  status: number;
}