import React from 'react';

function Loading() {
  return (
    <div
      data-testid="spinner"
      className="flex items-center justify-center h-screen"
    >
      <div className="spinner border-4 border-t-4 border-gray-500 h-16 w-16" />
    </div>
  );
}

export default Loading;
