import { LoginForm } from '@/features/auth/ui/login-form';

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg border p-6">
        <h1 className="mb-6 text-2xl font-semibold">
          Iniciar sesión
        </h1>

        <LoginForm />
      </div>
    </div>
  );
}