import React from 'react';

export const SlideClosing = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8 text-white">
        Let's Fix What's <span className="text-blue-500">Broken</span>
      </h1>
      <p className="text-3xl text-gray-300 mb-8">
        Together. In 5 weeks. With measurable impact.
      </p>
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-sm text-gray-400">Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-sm text-gray-400">Pilots</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50%</div>
              <div className="text-sm text-gray-400">Improvement</div>
            </div>
          </div>
          <p className="text-lg text-gray-300">
            Ready to transform how your teams work together?
          </p>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-4 text-lg text-gray-400">
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">✓</span> Data-driven approach
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">✓</span> Team co-creation
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">✓</span> Executive commitment
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-blue-500">✓</span> Measurable outcomes
        </p>
      </div>
    </div>
  );
};