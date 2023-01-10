import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

const Layout = () => {
  return (
    <div className=" flex flex-col justify-between  min-h-screen container m-auto    ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
