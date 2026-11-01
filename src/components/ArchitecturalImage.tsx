import React, { useState } from 'react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackGraphic?: React.ReactNode;
  overlayGradient?: boolean;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = '',
  fallbackGraphic,
  overlayGradient = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#161616] ${className}`}>
      {/* Fallback Graphic (rendered if image errors or while loading) */}
      {fallbackGraphic && (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isLoaded && !hasError ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {fallbackGraphic}
        </div>
      )}

      {/* Real High-Resolution Photograph */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-105`}
        />
      )}

      {/* Luxury Film Scrim Overlay */}
      {overlayGradient && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      )}
    </div>
  );
};
