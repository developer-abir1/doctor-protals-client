import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConformModal from '../shared/ConformModal';
import Loading from '../shared/Loading';

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const response = await fetch(
        '   https://doctor-protal-server.vercel.app/doctors ',
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      return response.json();
    },
  });

  const closeModal = () => {
    setDeleteDoctor(null);
  };

  const hendleDeleteAdmin = async (doctor) => {
    const id = doctor._id;

    fetch(`   https://doctor-protal-server.vercel.app/doctors/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success(` Doctor deleted successfully   `);
          refetch();
          setDeleteDoctor(null);
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="  mt-4 text-3xl  ml-10  font-bold  ">
        Manage Doctors: {doctors?.length}
      </h2>
      <div className="overflow-x-auto w-full  px-10   mt-6 mb-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Aavtar</th>
              <th>Name</th>
              <th>Email</th>
              <th>specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr>
                <th> {i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={doctor?.img} alt={doctor?.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{doctor?.name}</td>
                <td>{doctor?.email}</td>
                <td>{doctor?.specialty}</td>
                <td>
                  <a
                    href="#delete-doctor"
                    className=" btn bg-red-500 hover:bg-red-600 border-none text-white badge-ghost"
                    onClick={() => setDeleteDoctor(doctor)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConformModal
          title="Are you sure you want to delete"
          message={` if you delete ${deleteDoctor.name}  can't back in future `}
          closeModal={closeModal}
          successAction={hendleDeleteAdmin}
          modalData={deleteDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
