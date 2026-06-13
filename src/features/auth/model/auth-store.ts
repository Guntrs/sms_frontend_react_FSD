import { create } from 'zustand'
import type { AuthUser } from '../domain/auth-user'

interface AuthState {
  token: string | null
  user: AuthUser | null
  isAuthenticated: boolean
  isHydrated: boolean

  setToken: (token: string | null) => void
  setUser: (user: AuthUser | null) => void
  setHydrated: (value: boolean) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: !!localStorage.getItem('token'),
  isHydrated: false,

  setToken: (token) => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
    set({ token, isAuthenticated: !!token })
  },

  setUser: (user) => set({ user }),

  setHydrated: (value) => set({ isHydrated: value }),

  logout: () => {
    localStorage.removeItem('token')
    set({ token: null, user: null, isAuthenticated: false })
  },
}))