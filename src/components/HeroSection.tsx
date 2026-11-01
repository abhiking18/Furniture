import React from 'react';
import { ArrowRight, Sparkles, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface HeroSectionProps {
  onExploreCollection: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollection,
  onOpenConsultation,
}) => {
  return (
    <section
      id="showroom-hero"
      className="relative min-h-[calc(100vh-80px)] w-full bg-[#1A1A1A] overflow-hidden flex flex-col justify-center border-b border-white/[0.08]"
    >
      {/* Subtle architectural grid guidelines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 lg:grid-cols-12 divide-x divide-white/[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Side Text (Cols 1-7 in wide layout) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pr-0 lg:pr-8">
          {/* Subtle Chapter / Region Marker */}
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
            <span className="w-8 h-[1px] bg-[#D4AF37]" aria-hidden="true" />
            <span>Atelier & Showroom · Jorabat, Meghalaya</span>
          </div>

          {/* Exact Required Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-[#FDFDFD] tracking-[-0.02em] leading-[1.08] [text-wrap:balance]">
              Curating Spaces of{' '}
              <span className="italic font-normal text-[#D4AF37]">Timeless</span>{' '}
              Grandeur.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-light text-[#FDFDFD]/75 leading-relaxed max-w-2xl font-sans pt-2">
              Bespoke ultra-luxury home furniture, customized walk-in wardrobes, and full-scale architectural home transformations in Jorabat.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onExploreCollection}
              className="group px-8 py-4 bg-[#D4AF37] hover:bg-[#E5C358] text-[#1A1A1A] font-medium text-xs tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-black/20"
            >
              <span>Explore the Showroom Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-4 border border-white/20 hover:border-[#D4AF37] text-[#FDFDFD] hover:text-[#D4AF37] text-xs font-medium tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Architectural Consultation</span>
            </button>
          </div>

          {/* Editorial Specs Bar */}
          <div className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 text-left">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]/80">Atelier Standard</p>
              <p className="text-sm font-serif text-[#FDFDFD] mt-1">Italian Raw Veneers</p>
              <p className="text-[11px] text-[#FDFDFD]/50 font-light">Precision hand-grain match</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]/80">Modular Systems</p>
              <p className="text-sm font-serif text-[#FDFDFD] mt-1">Zero-Clearance</p>
              <p className="text-[11px] text-[#FDFDFD]/50 font-light">Sensory ambient glow</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]/80">Showroom Suite</p>
              <p className="text-sm font-serif text-[#FDFDFD] mt-1">The Arch, 2nd Fl</p>
              <p className="text-[11px] text-[#FDFDFD]/50 font-light">Daily 10 AM – 8 PM</p>
            </div>
          </div>
        </div>

        {/* Right Side Visuals (Cols 8-12): Massive vertical architectural photograph */}
        <div className="lg:col-span-5 relative w-full h-[520px] sm:h-[620px] lg:h-[720px] rounded-none overflow-hidden group shadow-2xl border border-white/[0.1]">
          {/* High-Resolution Architectural Living Room Visual */}
          <div className="relative w-full h-full bg-[#141414] select-none">
            <ArchitecturalImage
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
              alt="Luxury modern living room showcasing customized premium wood furniture with warm hidden LED lighting accents"
              fallbackGraphic={
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 600 850"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="warmLedGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFA63D" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#FFA63D" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="verticalCove" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFF1C5" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <rect width="600" height="850" fill="#181818" />
                  <rect x="40" y="40" width="520" height="770" fill="#1E1E1E" />
                  <rect x="60" y="100" width="220" height="520" fill="#2B1910" />
                  <rect x="278" y="95" width="4" height="530" fill="url(#verticalCove)" />
                  <rect x="60" y="500" width="480" height="70" fill="#2D1C13" rx="1" />
                  <rect x="65" y="570" width="470" height="6" fill="url(#warmLedGlow)" />
                </svg>
              }
            />

            {/* Architectural Label Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between pointer-events-none">
              <div className="bg-[#1A1A1A]/90 backdrop-blur-md border border-white/10 p-4 max-w-xs shadow-xl">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] block">
                  Showroom Architecture
                </span>
                <p className="text-xs text-[#FDFDFD] font-serif font-medium mt-0.5">
                  Private Living Lounge Exhibit
                </p>
                <p className="text-[11px] text-[#FDFDFD]/60 mt-1">
                  Fluted French Walnut · Calacatta Marble · Architectural 2700K Hidden LEDs
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 bg-[#1A1A1A]/90 backdrop-blur-md px-3 py-2 border border-white/10 text-[10px] tracking-widest text-[#D4AF37] uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Bespoke Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
