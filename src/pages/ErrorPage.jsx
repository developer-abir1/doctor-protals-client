import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';

const ErrorPage = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <animated.div className="flex h-screen items-center justify-center text-center  doctorApponment  ">
      <div className="  bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl text-secondary font-medium  ">
          E<span className="text-red-500">rr</span>o
          <span className="text-red-500">r</span>
        </h1>
        <p className="  text-red-500  ">
          An error has occurred while trying to access{' '}
          <code className="">{location.pathname}</code>
        </p>
        <p className="text-gray-600">Please check the URL and try again.</p>
        <a
          href="/"
          className="btn btn-primary  mt-4 w-full  bg-gradient-to-r from-primary to-secondary text-white font-medium py-2 px-4 rounded-lg"
        >
          Go Home
        </a>
      </div>
    </animated.div>
  );
};

export default ErrorPage;
