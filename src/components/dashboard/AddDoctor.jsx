import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BsImage } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigte = useNavigate();

  const { data: service = [] } = useQuery({
    queryKey: ['appointmentOn'],
    queryFn: async () => {
      const response = await fetch(
        '  https://server-pi-rosy.vercel.app/appointmentOn'
      );
      return response.json();
    },
  });
  const name = service.map((item) => item.name);

  const imageBBApi = 'e805ac140d838f01a27f27aad6e43f4d'; // imageBB api key

  const onSubmit = (data) => {
    const file = data.image[0];
    const fromData = new FormData();

    fromData.append('image', file);
    fetch(`https://api.imgbb.com/1/upload?key=${imageBBApi}`, {
      method: 'POST',
      body: fromData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.data.url) {
          toast.loading(` Plase wait...  `);
        }
        const doctInfo = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          img: result.data.url,
        };
        if (result.success) {
          fetch('  https://server-pi-rosy.vercel.app/doctors', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },

            body: JSON.stringify(doctInfo),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success(` Doctor added successfully   `);
                reset();
                navigte('/dashboard/manage-doctors');
              }
            })
            .catch((error) => {
              toast.error(error.message);
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl pl-12 mt-4 mb-4  uppercase">ADD Doctor</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg max-w-md  ml-12    "
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Your Name:
          </label>
          <input
            className="border border-gray-400 p-2 w-full max-w-md "
            type="text"
            name="name"
            placeholder="Enter your name"
            {...register('name', { required: true })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email:</label>
          <input
            className="border border-gray-400 p-2 w-full max-w-md "
            type="email"
            name="email"
            placeholder="Enter your email"
            {...register('email', { required: true })}
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-2">
            Specialty:
          </label>
          <select
            className="select select-bordered w-full max-w-md"
            {...register('specialty', { required: true })}
          >
            {name.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="mb-4 relative">
          <label
            id="images"
            className="   flex     text-gray-700 font-medium mb-2 w-full max-w-md border-2 h-24 border-dotted border-primary justify-center   items-center     "
          >
            <span className=" text-accent">Upload Images</span>
            <BsImage size={30} className="text-secondary ml-4 " />
          </label>
          <input
            type="file"
            name="image"
            htmlFor="images"
            {...register('image', { required: true })}
            className="  absolute h-24 top-0 opacity-0 z-10 w-full max-w-md file-input-primary file-input file-input-md"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary  w-full max-w-md  bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        >
          Add a Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
