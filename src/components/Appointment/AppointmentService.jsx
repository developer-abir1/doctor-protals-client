import React, { useState } from 'react';

const AppointmentService = ({ appointment, setTreatments }) => {
  const { name, slots, price } = appointment;

  return (
    <>
      <div className="card  w-80  shadow-xl border">
        <div className="card-body ">
          <h2 className="card-title text-secondary text-2xl">{name}</h2>
          <p className={`${slots.length === 0 ? 'text-red-500' : ''}`}>
            {' '}
            {slots.length > 0 ? slots[0] : 'Try Another Day'}
          </p>
          <p className={`${slots.length === 0 ? 'text-red-500' : ''}`}>
            {slots.length} {slots.length > 1 ? 'SPACES ' : 'SPACE '} AVAILABLE
          </p>
          <h2 className="    ml-4">Price: $ {price}</h2>
          <div className="card-actions justify-end">
            <label
              htmlFor="my-modal-3"
              className="btn btn-secondary text-white bg-gradient-to-r from-primary to-secondary w-full"
              disabled={slots.length === 0}
              onClick={() => setTreatments(appointment)}
            >
              Booking Appointment
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentService;
