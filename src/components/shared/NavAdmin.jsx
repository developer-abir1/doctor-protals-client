import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

const NavAdmin = () => {
  return (
    <div className="   ">
      <div className="navbar bg-base-100     container m-auto  ">
        <div className="navbar-start">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            Doctor Protals
          </Link>
        </div>

        <div className="navbar-end  lg:hidden    ">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost text-secondary drawer-button lg:hidden"
          >
            <AiOutlineMenu size={30} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavAdmin;
