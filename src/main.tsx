import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'

import { AppProvider } from '@app/providers/app-provider'

// Selecciona el contenedor en tu HTML y crea la raíz de React

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  
  <React.StrictMode>
   
    <AppProvider>
      
      <App />
    </AppProvider>
  </React.StrictMode>,
)