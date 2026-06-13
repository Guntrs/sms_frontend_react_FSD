import { apiClient } from '@/infrastructure/http/api-client';

export const authApi = {
  login(email: string, password: string) {
    return apiClient.post('/login', {
      user_email: email,
      password,
    });
  },

  me(token: string) {
    return apiClient.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  logout(token: string) {
    return apiClient.post(
      '/auth/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },
};