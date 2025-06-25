import React from 'react';

export const SlideClosing = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8 text-white">
        Let's Build the <span className="text-blue-500">Future</span>
      </h1>
      <p className="text-3xl text-gray-300 mb-8">
        Together. Starting Today.
      </p>
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 mb-8">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">4-6</div>
              <div className="text-sm text-gray-400">Weeks to MVP</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$3.3M</div>
              <div className="text-sm text-gray-400">Year 1 Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">Platform Coverage</div>
            </div>
          </div>
          <p className="text-lg text-gray-300">
            Every day we wait is a missed opportunity to optimize, monetize, and delight our customers
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-xl text-gray-300 font-bold">
            Next Steps:
          </p>
          <div className="flex flex-col gap-3 text-lg text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <span className="text-blue-500">1.</span> Approve dedicated team formation
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-blue-500">2.</span> Schedule architecture review (this week)
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-blue-500">3.</span> Commit to Q1 deliverables
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-blue-500">4.</span> Communicate vision to all teams
            </p>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-blue-600/20 rounded-xl border border-blue-500/30">
          <p className="text-2xl text-blue-300 font-bold">
            "The best time to plant a tree was 20 years ago. <br/>
            The second best time is now."
          </p>
        </div>
      </div>
    </div>
  );
};