import { useEffect, useState } from 'react';

const useToken = (email) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    if (email) {
      fetch(`  https://doctor-protal-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            console.log('token use token side call', data.accessToken);
            localStorage.setItem('accessToken', data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);

  return [token];
};

export default useToken;
