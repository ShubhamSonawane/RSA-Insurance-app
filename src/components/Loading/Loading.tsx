import React from 'react';

function Loading() {
  return (
    <div
      data-testid="spinner"
      className="flex items-center justify-center h-32"
    >
      <div>Loading...</div>
    </div>
  );
}

export default Loading;
