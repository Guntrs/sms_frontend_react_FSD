import {
  Outlet,
  Navigate,
  NavLink,
  useLocation,
} from 'react-router-dom'

import {
  useAuthStore,
  LogoutUseCase,
  AuthRepositoryImpl,
} from '@features/auth'

export function PrivateLayout() {
  const {
    isAuthenticated,
    isHydrated,
    user,
  } = useAuthStore()

  const location = useLocation()

  const repository = new AuthRepositoryImpl()

  const logoutUseCase = new LogoutUseCase(
    repository,
  )

  const handleLogout = async () => {
  try {
        await logoutUseCase.execute()
      } catch {
        // ignorar errores
      }

      useAuthStore.getState().logout()
    }

  if (!isHydrated) return null

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard'

      case '/products':
        return 'Productos'

      case '/categories':
        return 'Categorías'

      case '/inventory':
        return 'Inventario'

      case '/sales':
        return 'Ventas'

      case '/users':
        return 'Usuarios'

      default:
        return 'SMS'
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
      }}
    >
      <aside
        style={{
          width: '280px',
          borderRight: '1px solid #e5e7eb',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            padding: '24px',
            borderBottom: '1px solid #e5e7eb',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          SMS
        </div>

        <div
          style={{
            flex: 1,
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>

          <NavLink to="/products">
            Productos
          </NavLink>

          <NavLink to="/categories">
            Categorías
          </NavLink>

          <NavLink to="/inventory">
            Inventario
          </NavLink>

          <NavLink to="/sales">
            Ventas
          </NavLink>

          <NavLink to="/users">
            Usuarios
          </NavLink>
        </div>

        <div
          style={{
            borderTop: '1px solid #e5e7eb',
            padding: '16px',
          }}
        >
          <div>
            {user?.fullName}
          </div>

          <div
            style={{
              fontSize: '12px',
              color: '#6b7280',
            }}
          >
            {user?.email}
          </div>

          <button
            onClick={handleLogout}
            style={{
              marginTop: '12px',
              width: '100%',
              padding: '8px',
              cursor: 'pointer',
            }}
              >
            Cerrar sesión
          </button>

        </div>
      </aside>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header
          style={{
            height: '64px',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            padding: '0 24px',
            fontWeight: 'bold',
          }}
        >
          {getPageTitle()}
        </header>

        <main
          style={{
            flex: 1,
            padding: '24px',
            overflow: 'auto',
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}