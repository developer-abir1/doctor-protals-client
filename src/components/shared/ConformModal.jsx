import React from 'react';

const ConformModal = ({
  title,
  message,
  closeModal,
  successAction,
  modalData,
}) => {
  return (
    <div className="modal" id="delete-doctor">
      <div className="modal-box ">
        <h3 className="font-bold text-lg text-red-500">{title}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <a
            href="#delete-doctor"
            className="btn  bg-red-500 hover:bg-red-500 text-white"
            onClick={() => successAction(modalData)}
          >
            conform delete
          </a>
          <button className="btn  btn-outline" onClick={() => closeModal()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConformModal;
