import React, { useEffect, useState } from 'react';

const useToken = (email) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem('accessToken', data.access_token);
            setToken(data.access_token);
          }
        });
    }
  }, [email]);

  return [token];
};

export default useToken;
