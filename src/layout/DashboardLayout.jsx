import React, { useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Loading from '../components/shared/Loading';
import NavAdmin from '../components/shared/NavAdmin';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { FiLogOut } from 'react-icons/fi';

const DashboardLayout = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem('accessToken');
      })
      .catch((err) => console.log(err));
  };

  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

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
          <ul>
            <li
              className="ml-2 flex   btn btn-ghost w-32  "
              onClick={handleLogout}
            >
              <FiLogOut size={28} className="text-green-500 " />{' '}
              <a className="ml-2">Logout</a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
