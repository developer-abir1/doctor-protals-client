import { useEffect, useState } from 'react';

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState('');
  console.log('vai toi koui', isAdmin);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    fetch(`   https://doctor-protal-server.vercel.app/users/admin/${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.isAdmin);
        setIsAdminLoading(false);
      });
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
