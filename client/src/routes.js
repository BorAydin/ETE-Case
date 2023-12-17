import Compaines from './pages/Companies';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

export const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/companies',
    element: <Compaines />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/products',
    element: <Products />,
  },
];
