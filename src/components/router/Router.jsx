import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layout/DashboardLayout';
import Layout from '../../layout/Layout';
import About from '../../pages/About';
import Appointment from '../../pages/Appointment';
import ErrorPage from '../../pages/ErrorPage';
import Home from '../../pages/Home';
import LoginPage from '../../pages/Login';
import RegisterAccount from '../../pages/RegisterAccount';
import AllBookings from '../dashboard/AllBookings';
import AllUser from '../dashboard/AllUser';
import MyAppoinment from '../dashboard/appointment/MyAppoinment';
import Dashboard from '../dashboard/Dashboard';
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
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: 'myappoinment',
        element: <MyAppoinment />,
      },
      {
        path: 'alluser',
        element: <AllUser />,
      },
      {
        path: 'allbookings',
        element: <AllBookings />,
      },
    ],
  },
]);

export default routers;
