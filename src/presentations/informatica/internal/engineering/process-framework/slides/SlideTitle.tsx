import React from 'react';
import { useInformaticaTheme } from '../../../../../../contexts/InformaticaThemeProvider';
import { InformaticaBadge } from '../../../../components/InformaticaComponents';

export const SlideTitle = () => {
  const { theme } = useInformaticaTheme();
  
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8" style={{ color: theme.colors.textPrimary }}>
        Unblocking <span style={{ color: theme.colors.secondary }}>Product Execution</span>
      </h1>
      <p className="text-3xl mb-12" style={{ color: theme.colors.textSecondary }}>
        A 5-Week Plan to Fix What's Broken
      </p>
      <p className="text-xl mb-12" style={{ color: theme.colors.textMuted }}>
        (Without Boiling the Ocean)
      </p>
      <div className="flex flex-col gap-4 text-lg">
        <p className="flex items-center justify-center gap-2" style={{ color: theme.colors.textMuted }}>
          <span style={{ color: theme.colors.secondary }}>•</span> Data-driven discovery & validation
        </p>
        <p className="flex items-center justify-center gap-2" style={{ color: theme.colors.textMuted }}>
          <span style={{ color: theme.colors.secondary }}>•</span> Cross-functional alignment
        </p>
        <p className="flex items-center justify-center gap-2" style={{ color: theme.colors.textMuted }}>
          <span style={{ color: theme.colors.secondary }}>•</span> Rapid pilot implementation
        </p>
        <p className="flex items-center justify-center gap-2" style={{ color: theme.colors.textMuted }}>
          <span style={{ color: theme.colors.secondary }}>•</span> Measurable outcomes
        </p>
      </div>
    </div>
  );
};