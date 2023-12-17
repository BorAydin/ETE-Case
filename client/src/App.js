import { message } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout';
import { routes } from './routes';
import { getLocalStorageValue } from './utils/localStorage';

const EXCLUDED_PATHS = ['/login', '/register'];
const App = () => {
  useEffect(() => {
    const user = getLocalStorageValue('user');
    if (user && user?.token) {
      axios.defaults.headers['Authorization'] = `Bearer ${user?.token}`;
    } else {
      if (!EXCLUDED_PATHS.includes(window.location.pathname)) {
        message.error('User not authorized!');
        window.location.assign('/login');
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            exact
            path={route.path}
            element={
              route.path === '/login' || route.path === '/register' ? (
                route.element
              ) : (
                <AppLayout>{route.element}</AppLayout>
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
