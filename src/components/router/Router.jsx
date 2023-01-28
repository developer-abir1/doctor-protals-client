import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layout/DashboardLayout';
import Layout from '../../layout/Layout';
import About from '../../pages/About';
import Appointment from '../../pages/Appointment';
import ErrorPage from '../../pages/ErrorPage';
import Home from '../../pages/Home';
import LoginPage from '../../pages/Login';
import RegisterAccount from '../../pages/RegisterAccount';
import AddDoctor from '../dashboard/AddDoctor';
import AllUser from '../dashboard/AllUser';
import MyAppoinment from '../dashboard/appointment/MyAppoinment';
import Dashboard from '../dashboard/Dashboard';
import ManageDoctors from '../dashboard/ManageDoctors';
import Payment from '../dashboard/Payment';
import DisplayError from '../shared/DisplayError';
import AdminRouter from './AdminRoute';
import PrivateRoute from './PrivateRoute';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <DisplayError />,
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
    errorElement: <DisplayError />,
    children: [
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <MyAppoinment />
          </PrivateRoute>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <AdminRouter>
            <Dashboard />
          </AdminRouter>
        ),
      },
      {
        path: 'all-user',
        element: (
          <AdminRouter>
            <AllUser />
          </AdminRouter>
        ),
      },

      {
        path: 'add-doctors',
        element: (
          <AdminRouter>
            <AddDoctor />
          </AdminRouter>
        ),
      },
      {
        path: 'manage-doctors',
        element: (
          <AdminRouter>
            <ManageDoctors />
          </AdminRouter>
        ),
      },
      {
        path: '/dashboard/payment/:id',
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `    https://doctor-protal-server.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);

export default routers;
