import React from 'react';
import { 
  EyeOff, TrendingDown, AlertCircle
} from 'lucide-react';

export const SlideTheProblem = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8 text-center">
        {/* Stark Statement */}
        <h1 className="text-6xl font-bold text-primary mb-16">
          We have <span className="text-red-500">zero visibility</span> into customer usage
        </h1>

        {/* Three Consequences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface bg-opacity-50 rounded-xl p-8 border border-default">
            <div className="w-16 h-16 bg-red-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <EyeOff className="text-red-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Can't Price Appropriately</h3>
            <p className="text-secondary text-lg">
              Heavy users pay the same as light users. We're leaving money on the table.
            </p>
          </div>

          <div className="bg-surface bg-opacity-50 rounded-xl p-8 border border-default">
            <div className="w-16 h-16 bg-accent-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="text-accent-orange" size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Can't Optimize Resources</h3>
            <p className="text-secondary text-lg">
              No data means no insights. We're scaling blind and wasting resources.
            </p>
          </div>

          <div className="bg-surface bg-opacity-50 rounded-xl p-8 border border-default">
            <div className="w-16 h-16 bg-accent-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="text-accent-blue" size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Can't Help Customers</h3>
            <p className="text-secondary text-lg">
              Customers increasingly ask "How much am I using?" We can't answer.
            </p>
          </div>
        </div>

        {/* Bottom line impact */}
        <p className="text-2xl text-muted mt-16">
          Every day without metering is revenue lost and customers frustrated
        </p>
      </div>
    </div>
  );
};