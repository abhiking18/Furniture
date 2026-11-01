import React from 'react';

export const DemoBanner: React.FC = () => {
  return (
    <aside
      aria-label="Demo notice"
      className="sticky top-0 z-50 w-full bg-[#111111] border-b border-white/[0.08] text-center px-4 py-2.5 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"
          aria-hidden="true"
        />
        <p className="text-[10px] md:text-xs font-medium tracking-[0.18em] uppercase text-[#FDFDFD]/90 select-none">
          DEMO PREVIEW CONCEPT — Private Design Layout for Review. Not for Commercial Distribution.
        </p>
      </div>
    </aside>
  );
};
