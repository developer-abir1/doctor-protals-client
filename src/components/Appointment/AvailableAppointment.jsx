import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentFrom from './AppoinmentFrom';

const AvailableAppointment = ({ seletedDate, openModal }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch('appointmentOn.json')
      .then((response) => response.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="mt-16">
      <p className=" text-center text-3xl mb-4    ">
        Available Services on{' '}
        <span className="text-secondary font-bold">
          {format(seletedDate, 'PP')}
        </span>
      </p>

      <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 container m-auto ">
        {appointmentOptions.map((appointment) => {
          const { name, _id, slots } = appointment;
          return (
            <div key={_id} className="card  bg-base-100 shadow-xl border">
              <div className="card-body ">
                <h2 className="card-title text-secondary">{name}</h2>
                <p className={`${slots.length === 0 ? 'text-red-500' : ''}`}>
                  {' '}
                  {slots.length > 0 ? slots[0] : 'Try Another Day'}
                </p>
                <p className={`${slots.length === 0 ? 'text-red-500' : ''}`}>
                  {slots.length} {slots.length ? 'SPACES ' : 'SPACE '} AVAILABLE
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={openModal}
                    className="btn btn-secondary text-white bg-gradient-to-r from-primary to-secondary w-full"
                  >
                    Booking Appointment
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <AppoinmentFrom
          openModal={openModal}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </div>
    </section>
  );
};

export default AvailableAppointment;
