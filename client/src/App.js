// import Navbar from './components/layout/Navbar';
// import Landing from './components/layout/Landing';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout';
import { routes } from './routes';

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            exact
            path={route.path}
            element={<AppLayout>{route.element}</AppLayout>}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
