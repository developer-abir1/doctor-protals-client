import React, { useState } from 'react';
import Modal from 'react-modal';

const AppoinmentFrom = ({ modalIsOpen, closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, message);
    // Here you can implement the functionality to send the message to the intended recipient.
    // For example, you could use an Email library like nodemailer or send the message via an API
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="  w-[320px] md:w-[500px] h-[400px]  container m-auto py-4 ">
        <h2 className=" text-secondary text-center  text-xl ">Contact Us</h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg  ">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <button className="btn btn-primary  w-full  bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AppoinmentFrom;
