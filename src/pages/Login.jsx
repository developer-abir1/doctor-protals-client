import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BiShow, BiHide } from 'react-icons/bi';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../components/shared/Loading';
import { toast } from 'react-hot-toast';
const LoginPage = () => {
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singIn, loading, setLoading, user, refresh } =
    useContext(AuthContext);

  const onSubmit = (data) => {
    singIn(data.email, data.password)
      .then((data) => {
        if (data.operationType === 'signIn') {
          toast.success(`Welcome ${user?.displayName} `, {
            duration: 4000,
            position: 'bottom-right',
          });
          setError('');
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  let contnet;
  if (loading) {
    contnet = <Loading />;
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
          {contnet}
          <button
            type="submit"
            className="btn btn-primary  w-full  bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Login
          </button>
          <div className="flex flex-col w-full border-opacity-50  ">
            <div className="divider       ">OR</div>
            <div className="grid h-20 card   rounded-box place-items-center">
              <button className="btn   w-full" type="button">
                <FcGoogle size={40} className="mr-12" /> CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
