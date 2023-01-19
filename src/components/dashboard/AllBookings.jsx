import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../shared/Loading';

const AllBookings = () => {
  const { data: allusersBookings, isLoading } = useQuery({
    queryKey: ['admin'],
    queryFn: async () => {
      const response = await fetch(' http://localhost:5000/booking/admin');
      return response.json();
    },
  });

  console.log(allusersBookings);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2>All users Bookings {allusersBookings.lenght}</h2>
      <div className="overflow-x-auto px-4 py-4">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Service</th>
              <th>Email</th>
              <th>Time</th>
              <th>Date</th>
              <th>Phone</th>
              <th>Paymnet</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allusersBookings?.map((booking, index) => {
              const { title, email, name, phone, slot, appointmentDate } =
                booking;
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{name}</td>
                  <td>{title}</td>
                  <td>{email}</td>
                  <td> {slot}</td>
                  <td> {appointmentDate}</td>
                  <td> {phone}</td>
                  <td className="text-red-500">Panding</td>
                  <td>
                    <button className="btn">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBookings;
