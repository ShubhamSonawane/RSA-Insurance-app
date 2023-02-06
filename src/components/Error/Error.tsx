import React from 'react';

interface ErrorProps {
  errorMessage: string;
}

function Error({ errorMessage }: ErrorProps) {
  return (
    <div className="bg-red-500 text-white p-3 rounded-lg shadow-lg text-center">
      <p className="text-lg font-bold">Error</p>
      <p>{errorMessage}</p>
    </div>
  );
}

export default Error;
