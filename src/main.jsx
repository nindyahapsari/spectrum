import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context.jsx'
import { CartContextProvider } from './context/cart.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
