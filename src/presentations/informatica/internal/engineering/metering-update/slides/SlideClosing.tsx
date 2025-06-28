import React from 'react';

export const SlideClosing = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8 text-primary">
        Let's Build the <span className="text-accent-orange">Future</span>
      </h1>
      <p className="text-3xl text-secondary mb-8">
        Together. Starting Today.
      </p>
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-default mb-8">
          <p className="text-xl text-secondary">
            Every day we wait is a missed opportunity to understand our platform better,<br/>
            serve our customers more effectively, and capture the value we're creating.
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-xl text-secondary font-bold">
            Next Steps:
          </p>
          <div className="flex flex-col gap-3 text-lg text-muted">
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">1.</span> Align on vision and commitment
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">2.</span> Connect architecture and engineering teams
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">3.</span> Complete technical discovery phase
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">4.</span> Define team structure and ownership
            </p>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-accent-orange bg-opacity-10 rounded-xl border border-accent-orange border-opacity-30">
          <p className="text-2xl text-accent-orange font-bold">
            "The best time to plant a tree was 20 years ago. <br/>
            The second best time is now."
          </p>
        </div>
      </div>
    </div>
  );
};