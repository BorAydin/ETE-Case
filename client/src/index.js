import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/auth/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ConfigProvider>
);
