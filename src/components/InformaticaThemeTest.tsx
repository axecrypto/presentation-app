import React from 'react';
import { usePresentation } from '../contexts/PresentationContext';

export const InformaticaThemeTest = () => {
  const { currentTheme, toggleTheme } = usePresentation();

  const colorExamples = [
    { name: 'Orange 500', bgClass: 'bg-orange-500', textClass: 'text-white' },
    { name: 'Orange 600', bgClass: 'bg-orange-600', textClass: 'text-white' },
    { name: 'Blue 500', bgClass: 'bg-blue-500', textClass: 'text-white' },
    { name: 'Blue 600', bgClass: 'bg-blue-600', textClass: 'text-white' },
    { name: 'Red 500', bgClass: 'bg-red-500', textClass: 'text-white' },
    { name: 'Gray 600', bgClass: 'bg-gray-600', textClass: 'text-white' },
  ];

  const backgroundExamples = [
    { name: 'Slate 900', bgClass: 'bg-slate-900', textClass: 'text-white' },
    { name: 'Gray 50', bgClass: 'bg-gray-50', textClass: 'text-gray-900' },
    { name: 'White', bgClass: 'bg-white', textClass: 'text-gray-900' },
  ];

  const textOnBackgrounds = [
    { bg: 'bg-slate-900', texts: ['text-orange-500', 'text-blue-500', 'text-orange-400', 'text-blue-400'] },
    { bg: 'bg-gray-50', texts: ['text-orange-500', 'text-blue-500', 'text-orange-600', 'text-blue-600'] },
  ];

  return (
    <div className={`min-h-screen p-8 ${currentTheme === 'dark' ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Informatica Theme Test - {currentTheme === 'dark' ? 'Dark' : 'Light'} Mode
          </h1>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Toggle Theme (T)
          </button>
        </div>

        {/* Brand Colors */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Informatica Brand Colors
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {colorExamples.map((color) => (
              <div key={color.name} className={`${color.bgClass} ${color.textClass} p-6 rounded-lg`}>
                <h3 className="font-bold">{color.name}</h3>
                <p className="text-sm opacity-90">White text on brand color</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Informatica Gradients
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg">
              <h3 className="font-bold">Orange Gradient</h3>
              <p>from-orange-500 to-orange-600</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
              <h3 className="font-bold">Blue Gradient</h3>
              <p>from-blue-600 to-blue-700</p>
            </div>
          </div>
        </section>

        {/* Background Colors */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Background Colors in {currentTheme} Theme
          </h2>
          <div className="space-y-4">
            {backgroundExamples.map((bg) => (
              <div key={bg.name} className={`${bg.bgClass} ${bg.textClass} p-6 rounded-lg border ${currentTheme === 'dark' ? 'border-slate-700' : 'border-gray-300'}`}>
                <h3 className="font-bold">{bg.name}</h3>
                <p>This is how text looks on this background</p>
              </div>
            ))}
          </div>
        </section>

        {/* Text Colors on Backgrounds */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Text Color Visibility Test
          </h2>
          {textOnBackgrounds.map((combo) => (
            <div key={combo.bg} className={`${combo.bg} p-6 rounded-lg mb-4`}>
              <h3 className="text-white font-bold mb-4">Text on {combo.bg}</h3>
              <div className="grid grid-cols-4 gap-4">
                {combo.texts.map((textClass) => (
                  <div key={textClass}>
                    <p className={`${textClass} font-bold`}>{textClass}</p>
                    <p className={`${textClass}`}>Sample text</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Problem Areas */}
        <section>
          <h2 className={`text-2xl font-bold mb-4 ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Potential Issues
          </h2>
          <div className={`${currentTheme === 'dark' ? 'bg-slate-800' : 'bg-white'} p-6 rounded-lg`}>
            <ul className={`space-y-2 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Informatica Blue (#001AFF) might be too dark on dark backgrounds</li>
              <li>• Orange colors might be too bright in light theme</li>
              <li>• Gray (#373737) might not have enough contrast in dark theme</li>
              <li>• Need to test all interactive states (hover, active, disabled)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};