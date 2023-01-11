import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../layout/Layout';
import About from '../../pages/About';
import Appointment from '../../pages/Appointment';
import ErrorPage from '../../pages/ErrorPage';
import Home from '../../pages/Home';
import LoginPage from '../../pages/Login';

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
        element: <LoginPage />,
      },
      {
        path: 'appointment',
        element: <Appointment />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export default routers;