import React from 'react';
import { useInformaticaTheme } from '../../../../../../contexts/InformaticaThemeProvider';
import { 
  InformaticaSlideWrapper, 
  InformaticaCard
} from '../../../../components/InformaticaComponents';

export const SlideClosing = () => {
  const { theme } = useInformaticaTheme();
  
  return (
    <InformaticaSlideWrapper>
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-8" style={{ color: theme.colors.textPrimary }}>
          Let's Fix What's <span style={{ color: theme.colors.primary }}>Broken</span>
        </h1>
        <p className="text-3xl mb-8" style={{ color: theme.colors.textSecondary }}>
          Together. In 5 weeks. With measurable impact.
        </p>
        <div className="max-w-3xl mx-auto">
          <InformaticaCard variant="secondary">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: theme.colors.secondary }}>5</div>
                <div className="text-sm" style={{ color: theme.colors.textMuted }}>Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: theme.colors.secondary }}>3</div>
                <div className="text-sm" style={{ color: theme.colors.textMuted }}>Pilots</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: theme.colors.primary }}>50%</div>
                <div className="text-sm" style={{ color: theme.colors.textMuted }}>Improvement</div>
              </div>
            </div>
            <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
              Ready to transform how your teams work together?
            </p>
          </InformaticaCard>
        </div>
        <div className="mt-12 flex flex-col gap-4 text-lg">
          <p className="flex items-center justify-center gap-2" style={{ color: theme.colors.textSecondary }}>
            <span style={{ color: theme.colors.primary }}>✓</span> Data-driven approach
          </p>
          <p className="flex items-center justify-center gap-2" style={{ color: theme.colors.textSecondary }}>
            <span style={{ color: theme.colors.primary }}>✓</span> Team co-creation
          </p>
          <p className="flex items-center justify-center gap-2" style={{ color: theme.colors.textSecondary }}>
            <span style={{ color: theme.colors.primary }}>✓</span> Executive commitment
          </p>
          <p className="flex items-center justify-center gap-2" style={{ color: theme.colors.textSecondary }}>
            <span style={{ color: theme.colors.primary }}>✓</span> Measurable outcomes
          </p>
        </div>
      </div>
    </InformaticaSlideWrapper>
  );
};