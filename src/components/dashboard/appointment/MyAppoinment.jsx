import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../shared/Loading';
import { RxUpdate } from 'react-icons/rx';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const MyAppoinment = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myAppoinments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['booking', user?.email],
    queryFn: async () => {
      const response = await fetch(
        `     https://doctor-protal-server.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      return response.json();
    },
  });

  const myBookings = myAppoinments?.data;
  refetch();
  if (isLoading) {
    return <Loading />;
  }
  if (!myBookings.length) {
    return (
      <div className=" flex  justify-center items-center min-h-screen ">
        <h2 className="text-3xl font-bold capitalize">you have no bookings</h2>
      </div>
    );
  }

  return (
    <section>
      <div className="flex   justify-between  items-center  justify-items-center px-8  mt-4 mb-4">
        <h2 className="text-3xl"> My Appoinment</h2>

        <button className=" btn btn-outline  ">
          {myBookings[0]?.appointmentDate}
        </button>
      </div>

      <div>
        <div className="overflow-x-auto px-4 py-4">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Servics</th>
                <th>Times</th>
                <th>Date</th>
                <th>Price</th>

                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {myBookings.map((appoint, index) => (
                <tr key={appoint._id}>
                  <th>{index + 1} </th>
                  <td>{appoint.name}</td>
                  <td>{appoint.title}</td>
                  <td>{appoint.slot}</td>
                  <td>{appoint.appointmentDate}</td>
                  <td>${appoint.price}</td>

                  <td>
                    {appoint.price && !appoint.paid && (
                      <Link to={`/dashboard/payment/${appoint._id}`}>
                        <button className="btn btn-secondary text-white bg-gradient-to-r from-primary to-secondary w-full">
                          pay
                        </button>
                      </Link>
                    )}
                    {appoint.price && appoint.paid && (
                      <span className="text-green-600 font-bold">Paid</span>
                    )}
                  </td>
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
