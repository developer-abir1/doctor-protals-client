import React, { useState } from 'react';
import photo from '../../assets/image/chair1.png';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ seletedDate, setSelectedDate }) => {
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid     ;
    color:#3A4256
    
  } 
   
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #2357da;
   }
`;
  return (
    <div className="hero  ">
      <div className="hero-content m-0 p-0  flex-col lg:flex-row-reverse">
        <img
          src={photo}
          className="max-w-52   rounded-lg shadow-2xl   border-2  "
        />
        <div className="md:mr-6 mr-0">
          <style>{css}</style>

          <DayPicker
            mode="single"
            selected={seletedDate}
            onSelect={setSelectedDate}
            modifiersClassNames={{
              selected: 'my-selected',
              today: 'my-today',
            }}
            className="    text-white  text-xl bg-gradient-to-r from-primary to-secondary rounded-md w-80 flex justify-center h-96 items-center"
            modifiersStyles={{
              disabled: { fontSize: '75%' },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
