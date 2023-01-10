import React from 'react';
import doctors from '../../assets/image/doctor-small 1.png';

const Appointment = () => {
  return (
    <div className="py-24  ">
      <div className="hero  doctorApponment   ">
        <div className="  hero-content    flex-col lg:flex-row container m-auto  ">
          <img
            src={doctors}
            className=" w-96    -mt-24 -mb-4  hidden lg:flex "
          />
          <div>
            <h1 className="text-xl font-bold    text-secondary capitalize">
              {' '}
              appointment{' '}
            </h1>
            <h1 className="text-5xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
