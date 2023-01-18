import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../layout/Layout';
import About from '../../pages/About';
import Appointment from '../../pages/Appointment';
import Dashborad from '../../pages/Dashborad';
import ErrorPage from '../../pages/ErrorPage';
import Home from '../../pages/Home';
import LoginPage from '../../pages/Login';
import RegisterAccount from '../../pages/RegisterAccount';
import MyAppoinment from '../dashboard/appointment/MyAppoinment';
import PrivateRoute from './PrivateRoute';

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
        path: 'register',
        element: <RegisterAccount />,
      },
      {
        path: 'dashboard',
        element: (
          <PrivateRoute>
            <Dashborad></Dashborad>
          </PrivateRoute>
        ),
        children: [
          {
            path: 'myappoinment',
            element: <MyAppoinment />,
          },
        ],
      },
      {
        path: 'appointment',
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
      },

      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export default routers;
