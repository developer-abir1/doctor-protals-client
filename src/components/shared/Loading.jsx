import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin border-secondary inline-block w-8 h-8 border-4 rounded-full  text-secondary "
        role="status"
      >
        <span className="visually-hidden">...</span>
      </div>
    </div>
  );
};

export default Loading;
