import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading';
import CheckOutFrom from './CheckOutFrom';

const Payment = () => {
  const bookings = useLoaderData();
  const { title, price, slot, appointmentDate } = bookings;

  const navigation = useNavigation();

  const stripePromise = loadStripe(
    'pk_test_51I85aIDmKkqQZHqbKD7uMOTmawwdIop41uaRoa8LKstAJnr1ac5KoGj2xnXCC5Vwx89EI2B9J32gnt07B7VVX0ao00f3CLB3qN'
  );

  if (navigation.state === 'loading') {
    return <Loading />;
  }

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl mt-8">
          Payment For <strong className="  text-secondary">{title} </strong>
        </h2>
        <p className="mt-2">
          Please Pay $<strong>{price}</strong> for Appointments on{' '}
          {appointmentDate} at {slot}
        </p>
      </div>
      <div className=" justify-center flex">
        <div className="my-16   w-96  bg-white  py-4 px-4 rounded-md ">
          <Elements stripe={stripePromise}>
            <CheckOutFrom booking={bookings} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
