import React from 'react';
import { useInformaticaTheme } from '../../../../../../contexts/InformaticaThemeProvider';
import { informaticaBrandColors } from '../../../../../../styles/informaticaBrandColors';
import { InformaticaSlideWrapper, InformaticaHeader } from '../../../../components/InformaticaComponents';

export const SlideColorPalette = () => {
  const { theme, isDark } = useInformaticaTheme();
  
  const brandColors = [
    { name: 'Dark Orange (Primary)', hex: informaticaBrandColors.primary.darkOrange, usage: 'Primary CTAs, key highlights' },
    { name: 'Orange', hex: informaticaBrandColors.primary.orange, usage: 'Secondary actions, hover states' },
    { name: 'Blue', hex: informaticaBrandColors.primary.blue, usage: 'Links, selected states' },
    { name: 'Red', hex: informaticaBrandColors.primary.red, usage: 'Error states, alerts' },
    { name: 'Gray', hex: informaticaBrandColors.primary.gray, usage: 'Text, borders, backgrounds' }
  ];
  
  const themeColors = [
    { name: 'Primary', hex: theme.colors.primary, desc: 'Main brand color' },
    { name: 'Secondary', hex: theme.colors.secondary, desc: 'Complementary color' },
    { name: 'Text Primary', hex: theme.colors.textPrimary, desc: 'Main text color' },
    { name: 'Background', hex: theme.colors.bgPrimary, desc: 'Main background' },
    { name: 'Surface', hex: theme.colors.bgSurface, desc: 'Card/surface background' }
  ];
  
  return (
    <InformaticaSlideWrapper>
      <div className="max-w-7xl mx-auto">
        <InformaticaHeader 
          title="Informatica Brand Colors"
          subtitle={`Currently in ${isDark ? 'Dark' : 'Light'} Mode`}
        />
        
        {/* Official Brand Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.textPrimary }}>
            Official Brand Colors
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {brandColors.map((color) => (
              <div key={color.name} className="text-center">
                <div 
                  className="w-full h-24 rounded-lg mb-2 shadow-lg"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="font-bold text-sm" style={{ color: theme.colors.textPrimary }}>
                  {color.name}
                </p>
                <p className="text-xs font-mono" style={{ color: theme.colors.textSecondary }}>
                  {color.hex}
                </p>
                <p className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>
                  {color.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Current Theme Colors */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.textPrimary }}>
            Current Theme Colors
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {themeColors.map((color) => (
              <div key={color.name} className="text-center">
                <div 
                  className="w-full h-24 rounded-lg mb-2 shadow-lg border-2"
                  style={{ 
                    backgroundColor: color.hex,
                    borderColor: theme.colors.borderDefault
                  }}
                />
                <p className="font-bold text-sm" style={{ color: theme.colors.textPrimary }}>
                  {color.name}
                </p>
                <p className="text-xs font-mono" style={{ color: theme.colors.textSecondary }}>
                  {color.hex}
                </p>
                <p className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>
                  {color.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Color Guidelines */}
        <div 
          className="mt-8 p-6 rounded-xl"
          style={{
            backgroundColor: theme.colors.bgSurface,
            border: `1px solid ${theme.colors.borderDefault}`
          }}
        >
          <h3 className="text-lg font-bold mb-3" style={{ color: theme.colors.textPrimary }}>
            Informatica Color Guidelines
          </h3>
          <ul className="space-y-2">
            <li style={{ color: theme.colors.textSecondary }}>
              • <span style={{ color: theme.colors.primary }}>Orange (#FF4D00)</span> - Primary brand color for CTAs and highlights
            </li>
            <li style={{ color: theme.colors.textSecondary }}>
              • <span style={{ color: theme.colors.secondary }}>Blue (#001AFF)</span> - Complementary accent for interactive elements
            </li>
            <li style={{ color: theme.colors.textSecondary }}>
              • Recommended ratio: 60% neutral, 30% primary/secondary, 10% accent
            </li>
            <li style={{ color: theme.colors.textSecondary }}>
              • {isDark ? 'Dark mode uses lighter variants for better contrast' : 'Light mode uses original brand colors'}
            </li>
          </ul>
        </div>
      </div>
    </InformaticaSlideWrapper>
  );
};