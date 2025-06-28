import React from 'react';

export const SlideTitle = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8 text-primary">
        Unblocking <span className="text-accent-blue">Product Execution</span>
      </h1>
      <p className="text-3xl text-secondary mb-12">
        A 5-Week Plan to Fix What's Broken
      </p>
      <p className="text-xl text-muted mb-12">
        (Without Boiling the Ocean)
      </p>
      <div className="flex flex-col gap-4 text-lg text-muted">
        <p className="flex items-center justify-center gap-2">
          <span className="text-accent-blue">•</span> Data-driven discovery & validation
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-accent-blue">•</span> Cross-functional alignment
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-accent-blue">•</span> Rapid pilot implementation
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-accent-blue">•</span> Measurable outcomes
        </p>
      </div>
    </div>
  );
};