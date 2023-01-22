import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from 'react-icons/bi';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../components/shared/Loading';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import useToken from '../hooks/useToken';

const RegisterAccount = () => {
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [createUserEmailToken, setCreateUserEmailToken] = useState('');

  const {
    createAccount,
    loading,
    user,
    updateInfo,
    refresh,
    handleGoogleLogin,
  } = useContext(AuthContext);
  // password show and hidden

  const [token] = useToken(createUserEmailToken);

  const handleClick = () => {
    setPasswordVisible(!passwordVisible);
  }; // password show and hidden

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let content;
  if (loading) {
    content = <Loading />;
  }
  //

  const navigate = useNavigate();
  if (token) {
    navigate('/');
    reset();
  }

  const onSubmit = (data) => {
    createAccount(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.uid) {
        }
        const userInfo = {
          displayName: data.name,
          photoURL: data.image,
        };

        updateInfo(userInfo)
          .then((info) => {
            handleSavesUser(data.email, data.name);
            toast.success(
              `Congress!  ${user?.displayName} welcome to doctor protal  `,
              {
                duration: 4000,
                position: 'bottom-top',
              }
            );
          })
          .catch((error) => {
            setError(error.message);
          });
      })

      .catch((error) => {
        setError(error.message);
      });
  };

  const googleLogin = () => {
    handleGoogleLogin() // google login
      .then((result) => {
        const user = result.user;
        toast.success(`Login successfully  ${user.displayName} `, {
          duration: 4000,
          position: 'bottom-top',
        });

        handleSavesUser(user.email, user.displayName);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleSavesUser = (email, name) => {
    const users = {
      email,
      name,
    };

    fetch(`https://doctor-protal-server.vercel.app/users`, {
      method: 'POST',
      headers: {
        'content-type': 'Application/json',

        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(users),
    })
      .then((response) => response.json())
      .then((data) => {
        setCreateUserEmailToken(email);
      });
  };

  return (
    <div className="doctorApponment  h-[800px] flex flex-col items-center">
      <div className="   w-96 container m-auto">
        <h2 className=" text-secondary text-center text-4xl mb-8">
          Creact an Account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg  "
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Your Name:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="name"
              {...register('name')}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Photo URL:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="name"
              {...register('image')}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              name="email"
              {...register('email', {
                required: 'Email is required ',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                  message: 'Please right way set your  email address',
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600">{errors?.email.message}</span>
            )}
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="number"
              name="phone"
              {...register('phone')}
            />
          </div> */}
          <label className="block text-gray-700 font-medium mb-2">
            Password:
          </label>
          <div className="relative rounded-md shadow-sm mb-4">
            <input
              className="border border-gray-400 p-2 w-full text-lg"
              type={passwordVisible ? 'text' : 'password'}
              {...register('password', {
                required: 'Enter password is required',
                minLength: {
                  value: 6,
                  message: ' password  must be 6   characters longer',
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    'Password mast be strong ex: 1 Small Letter , 1 Upper Case Latter , 1 symbol , 1 number must have to',
                },
              })}
            />
            <div className="absolute top-0 right-0 mt-3 mr-3">
              <button type="button" onClick={handleClick}>
                {passwordVisible ? (
                  <BiShow size={30} className="text-secondary" />
                ) : (
                  <BiHide size={30} className=" text-accent" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500">{errors?.password.message}</span>
            )}
            {error && <span className="text-red-500">{error}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Alrady have an account?{' '}
              <Link to="/login" className="text-secondary">
                {' '}
                Login
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary  w-full  bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Regester
          </button>
          {content}

          <div className="flex flex-col w-full border-opacity-50  ">
            <div className="divider       ">OR</div>
            <div className="grid h-20 card   rounded-box place-items-center">
              <button
                className="btn   w-full"
                type="button"
                onClick={googleLogin}
              >
                <FcGoogle size={40} className="mr-12" /> CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterAccount;
