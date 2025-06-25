import React from 'react';

export const SlideTitle = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8 text-white">
        Unblocking <span className="text-blue-500">Product Execution</span>
      </h1>
      <p className="text-3xl text-gray-300 mb-12">
        A 5-Week Plan to Fix What's Broken
      </p>
      <p className="text-xl text-gray-400 mb-12">
        (Without Boiling the Ocean)
      </p>
      <div className="flex flex-col gap-4 text-lg text-gray-400">
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">•</span> Data-driven discovery & validation
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">•</span> Cross-functional alignment
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">•</span> Rapid pilot implementation
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">•</span> Measurable outcomes
        </p>
      </div>
    </div>
  );
};