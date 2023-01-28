import React, { useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Loading from '../components/shared/Loading';
import NavAdmin from '../components/shared/NavAdmin';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);

  return (
    <div className="flex justify-between flex-col min-h-screen ">
      <NavAdmin />
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
          <ul className="menu p-4 w-80       ">
            {/* <!-- Sidebar content here --> */}

            <li>
              <Link to="/dashboard">User Dashboard</Link>
            </li>

            {isAdmin && (
              <>
                <li>
                  <Link to="dashboard">Admin Dashboard</Link>
                </li>
                <li>
                  <Link to="all-user">All User info</Link>
                </li>

                <li>
                  <Link to="add-doctors">Add Doctors</Link>
                </li>
                <li>
                  <Link to="manage-doctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
