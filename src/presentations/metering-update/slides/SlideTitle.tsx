import React from 'react';

export const SlideTitle = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8 text-primary">
        <span className="text-accent-blue">Metering</span> Platform Initiative
      </h1>
      <p className="text-3xl text-secondary mb-8">
        Executive Update
      </p>
      <p className="text-xl text-muted mb-12">
        Discovery & Alignment Phase
      </p>
      <div className="flex flex-col gap-4 text-lg text-muted">
        <p className="flex items-center justify-center gap-2">
          <span className="text-accent-blue">•</span> Enable usage-based monetization
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-accent-blue">•</span> Drive platform optimization
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-accent-blue">•</span> Provide customer transparency
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-accent-blue">•</span> Support data-driven decisions
        </p>
      </div>
    </div>
  );
};