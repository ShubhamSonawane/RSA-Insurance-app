/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Error(error: any) {
  return (
    <div className="bg-red-500 text-white p-3 rounded-lg shadow-lg text-center">
      <p className="text-lg font-bold">Error</p>
      <p>
        {error.errorMessage.message === 'TypeError: Failed to fetch'
          ? 'Please run localhost:3000 on your machine'
          : error.errorMessage.message}
      </p>
    </div>
  );
}

export default Error;
