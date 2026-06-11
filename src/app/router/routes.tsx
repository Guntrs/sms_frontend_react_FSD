import { createBrowserRouter } from 'react-router-dom'

import { PublicLayout } from '@app/layouts/public-layout'
import { PrivateLayout } from '@app/layouts/private-layout'

import { LoginPage } from '@pages/auth/login/page'
import { DashboardPage } from '@pages/dashboard/page'
import { PosPage } from '@pages/pos/page'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
    ],
  },

  {
    element: <PrivateLayout />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },

      {
        path: '/pos',
        element: <PosPage />,
      },
    ],
  },
])