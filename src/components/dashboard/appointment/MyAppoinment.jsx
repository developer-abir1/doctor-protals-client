import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../shared/Loading';

const MyAppoinment = () => {
  const { user } = useContext(AuthContext);

  const { data: myAppoinments, isLoading } = useQuery({
    queryKey: ['booking'],
    queryFn: async () => {
      const response = await fetch(
        `https://doctor-protal-server.vercel.app/bookings?email=${user.email}`
      );
      return response.json();
    },
  });

  const myBookings = myAppoinments?.data;
  console.log(myBookings);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="flex   justify-between  items-center  justify-items-center px-8  mt-4 mb-4">
        <h2 className="text-3xl"> My Appoinment</h2>

        <button className=" btn btn-outline  ">
          {myBookings[0].appoinemntDate}
        </button>
      </div>

      <div>
        <div className="overflow-x-auto px-4">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Servics</th>
                <th>Times</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {myBookings.map((appoint, index) => (
                <tr key={index}>
                  <th>{index + 1} </th>
                  <td>{appoint.name}</td>
                  <td>{appoint.name}</td>
                  <td>{appoint.slot}</td>
                  <td
                    className={`${
                      myAppoinments.status === 'pandding'
                        ? 'text-red-500'
                        : 'text-green-500'
                    }`}
                  >
                    {myAppoinments.status}
                  </td>
                  <td>Update</td>
                  <td>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyAppoinment;
