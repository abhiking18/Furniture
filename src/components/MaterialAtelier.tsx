import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface MaterialSwatch {
  id: string;
  name: string;
  origin: string;
  category: string;
  finish: string;
  description: string;
  appliedIn: string;
  gradient: string;
  texturePattern: string;
  imageUrl: string;
}

const swatches: MaterialSwatch[] = [
  {
    id: 'calacatta',
    name: 'Calacatta Michelangelo Marble',
    origin: 'Carrara, Italy',
    category: 'Monolithic Stone',
    finish: 'Silky Honed Satin',
    description: 'Distinctive warm amber and dove-grey veining over a luminous warm-white crystalline background, precision cut and book-matched.',
    appliedIn: 'Coffee tables, waterfall kitchen islands, bathroom console tops',
    gradient: 'from-[#FFFFFF] via-[#F3EFE8] to-[#E3DDD1]',
    texturePattern: 'marble',
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'french-walnut',
    name: 'Smoked French Walnut',
    origin: 'Burgundy, France',
    category: 'Architectural Timber',
    finish: 'Natural Matte Polyurethane (0% Gloss)',
    description: 'Slow-smoked architectural veneer preserving open grain tactile depth and rich espresso undertones that resist ultraviolet fading.',
    appliedIn: 'Wall fluting, walk-in closet framing, media credenzas',
    gradient: 'from-[#3A2216] via-[#2D1A11] to-[#1E110A]',
    texturePattern: 'wood',
    imageUrl: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'champagne-brass',
    name: 'Brushed Champagne Brass',
    origin: 'Solingen, Germany',
    category: 'Architectural Hardware',
    finish: 'Directional Micro-Satin & PVD Sealed',
    description: 'Subtle, understated warm metallic finish designed to avoid tacky high-gloss yellow brass while elevating tactile touchpoints.',
    appliedIn: 'Cabinet pulls, sofa sub-frames, chandelier canopies',
    gradient: 'from-[#E5C358] via-[#D4AF37] to-[#A38220]',
    texturePattern: 'metal',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'nubuck',
    name: 'Full-Grain Italian Nubuck',
    origin: 'Tuscany, Italy',
    category: 'Upholstery & Lining',
    finish: 'Velvety Buffed Aniline',
    description: 'Supple European bovine hides gently buffed for an incomparably soft hand-feel that patinas gracefully over decades.',
    appliedIn: 'Custom sofas, upholstered headboards, jewelry tray liners',
    gradient: 'from-[#8A7145] via-[#755D34] to-[#5C4726]',
    texturePattern: 'leather',
    imageUrl: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'smoked-glass',
    name: 'Smoked Acoustic Tempered Glass',
    origin: 'Saint-Gobain, Europe',
    category: 'Glazing & Partitions',
    finish: 'Anti-Glare Neutral Grey Tint',
    description: '10mm safety tempered low-iron glass treated with sound-dampening acoustic film and subtle bronze-grey pigmentation.',
    appliedIn: 'Walk-in wardrobe shutters, showcase vitrines',
    gradient: 'from-[#2D2D2D] via-[#202020] to-[#141414]',
    texturePattern: 'glass',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
  },
];

export const MaterialAtelier: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<MaterialSwatch>(swatches[0]);

  return (
    <section id="materials" className="relative w-full bg-[#171717] text-[#FDFDFD] py-24 lg:py-32 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-medium mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" aria-hidden="true" />
            <span>Tactile Materiality & Provenance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#FDFDFD] tracking-[-0.01em] leading-tight">
            The Atelier Swatch Library
          </h2>
          <p className="text-sm sm:text-base text-[#FDFDFD]/70 font-light mt-3 leading-relaxed">
            Every material is ethically sourced from legendary European quarries and alpine mills, verified in person, and finished with zero-VOC biological oils.
          </p>
        </div>

        {/* Swatch Explorer Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Swatch Selector Chips / Cards (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#FDFDFD]/40 font-medium mb-2">
              Select Material to Inspect Texture & Sourcing:
            </p>
            {swatches.map((swatch) => {
              const isSelected = selectedSwatch.id === swatch.id;
              return (
                <div
                  key={swatch.id}
                  onClick={() => setSelectedSwatch(swatch)}
                  className={`p-4 transition-all duration-200 cursor-pointer border flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#222222] border-[#D4AF37] shadow-lg'
                      : 'bg-[#1C1C1C] border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Visual Color Pill */}
                    <div
                      className={`w-10 h-10 shrink-0 border border-white/20 bg-gradient-to-br ${swatch.gradient} shadow-inner`}
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-serif font-medium text-[#FDFDFD]">
                        {swatch.name}
                      </h4>
                      <p className="text-xs text-[#FDFDFD]/50 font-light">
                        {swatch.category} · {swatch.origin}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs uppercase tracking-widest font-mono shrink-0 ${
                      isSelected ? 'text-[#D4AF37]' : 'text-white/30'
                    }`}
                  >
                    {isSelected ? 'Inspecting' : 'Explore'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Large Material Inspector Detail Card (Cols 7-12) */}
          <div className="lg:col-span-6 bg-[#202020] border border-white/[0.1] p-6 sm:p-10 space-y-6 shadow-2xl relative">
            <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

            {/* High-Res Texture Plate */}
            <div className="relative w-full h-48 sm:h-56 bg-[#161616] border border-white/10 overflow-hidden flex items-center justify-center group">
              <ArchitecturalImage
                src={selectedSwatch.imageUrl}
                alt={`${selectedSwatch.name} — ${selectedSwatch.category} texture`}
                fallbackGraphic={
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${selectedSwatch.gradient} opacity-90`}
                  />
                }
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="text-[10px] tracking-[0.25em] uppercase bg-[#1A1A1A]/95 text-[#D4AF37] px-3 py-1.5 border border-white/15 font-mono inline-block shadow-md">
                  Grade: {selectedSwatch.finish}
                </span>
              </div>
            </div>

            {/* Material Metadata */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {selectedSwatch.origin}
                  </span>
                  <h3 className="text-2xl font-serif text-[#FDFDFD] mt-0.5">
                    {selectedSwatch.name}
                  </h3>
                </div>
                <div className="p-2 border border-white/10 bg-[#1A1A1A] text-right">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Finish</p>
                  <p className="text-xs text-[#FDFDFD] font-mono">{selectedSwatch.finish}</p>
                </div>
              </div>

              <p className="text-sm text-[#FDFDFD]/80 font-light leading-relaxed">
                {selectedSwatch.description}
              </p>

              <div className="pt-4 border-t border-white/[0.08] space-y-2">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37]/90 font-medium">
                  Architectural Applications:
                </p>
                <p className="text-xs text-[#FDFDFD]/70 font-light leading-relaxed">
                  {selectedSwatch.appliedIn}
                </p>
              </div>

              <div className="p-3 bg-[#191919] border border-white/[0.06] flex items-center gap-3 text-xs text-[#FDFDFD]/75">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Physical swatch samples available for hands-on inspection at the Jorabat Showroom.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
