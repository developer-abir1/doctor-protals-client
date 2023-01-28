import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Loading from '../shared/Loading';
import { useQuery } from '@tanstack/react-query';
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(
        '      https://doctor-server-side-delta.vercel.app/users ',
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      return response.json();
    },
  });
  const { data: booking, isLoading: bookingLoading } = useQuery({
    queryKey: ['admin'],
    queryFn: async () => {
      const response = await fetch(
        '      https://doctor-server-side-delta.vercel.app/booking/admin',
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      return response.json();
    },
  });
  const user = users?.length;
  const booked = booking?.length;

  const { data: payment = [], isLoading: paymentLogding } = useQuery({
    queryKey: ['payment'],
    queryFn: async () => {
      const response = await fetch(
        '    https://doctor-server-side-delta.vercel.app/payment',
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      return response.json();
    },
  });

  const data = {
    labels: ['Total Users', 'Total Appointments'],
    datasets: [
      {
        label: 'length',
        data: [user, booked],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const total = payment?.reduce((acc, curr) => {
    return acc + curr?.price;
  }, 0);

  if (isLoading || bookingLoading || paymentLogding) {
    return <Loading />;
  }
  return (
    <div>
      <div className="  grid   grid-cols-2 md:grid-cols-4 gap-8 px-4 py-4">
        <div className="h-24  bg-green-500 rounded-md">
          <h2 className="text-center mt-2  text-xl md:text-2xl font-bold text-white ">
            User
          </h2>
          <h2 className="text-center mt-2 text-xl md:text-2xl font-bold text-white ">
            {users?.length}
          </h2>
        </div>
        <div className="h-24  bg-red-500 rounded-md">
          <h2 className="text-center mt-2 text-xl md:text-2xl font-bold text-white ">
            Appointments
          </h2>
          <h2 className="text-center mt-2 text-xl md:text-2xl font-bold text-white ">
            {booking?.length}
          </h2>
        </div>
        <div className="h-24  bg-blue-500 rounded-md">
          <h2 className="text-center mt-2 text-xl md:text-2xl font-bold text-white ">
            Total Earn
          </h2>
          <h2 className="text-center mt-2 text-xl md:text-2xl font-bold text-white ">
            ${total}
          </h2>
        </div>
        <div className="h-24  bg-yellow-500 rounded-md">
          <h2 className="text-center mt-2 text-xl md:text-2xl font-bold text-white ">
            Paid Appoinment
          </h2>
          <h2 className="text-center mt-2 text-xl md:text-2xl font-bold text-white ">
            {payment.length}
          </h2>
        </div>
      </div>
      <div className="flex justify-between h-[400px]">
        <div>
          <Pie data={data} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
