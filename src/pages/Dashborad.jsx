import React from 'react';
import { Link } from 'react-router-dom';

const Dashborad = () => {
  return (
    <section>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="dashboard">Dashbord</Link>
            </li>
            <li>
              <Link to="booking">MY Booking</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashborad;
