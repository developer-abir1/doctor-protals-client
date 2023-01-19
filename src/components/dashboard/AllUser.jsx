import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../shared/Loading';

const AllUser = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(' http://localhost:5000/users');
      return response.json();
    },
  });

  console.log('search data', users);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
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
                  <button className="btn  btn-success">Make Admin</button>
                </td>
                <td>
                  <button className="btn  btn-danger">remove Admin</button>
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
