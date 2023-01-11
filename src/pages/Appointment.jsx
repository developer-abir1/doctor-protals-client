import React, { useState } from 'react';
import AppointmentBanner from '../components/Appointment/AppointmentBanner';
import AvailableAppointment from '../components/Appointment/AvailableAppointment';
const Appointment = () => {
  const [seletedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        seletedDate={seletedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppointment seletedDate={seletedDate} />
    </div>
  );
};

export default Appointment;
