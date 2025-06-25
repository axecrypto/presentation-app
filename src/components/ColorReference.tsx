import React from 'react';

export const ColorReference = () => {
  const corporateColors = [
    {
      name: 'Primary Blue',
      css: 'bg-blue-500',
      hex: '#0066CC',
      usage: 'Primary actions, headers, links'
    },
    {
      name: 'Accent Orange',
      css: 'bg-orange-500',
      hex: '#FF6B35',
      usage: 'Highlights, CTAs (use sparingly)'
    },
    {
      name: 'Success Green',
      css: 'bg-green-500',
      hex: '#00A86B',
      usage: 'Success states, positive actions'
    },
    {
      name: 'Error Red',
      css: 'bg-red-500',
      hex: '#DC3545',
      usage: 'Errors, warnings, alerts'
    },
    {
      name: 'Neutral Gray',
      css: 'bg-gray-600',
      hex: '#6C757D',
      usage: 'Secondary text, borders'
    }
  ];

  const rules = [
    '✓ Always use white text on colored backgrounds',
    '✓ Limit color usage - prefer blue as primary',
    '✓ Orange is accent only - use sparingly',
    '✗ Avoid purple, teal, pink - use blue instead',
    '✗ No black text on orange backgrounds',
    '✗ Limit gradients and color variations'
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Corporate Color Palette</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {corporateColors.map((color) => (
          <div key={color.name} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className={`${color.css} h-24 flex items-center justify-center`}>
              <span className="text-white font-bold">{color.hex}</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-1">{color.name}</h3>
              <p className="text-sm text-gray-600">{color.usage}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4">Color Usage Guidelines</h3>
        <ul className="space-y-2">
          {rules.map((rule, index) => (
            <li key={index} className={`text-sm ${rule.startsWith('✓') ? 'text-green-700' : 'text-red-700'}`}>
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};