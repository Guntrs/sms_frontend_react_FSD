import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  loginSchema,
  type LoginFormValues,
} from '../model/login.schema';

import { AuthRepositoryImpl } from '../infrastructure/auth-repository-impl';
import { LoginUseCase } from '../application/login.use-case';
import { useAuthStore } from '../model/auth-store';

export function LoginForm() {
  const setToken = useAuthStore(
    (state) => state.setToken,
  );

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (
    data: LoginFormValues,
  ) => {
    try {
      const repository =
        new AuthRepositoryImpl();

      const loginUseCase =
        new LoginUseCase(repository);

      const token =
        await loginUseCase.execute(
          data.email,
          data.password,
        );

      localStorage.setItem(
        'token',
        token,
      );

      setToken(token);

      console.log('LOGIN OK', token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div>
        <label>Usuario (email)</label>

        <input
          type="email"
          {...form.register('email')}
          className="w-full border rounded px-3 py-2"
        />

        <p>
          {form.formState.errors.email?.message}
        </p>
      </div>

      <div>
        <label>Contraseña</label>

        <input
          type="password"
          {...form.register('password')}
          className="w-full border rounded px-3 py-2"
        />

        <p>
          {form.formState.errors.password?.message}
        </p>
      </div>

      <button
        type="submit"
        className="w-full border rounded py-2"
      >
        Ingresar
      </button>
    </form>
  );
}