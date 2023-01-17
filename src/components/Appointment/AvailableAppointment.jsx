import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../shared/Loading';
import AppoinmentFrom from './AppoinmentFrom';
import AppointmentService from './AppointmentService';

const AvailableAppointment = ({ seletedDate }) => {
  const [treatments, setTreatments] = useState(null);

  const date = format(seletedDate, 'PP');

  const {
    data: appointment = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['appoinmetnOn', date],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/appoinmetnOn?date=${date}`
      );
      return response.json();
    },
  });

  // const appointment = appointmentOptions.data;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="mt-16">
      <p className=" text-center md:text-3xl mb-16 text-xl   ">
        Available Services on{' '}
        <span className="text-secondary font-bold">
          {format(seletedDate, 'PP')}
        </span>
      </p>

      <div className="  justify-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  ">
        {appointment?.map((appointment) => (
          <>
            <AppointmentService
              appointment={appointment}
              key={appointment._id}
              seletedDate={seletedDate}
              setTreatments={setTreatments}
            />
          </>
        ))}
      </div>

      {treatments && (
        <AppoinmentFrom
          seletedDate={seletedDate}
          treatments={treatments}
          setTreatments={setTreatments}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
