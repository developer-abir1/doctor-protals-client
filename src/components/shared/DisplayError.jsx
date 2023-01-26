import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem('accessToken');
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-red-100 flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-medium text-red-700">Error</h1>
      <p className="text-xl font-light text-red-700">Something went wrong.</p>
      <p className="text-lg font-light text-red-700">
        We're sorry for the inconvenience. Please try again later.
      </p>
      <h2 className="text-red-500">Message: {error.message}</h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
      >
        Log out
      </button>
    </div>
  );
};

export default DisplayError;
