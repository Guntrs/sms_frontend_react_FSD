import { useEffect } from 'react'
import { useAuthStore } from '@features/auth'
import { GetCurrentUserUseCase } from '@features/auth'
import { AuthRepositoryImpl } from '@features/auth'

const repository = new AuthRepositoryImpl()
const getCurrentUser = new GetCurrentUserUseCase(repository)

export function AuthBootstrap() {
  const { token, setUser, setHydrated, logout } = useAuthStore()

  useEffect(() => {
    if (!token) {
      setHydrated(true)
      return
    }

    getCurrentUser
      .execute()
      .then((user) => {
        setUser(user)
      })
      .catch(() => {
        logout()
      })
      .finally(() => {
        setHydrated(true)
      })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}