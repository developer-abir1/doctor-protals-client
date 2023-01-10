import React from 'react';
import Appointment from '../components/home/Appointment';
import Contact from '../components/home/Contact';
import Header from '../components/home/Header';
import InfoDR from '../components/home/InfoDR';
import Services from '../components/home/Services';
import Testimonial from '../components/home/Testimonial';

const Home = () => {
  return (
    <div>
      <Header />
      <InfoDR />
      <Services />
      <Appointment />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
