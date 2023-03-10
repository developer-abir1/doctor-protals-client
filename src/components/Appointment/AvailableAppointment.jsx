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
    data: appointment,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['appointmentOn', date],
    queryFn: async () => {
      const response = await fetch(
        `    https://doctor-server-side-delta.vercel.app/appointmentOn?date=${date}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      return response.json();
    },
  });

  // const appointment = appointmentOptions.data;
  console.log('this is appoiment', appointment);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="mt-16">
      <p className=" text-center md:text-3xl mb-16 text-xl   ">
        Available Services on{' '}
        <span className="text-secondary font-bold">{date}</span>
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
