import type { PropsWithChildren } from 'react'
import { QueryProvider } from './query-provider'
import { AuthBootstrap } from './auth-bootstrap'

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <AuthBootstrap />
      {children}
    </QueryProvider>
  )
}