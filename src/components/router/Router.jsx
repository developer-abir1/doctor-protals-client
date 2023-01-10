import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../layout/Layout';
import About from '../../pages/About';
import ErrorPage from '../../pages/ErrorPage';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export default routers;
