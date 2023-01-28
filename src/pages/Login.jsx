import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BiShow, BiHide } from 'react-icons/bi';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../components/shared/Loading';
import { toast } from 'react-hot-toast';
import useToken from '../hooks/useToken';

const LoginPage = () => {
  const [error, setError] = useState();
  const [userLoginToken, setUserLoginToken] = useState(''); // get token from server
  const { singIn, loading, user, handleGoogleLogin } = useContext(AuthContext); // google login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // react hook form
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClick = () => {
    setPasswordVisible(!passwordVisible); // password show and hidden
  };

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'; // redirect after login

  const [token] = useToken(userLoginToken); // get token from server
  console.log('backebnd', token);
  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    singIn(data.email, data.password)
      .then((result) => {
        toast.success(`Login successfully  ${result.user.displayName}   `, {
          duration: 4000,
          position: 'bottom-top',
        });

        setUserLoginToken(result.user.email);
        setError(''); // clear error
      })
      .catch((err) => {
        setError(err.message); // set error
      });
  };

  const handleSavesUser = (email, name) => {
    // save user in database
    const users = {
      email,
      name,
    };

    fetch(`   https://server-red-omega.vercel.app/users`, {
      method: 'POST',
      headers: {
        'content-type': 'Application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(users),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserLoginToken(email);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  let content;
  if (loading) {
    content = <Loading />;
  }

  return (
    <div className="doctorApponment min-h-screen flex flex-col items-center">
      <div className="   w-96 container m-auto ">
        <h2 className=" text-secondary text-center text-4xl mb-8">
          Login an Account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg  "
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              className="border border-gray-400 p-2 w-full text-lg"
              type="email"
              name="email"
              {...register('email', {
                required: 'Email is required',
              })}
            />
            {errors.email?.type && (
              <span className="text-red-500">{errors?.email.message}</span>
            )}
          </div>
          <label className="block text-gray-700 font-medium mb-2">
            Password:
          </label>
          <div className="relative rounded-md shadow-sm mb-4">
            <input
              className="border border-gray-400 p-2 w-full text-lg"
              type={passwordVisible ? 'text' : 'password'}
              {...register('password', {
                required: 'password is required',
              })}
            />
            <div className="absolute top-0 right-0 mt-3 mr-3">
              <button type="button" onClick={handleClick}>
                {passwordVisible ? (
                  <BiShow size={30} className="text-secondary" />
                ) : (
                  <BiHide size={30} className=" text-accent" />
                )}
              </button>
            </div>
          </div>
          {errors.password?.type && (
            <span className="text-red-500">{errors?.password.message}</span>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Don't have an account?{' '}
              <Link to="/register" className="text-secondary">
                {' '}
                register
              </Link>
            </label>
          </div>
          {error && <span className="text-red-500">{error}</span>}

          <button
            type="submit"
            className="btn btn-primary  w-full  bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Login
          </button>
          {content}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
