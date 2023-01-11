import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';

const AppoinmentFrom = ({ treatments, seletedDate, setTreatments }) => {
  const { name, slots } = treatments;
  const date = format(seletedDate, 'PP');
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const form = {
      appoinemntDate: date,

      ...data,
    };
    console.log(form);
    setTreatments(null);
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h2 className=" text-secondary text-center  text-xl ">{name}</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg  "
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Date:
              </label>
              <input
                className="border font-semibold bg-gray-200 p-2 w-full"
                type="text"
                name="date"
                value={date}
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Select Time:
              </label>
              <select
                name="solts"
                {...register('solts')}
                className="select select-bordered w-full  "
              >
                {slots.map((slot) => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
            </div>
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

            <button className="btn btn-primary  w-full  bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentFrom;

//

// // {
