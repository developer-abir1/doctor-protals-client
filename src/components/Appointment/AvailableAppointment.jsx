import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentFrom from './AppoinmentFrom';
import AppointmentService from './AppointmentService';

const AvailableAppointment = ({ seletedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  const [treatments, setTreatments] = useState(null);
  useEffect(() => {
    fetch('appointmentOn.json')
      .then((response) => response.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <section className="mt-16">
      <p className=" text-center md:text-3xl mb-16 text-xl   ">
        Available Services on{' '}
        <span className="text-secondary font-bold">
          {format(seletedDate, 'PP')}
        </span>
      </p>

      <div className="  justify-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  ">
        {appointmentOptions.map((appointment) => (
          <AppointmentService
            appointment={appointment}
            key={appointment._id}
            seletedDate={seletedDate}
            setTreatments={setTreatments}
          />
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
