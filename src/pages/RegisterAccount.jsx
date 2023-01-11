import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const RegisterAccount = () => {
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
      <div className="   w-96 container m-auto">
        <h2 className=" text-secondary text-center text-4xl mb-8">
          Creact an Account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg  "
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Your Name:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="name"
              {...register('name', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              name="email"
              {...register('email', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="number"
              name="phone"
              {...register('phone', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password :
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="password"
              name="pasword"
              {...register('password', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Alrady have an account?{' '}
              <Link to="/login" className="text-secondary">
                {' '}
                Login
              </Link>
            </label>
          </div>

          <button className="btn btn-primary  w-full  bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterAccount;
