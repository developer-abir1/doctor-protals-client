import React from 'react';
import cavity1 from '../../assets/image/cavity1.png';
import fluoride from '../../assets/image/fluoride.png';
import whitening from '../../assets/image/whitening.png';

import teatment from '../../assets/image/treatment.png';
const Services = () => {
  return (
    <div className=" container m-auto">
      <h2 className="text-primary font-bold text-center  my-4">Our Services</h2>
      <h2 className="text-3xl text-center my-5  font-bold text-accent ">
        Services We Provide
      </h2>

      <div className=" grid md:grid-cols-3 grid-cols-1  gap-4 py-4 px-4 ">
        {ourServices.map((service) => (
          <div className="flex justify-center flex-col items-center cursor-pointer  shadow-md p-4 hover:shadow-md  rounded-md">
            <div>
              <img className=" w-18" src={service.icon} alt={service.title} />
            </div>
            <div>
              <h2 className="text-center text-2xl my-5  text-accent    font-bold">
                {service.title}
              </h2>
              <p className=" my-5 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium deserunt,
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="hero   bg-base-200" />
        <div className="hero-content flex-col lg:flex-row md:ml-20 ml-0">
          <img src={teatment} className="  rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-accent">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-secondary bg-gradient-to-r from-primary to-secondary   border-none text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

const ourServices = [
  {
    title: 'Fluoride Treatment',
    icon: fluoride,
    discrption:
      'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
  },
  {
    title: 'Fluoride Treatment',
    icon: cavity1,
    discrption:
      'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
  },
  {
    title: 'Fluoride Treatment',
    icon: whitening,
    discrption:
      'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
  },
];
