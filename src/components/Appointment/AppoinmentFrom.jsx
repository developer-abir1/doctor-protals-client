import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const AppoinmentFrom = ({
  treatments,
  seletedDate,
  setTreatments,
  refetch,
}) => {
  const { name, slots, price } = treatments;

  const { user } = useContext(AuthContext); // user info

  const date = format(seletedDate, 'PP'); // date format
  const {
    register,
    handleSubmit,

    formState: { errors }, // form validation
  } = useForm();
  const onSubmit = (data) => {
    const from = {
      title: name,
      ...data,
      appointmentDate: date,
      name: user.displayName,
      email: user.email,
      price: price,
    };
    fetch(` https://doctor-protal-server.vercel.app/bookings`, {
      method: 'POST',
      headers: {
        'content-type': 'Application/json',

        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(from),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatments(null); // close modal
          toast.success('Booking successfully ', {
            position: 'top-left',
          });

          refetch();
        } else {
          setTreatments(null); // close modal
          toast.error(data.massage, {
            position: 'top-left',
          });
        }
      });
  }; // modal

  return (
    <div>
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
                name="slot"
                {...register('slot')}
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
                value={user.displayName}
                disabled
                {...register('name')}
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
                defaultValue={user.email}
                disabled
                {...register('email')}
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

            <button
              type="submit"
              className="btn btn-primary  w-full  bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
            >
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
