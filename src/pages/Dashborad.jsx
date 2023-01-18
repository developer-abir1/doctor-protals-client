import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
const Dashborad = () => {
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#F1F5F9]  ">
          {/* <!-- Page content here --> */}
          <div className=" flex justify-end ">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost text-secondary drawer-button lg:hidden"
            >
              <AiOutlineMenu size={30} />
            </label>
          </div>
          <Outlet className="" />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-white  text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">Dashbord</Link>
            </li>
            <li>
              <Link to="myappoinment">MY Booking</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashborad;
