import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = 'btn  btn-accent text-white bg-accent';

  const pathname = useLocation();

  const linkItems = (
    <>
      <li>
        <Link
          to={'/'}
          className={`ml-4  ${pathname.pathname === '/' ? activeStyle : ''}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to={'/about'}
          className={`ml-4 ${
            pathname.pathname === '/about' ? activeStyle : ''
          }`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to={'/appointment'}
          className={`${
            pathname.pathname === '/appointment' ? activeStyle : ' '
          } ml-4`}
        >
          Appointment
        </Link>
      </li>
      <li>
        <Link
          to={'/reviews'}
          className={`${
            pathname.pathname === '/reviews' ? activeStyle : ''
          } ml-4`}
        >
          Reviews
        </Link>
      </li>
      <li>
        <Link
          to={'/contact'}
          className={`${
            pathname.pathname === '/contact' ? activeStyle : ''
          } ml-4`}
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          to={'/login'}
          className={`${
            pathname.pathname === '/login' ? activeStyle : ''
          } ml-4`}
        >
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100    ">
      <div className="navbar-start">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">
          Doctor Protals
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex  ">
        <ul className="menu menu-horizontal px-1">{linkItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
