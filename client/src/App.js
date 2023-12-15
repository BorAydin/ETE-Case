// import Navbar from './components/layout/Navbar';
// import Landing from './components/layout/Landing';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout';
import Companies from './pages/Companies';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/companies"
          element={
            <AppLayout>
              <Companies />
            </AppLayout>
          }
        />
        <Route
          path="/products"
          element={
            <AppLayout>
              <Products />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
