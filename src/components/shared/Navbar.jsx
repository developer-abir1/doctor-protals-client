import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

import photo from '../../assets/image/Dantal.png';
const Navbar = () => {
  const activeStyle = 'btn  btn-accent text-white bg-accent';

  const pathname = useLocation();

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem('accessToken');
      })
      .catch((err) => console.log(err));
  };

  const linkItems = (
    <>
      <li>
        <Link
          to={'/'}
          className={`ml-2  ${pathname.pathname === '/' ? activeStyle : ''}`}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to={'/appointment'}
          className={`${
            pathname.pathname === '/appointment' ? activeStyle : ' '
          } ml-2`}
        >
          Appointment
        </Link>
      </li>
      <li>
        <Link
          to={'/reviews'}
          className={`${
            pathname.pathname === '/reviews' ? activeStyle : ''
          } ml-2`}
        >
          Reviews
        </Link>
      </li>
      <li>
        <Link
          to={'/dashboard'}
          className={`${
            pathname.pathname === '/dashboard' ? activeStyle : ''
          } ml-2`}
        >
          Dashboard
        </Link>
      </li>
      {user?.uid ? (
        <>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="https://placeimg.com/80/80/people" /> */}
                {user?.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <FaUserCircle size={40} />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">{user?.displayName}</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <li>
          <Link
            className={`${
              pathname.pathname === '/login' ? activeStyle : ''
            } ml-2`}
            to="/login"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="   ">
      <div className="navbar bg-base-100     container m-auto  ">
        <div className="navbar-start">
          <Link to={'/'} className="  normal-case text-xl">
            <img src={photo} alt="logo" className="   w-[80px] " />
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1">{linkItems}</ul>
        </div>
        <div className="navbar-end  lg:hidden    ">
          <div className="dropdown  dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 space-y-5 shadow bg-base-100 rounded-box w-52"
            >
              {linkItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
