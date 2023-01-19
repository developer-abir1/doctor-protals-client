import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import { AuthContext } from '../context/AuthProvider';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-between flex-col min-h-screen ">
      <Navbar />

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-[#F1F5F9]  ">
          {/* <!-- Page content here --> */}

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-white  text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">Dashbord</Link>
            </li>
            <li>
              <Link to="myappoinment">MY Booking</Link>
            </li>

            <li>
              <Link to="alluser">All User info</Link>
            </li>
            <li>
              <Link to="allbookings">All User Bookings</Link>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
