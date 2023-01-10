import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiMapPin, FiPhoneCall } from 'react-icons/fi';
const InfoDR = () => {
  return (
    <div className="   ">
      <div className="  grid md:grid-cols-3   gap-4  grid-cols-1 px-4 py-4">
        {infoData.map((info) => (
          <div
            className={`${info.bgColor} w-full rounded-xl text-white flex  space-x-4 justify-center items-center h-32  px-4  `}
          >
            <div>
              <info.icon size={40} />
            </div>
            <div>
              <h3>{info.name}</h3>
              <p>{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoDR;

const infoData = [
  {
    name: 'Opening Hours',
    icon: AiOutlineClockCircle,
    description: 'Lorem Ipsum is simply dummy text of the pri',
    bgColor: 'bg-gradient-to-r from-secondary to-primary',
  },

  {
    name: 'Visit our location',
    icon: FiMapPin,
    description: 'Brooklyn, NY 10036, United States',
    bgColor: 'bg-accent',
  },

  {
    name: 'Contact us now',
    icon: FiPhoneCall,
    description: '+000 123 456789',
    bgColor: 'bg-gradient-to-r from-secondary to-primary ',
  },
];
