import React from 'react';
import photo from '../assets/image/chair1.png';
const Appointment = () => {
  return (
    <div>
      <div className="container m-auto">
        <div className="hero   n-none lg:h-[500px] ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={photo} className="  w-96  " />
            <div className=" "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
