import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

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
              className="border border-gray-400 p-2 w-full"
              type="email"
              name="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email?.type && (
              <span className="text-red-500">{errors?.email.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password :
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="password"
              name="pasword"
              {...register('password', { required: 'password is required' })}
            />
            {errors.password?.type && (
              <span className="text-red-500">{errors?.password.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Don't have an account?{' '}
              <Link to="/register" className="text-secondary">
                {' '}
                register
              </Link>
            </label>
          </div>

          <button className="btn btn-primary  w-full  bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
            Submit
          </button>
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="grid h-20 card   rounded-box place-items-center">
            <button className="btn   w-full">
              <FcGoogle size={40} className="mr-12" /> CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
