import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProviderWrapper } from './context/Auth.context.jsx'
import { CartContextProvider } from './context/Cart.context.jsx'
import { DataSourceProvider } from './context/DataSource.context.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <DataSourceProvider>
          <CartContextProvider>
   <ThemeProvider>
            <App />
          </ThemeProvider>
          </CartContextProvider>
        </DataSourceProvider>
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
