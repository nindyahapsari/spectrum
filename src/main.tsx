import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { AuthProviderWrapper } from './context/Auth.context.js';
import { DataSourceProvider } from './context/DataSource.context.js';
import { CompareTicketsProvider } from './context/CompareTickets.context.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <DataSourceProvider>
          <CompareTicketsProvider>
            <App />
          </CompareTicketsProvider>
        </DataSourceProvider>
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
