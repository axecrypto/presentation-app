import React from 'react';

export const SlideTitle = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8 text-white">
        <span className="text-blue-500">Metering</span> Platform Initiative
      </h1>
      <p className="text-3xl text-gray-300 mb-8">
        Executive Update
      </p>
      <p className="text-xl text-gray-400 mb-12">
        Discovery & Alignment Phase
      </p>
      <div className="flex flex-col gap-4 text-lg text-gray-400">
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">•</span> Enable usage-based monetization
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">•</span> Drive platform optimization
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">•</span> Provide customer transparency
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">•</span> Support data-driven decisions
        </p>
      </div>
    </div>
  );
};