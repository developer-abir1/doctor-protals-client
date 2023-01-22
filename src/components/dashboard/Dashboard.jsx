import React from 'react';
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
        ' https://doctor-protal-server.vercel.app/users ',
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      return response.json();
    },
  });
  const { data: booking = [] } = useQuery({
    queryKey: ['admin'],
    queryFn: async () => {
      const response = await fetch(
        ' https://doctor-protal-server.vercel.app/booking/admin',
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

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
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
