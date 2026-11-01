import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Monogram Chair Icon matching the uploaded Dreamhouse brand identity */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Backrest & rear leg */}
          <path
            d="M 46 14 L 54 14 L 54 36 L 70 36 L 70 43 L 64 64 L 64 64 L 66 64 L 61 64 L 64 64"
            fill="none"
          />
          {/* Modernist 'dh' chair silhouette based on exact brand mark */}
          <path
            d="M 46 14 C 46 14 54 14 54 14 L 54 37 L 69 37 L 69 44 L 65 62 L 62 62 L 66 43 L 54 43 L 54 62 L 46 62 Z"
            fill="currentColor"
          />
          {/* Loop of 'd' forming chair base & cushion */}
          <path
            d="M 46 37 C 33 37 23 47 23 59 C 23 71 33 81 46 81 C 52 81 54 78 54 78 L 54 70 C 54 70 51 73 46 73 C 38 73 31 66 31 59 C 31 51 38 45 46 45 Z"
            fill="currentColor"
          />
          {/* Right chair leg downward */}
          <path
            d="M 54 43 L 54 81 L 46 81 L 46 62 L 54 62"
            fill="currentColor"
          />
          <path
            d="M 64 43 L 68 43 L 62 62 L 58 62 Z"
            fill="currentColor"
          />
          {/* Subtle gold accent chair back stitch */}
          <rect x="49" y="18" width="2" height="14" fill="#D4AF37" opacity="0.9" />
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col tracking-tight">
          <div className="flex items-center text-sm md:text-base font-bold tracking-[0.18em] text-[#FDFDFD] uppercase leading-none font-sans">
            <span>D</span>
            <span className="relative inline-flex items-center justify-center">
              <span>R</span>
              {/* Gold chair icon accent inside the R silhouette */}
              <span className="absolute bottom-0 text-[9px] text-[#D4AF37] leading-none select-none">
                ■
              </span>
            </span>
            <span>EAMHOUSE</span>
          </div>
          <span className="text-[8px] md:text-[9.5px] font-medium tracking-[0.42em] text-[#D4AF37] uppercase leading-relaxed mt-0.5">
            F U R N I T U R E
          </span>
        </div>
      )}
    </div>
  );
};
