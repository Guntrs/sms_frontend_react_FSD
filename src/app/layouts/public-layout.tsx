import { Outlet, Navigate } from 'react-router-dom'
import { useAuthStore } from '@features/auth'

export function PublicLayout() {
  const { isAuthenticated, isHydrated } = useAuthStore()

  if (!isHydrated) return null

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}