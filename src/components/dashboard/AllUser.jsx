import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../shared/Loading';

const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(
        ' https://doctor-protal-server.vercel.app/users',
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      return response.json();
    },
  });
  console.log(users);

  const handelMakeAdmin = (id) => {
    const url = `https://doctor-protal-server.vercel.app/users/admin/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success('Make admin succesfully');

          refetch();
        } else {
          toast.error(`${data.massage}`);
        }
      });
  };
  const hendleRemovedmin = (id) => {
    const url = `https://doctor-protal-server.vercel.app/admin/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.error('Remove admin  ');

          refetch();
        } else {
          toast.error(`${data.massage}`);
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl my-10 text-center">All User data</h2>
      <div className="overflow-x-auto px-4">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Remove Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1} </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>

                <td>
                  {!user.role && (
                    <button
                      className="btn  btn-success"
                      onClick={() => handelMakeAdmin(user._id)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role && (
                    <button
                      className="btn  btn-danger"
                      onClick={() => hendleRemovedmin(user._id)}
                    >
                      remove Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
