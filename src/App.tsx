import { env } from '@infrastructure/config/env'

export function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-5xl font-bold">
          SMS Frontend
        </h1>

        <p>{env.apiUrl}</p>
      </div>
    </div>
  )
}