import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import photo from '../../assets/image/Dantal.png';
const NavAdmin = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="   ">
      <div className="navbar bg-base-100     container m-auto  ">
        <div className="navbar-start">
          <Link to={'/'} className=" ">
            <img src={photo} alt="logo" className="   w-[80px]" />
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
        <div className="navbar-end  hidden lg:flex   ">
          <h2 className=" capitalize  text-xl font-bold">
            {user?.displayName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NavAdmin;
