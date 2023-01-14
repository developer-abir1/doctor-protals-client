import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import CartLoading from '../shared/CartLoading';
import Loading from '../shared/Loading';
import AppoinmentFrom from './AppoinmentFrom';
import AppointmentService from './AppointmentService';

const AvailableAppointment = ({ seletedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);

  const [treatments, setTreatments] = useState(null);

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: 'services',
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/services');
      return response.json();
    },
  });

  const appointment = appointmentOptions.data;

  // useEffect(() => {
  //   fetch('http://localhost:5000/services')
  //     .then((response) => response.json())
  //     .then((data) => setAppointmentOptions(data.data));
  // }, []);

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
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
