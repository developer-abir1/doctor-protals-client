import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { error } from 'daisyui/src/colors/colorNames';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading';

const CheckOutFrom = ({ booking }) => {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();
  const { price, email, patient, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('   https://doctor-protal-server.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authentication: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('client secret', data);
        setClientSecret(data.clientSecret);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError('');
    }
    setSuccess('');
    setProcessing(true);
    console.log('card info', card);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      const payment = {
        transactionId: paymentIntent.id,
        bookingId: _id,
        price,
        email,
      };

      fetch(`   https://doctor-protal-server.vercel.app/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authentication: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess('Congrats! your payment completed');
            setTransactionId(paymentIntent.id);
          }
        });
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="mt-8 mx-4 border-2  h-8     "
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret || processing}
        className="btn btn-primary mt-24"
      >
        Pay
      </button>
      <div className="bg-white">
        {cardError && ( // payment error  message
          <p className="text-red-500 text-center mt-4">{paymentError}</p>
        )}
        {success && ( // payment success message
          <p className="text-green-500 text-center mt-4">{success}</p>
        )}
      </div>

      {transactionId && (
        <h2>
          {' '}
          Your Transacttion : <strong>{transactionId}</strong>{' '}
        </h2>
      )}
    </form>
  );
};

export default CheckOutFrom;
