import { Outlet, Navigate } from 'react-router-dom'
import { useAuthStore } from '@features/auth'

export function PrivateLayout() {
  const { isAuthenticated, isHydrated } = useAuthStore()

  if (!isHydrated) return null

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}