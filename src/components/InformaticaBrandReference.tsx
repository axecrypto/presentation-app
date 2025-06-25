import React from 'react';
import { informaticaBrandColors, informaticaColorGuidelines } from '../styles/informaticaBrandColors';

export const InformaticaBrandReference = () => {
  const primaryColors = [
    { name: 'Dark Orange', hex: informaticaBrandColors.primary.darkOrange, css: 'bg-orange-600' },
    { name: 'Orange', hex: informaticaBrandColors.primary.orange, css: 'bg-orange-500' },
    { name: 'Red', hex: informaticaBrandColors.primary.red, css: 'bg-red-500' },
    { name: 'Blue', hex: informaticaBrandColors.primary.blue, css: 'bg-blue-500' },
    { name: 'Gray', hex: informaticaBrandColors.primary.gray, css: 'bg-gray-600' }
  ];

  const usageExamples = [
    {
      title: 'Primary CTA',
      demo: (
        <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-500 transition-colors">
          Get Started
        </button>
      )
    },
    {
      title: 'Secondary Action',
      demo: (
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors">
          Learn More
        </button>
      )
    },
    {
      title: 'Alert/Error',
      demo: (
        <div className="px-4 py-3 bg-red-500 text-white rounded-lg">
          Error: Please check your input
        </div>
      )
    },
    {
      title: 'Gradient Header',
      demo: (
        <div className="px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg">
          <h3 className="font-bold">Informatica Platform</h3>
        </div>
      )
    }
  ];

  return (
    <div className="p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Informatica Brand Colors</h1>
        <p className="text-gray-600 mb-8">Official brand color palette from brandcolorcode.com/informatica</p>

        {/* Primary Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Primary Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {primaryColors.map((color) => (
              <div key={color.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className={`${color.css} h-32 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{color.hex}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{color.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{color.css}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Usage Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usageExamples.map((example) => (
              <div key={example.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3">{example.title}</h3>
                {example.demo}
              </div>
            ))}
          </div>
        </section>

        {/* Color Guidelines */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Brand Guidelines</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-orange-600 mb-2">Primary (Dark Orange #FF4D00)</h3>
                <p className="text-gray-700">{informaticaColorGuidelines.primary.usage}</p>
                <p className="text-gray-500 text-sm mt-1">⚠️ {informaticaColorGuidelines.primary.avoid}</p>
              </div>
              <div>
                <h3 className="font-bold text-orange-500 mb-2">Secondary (Orange #FF7D00)</h3>
                <p className="text-gray-700">{informaticaColorGuidelines.secondary.usage}</p>
                <p className="text-gray-500 text-sm mt-1">⚠️ {informaticaColorGuidelines.secondary.avoid}</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-500 mb-2">Accent (Blue #001AFF)</h3>
                <p className="text-gray-700">{informaticaColorGuidelines.accent.usage}</p>
                <p className="text-gray-500 text-sm mt-1">⚠️ {informaticaColorGuidelines.accent.avoid}</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">Color Ratios</h3>
                <p className="text-gray-700">{informaticaColorGuidelines.ratios.recommended}</p>
                <p className="text-gray-500 text-sm mt-1">⚠️ {informaticaColorGuidelines.ratios.avoid}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Comparison */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-700 mb-3">Generic Corporate</h3>
              <div className="space-y-3">
                <div className="h-12 bg-blue-600 rounded"></div>
                <div className="h-12 bg-green-600 rounded"></div>
                <div className="h-12 bg-purple-600 rounded"></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-3">Informatica Brand</h3>
              <div className="space-y-3">
                <div className="h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded"></div>
                <div className="h-12 bg-blue-500 rounded"></div>
                <div className="h-12 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};