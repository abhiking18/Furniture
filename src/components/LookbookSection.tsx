import React, { useState } from 'react';
import { ArrowUpRight, Check, SlidersHorizontal, Maximize2 } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface LookbookItem {
  id: string;
  category: 'Living' | 'Wardrobes' | 'Culinary' | 'Bedroom';
  name: string;
  subtitle: string;
  materials: string;
  specs: string;
  dimensions: string;
  palette: string[];
  visualId: 'salon' | 'dressing' | 'culinary' | 'suite';
  imageUrl: string;
}

const lookbookItems: LookbookItem[] = [
  {
    id: 'l1',
    category: 'Living',
    name: 'The Aurelius Sectional & Monolith Stone',
    subtitle: 'Low-profile seating envelope with integrated travertine end-ledges',
    materials: 'Brushed Mohair Velvet, Honed Roman Travertine, Smoked Ash Base',
    specs: 'Dual-density natural latex core, French top-stitching, recessed brass glides',
    dimensions: '3800mm W × 2200mm D × 740mm H',
    palette: ['#C5A869', '#EAE6DF', '#23201D'],
    visualId: 'salon',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'l2',
    category: 'Wardrobes',
    name: 'The Celestia Glass Dressing Pavilion',
    subtitle: 'Floor-to-ceiling smoked acoustic glass wardrobe with proximity luminescence',
    materials: 'Smoked Fluted Glass, Italian Saddle Leather, Champagne Anodized Aluminum',
    specs: 'Micro-switch 2700K concealed warm LED strips, anti-dust magnetic seal',
    dimensions: 'Custom architectural elevations up to 3400mm H',
    palette: ['#2A2622', '#D4AF37', '#8E7348'],
    visualId: 'dressing',
    imageUrl: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'l3',
    category: 'Culinary',
    name: 'The Monolith Quartz Waterfall Island',
    subtitle: 'Zero-hardware architectural kitchen center with bookmatched quartz continuous grain',
    materials: 'Calacatta Michelangelo Quartz, Smoked French Oak, Matte Steel',
    specs: 'Servo-drive touch opening, flush induction cook zone, concealed extraction',
    dimensions: '3600mm L × 1200mm W × 910mm H',
    palette: ['#FAFAFA', '#1E1E1E', '#A39264'],
    visualId: 'culinary',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'l4',
    category: 'Bedroom',
    name: 'The Palazzo Master Paneling Suite',
    subtitle: 'Integrated acoustic headboard wall with cantilevered walnut nightstands',
    materials: 'Quarter-Sawn American Walnut, Belgian Raw Linen, Brushed Champagne Brass',
    specs: 'Acoustic baffle foam core, dimmable reading fixtures, hidden cable management',
    dimensions: 'Bespoke wall-to-wall architectural fabrication',
    palette: ['#3A2419', '#E2DDD3', '#D4AF37'],
    visualId: 'suite',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
  },
];

interface LookbookSectionProps {
  onSelectPiece: (piece: LookbookItem) => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onSelectPiece }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPiece, setSelectedPiece] = useState<LookbookItem>(lookbookItems[0]);

  const categories = ['All', 'Living', 'Wardrobes', 'Culinary', 'Bedroom'];

  const filteredItems =
    activeCategory === 'All'
      ? lookbookItems
      : lookbookItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="curated-suites"
      className="relative w-full bg-[#FDFDFD] text-[#1A1A1A] py-24 lg:py-32 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#B89327] font-semibold mb-3">
              <span className="w-8 h-[1px] bg-[#B89327]" aria-hidden="true" />
              <span>Alternating Editorial Field · Curated Suites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A] tracking-[-0.01em] leading-tight">
              The Showroom Lookbook
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A]/70 font-light mt-3 leading-relaxed font-sans">
              Hand-built centerpieces and architectural suites crafted for discerning residences, luxury penthouses, and private estates.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (anti-slop clean segmented button controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EFEFEF] border border-black/[0.05]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#1A1A1A] text-[#FDFDFD] shadow-sm'
                    : 'text-[#1A1A1A]/65 hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Showcase Layout: Asymmetrical Feature + Secondary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Selected Architectural Feature Spotlight (Cols 1-7) */}
          <div className="lg:col-span-7 bg-[#F4F4F4] border border-black/[0.06] p-6 sm:p-8 space-y-6">
            <div className="relative aspect-[16/10] bg-[#1B1B1B] overflow-hidden border border-black/10 group">
              <ArchitecturalImage
                src={selectedPiece.imageUrl}
                alt={`${selectedPiece.name} — ${selectedPiece.subtitle}`}
                fallbackGraphic={renderLookbookArtwork(selectedPiece.visualId)}
              />
              <div className="absolute top-4 left-4 z-20 bg-[#1A1A1A] text-[#FDFDFD] px-3 py-1.5 text-[10px] tracking-widest uppercase">
                {selectedPiece.category} Suite
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">
                    {selectedPiece.name}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 font-light mt-1">
                    {selectedPiece.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => onSelectPiece(selectedPiece)}
                  className="px-5 py-2.5 bg-[#1A1A1A] text-[#FDFDFD] hover:bg-[#D4AF37] hover:text-[#1A1A1A] text-xs uppercase tracking-wider transition-colors duration-300 shrink-0 flex items-center gap-2"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/[0.08]">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B89327] font-semibold block">
                    Finishes & Sourcing
                  </span>
                  <p className="text-xs text-[#1A1A1A]/80 font-medium mt-1">
                    {selectedPiece.materials}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B89327] font-semibold block">
                    Dimensions
                  </span>
                  <p className="text-xs text-[#1A1A1A]/80 font-medium mt-1">
                    {selectedPiece.dimensions}
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-white border border-black/[0.06] flex items-center justify-between text-xs">
                <span className="text-[#1A1A1A]/60">Custom tailoring for residential blueprints:</span>
                <span className="font-semibold text-[#1A1A1A]">Available at Jorabat Showroom</span>
              </div>
            </div>
          </div>

          {/* Secondary Collection List (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/50 font-semibold mb-2">
              Select Suite to Inspect:
            </p>

            <div className="space-y-3">
              {filteredItems.map((item) => {
                const isSelected = selectedPiece.id === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPiece(item)}
                    className={`p-5 transition-all duration-200 cursor-pointer border text-left ${
                      isSelected
                        ? 'bg-[#1A1A1A] text-[#FDFDFD] border-[#1A1A1A] shadow-md'
                        : 'bg-white text-[#1A1A1A] border-black/[0.08] hover:border-black/20'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] tracking-widest uppercase mb-1">
                      <span className={isSelected ? 'text-[#D4AF37]' : 'text-[#B89327]'}>
                        {item.category}
                      </span>
                      <span className={isSelected ? 'text-white/40' : 'text-black/40'}>
                        Bespoke
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-serif font-medium leading-snug">
                      {item.name}
                    </h4>

                    <p
                      className={`text-xs mt-1.5 font-light line-clamp-1 ${
                        isSelected ? 'text-[#FDFDFD]/70' : 'text-[#1A1A1A]/65'
                      }`}
                    >
                      {item.subtitle}
                    </p>

                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-current/10 text-[11px]">
                      <span className="font-light">{item.dimensions.split('×')[0]}</span>
                      <span className={isSelected ? 'text-[#D4AF37]' : 'text-[#B89327]'}>
                        {isSelected ? 'Currently Viewing →' : 'View Spec →'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function renderLookbookArtwork(visualId: 'salon' | 'dressing' | 'culinary' | 'suite') {
  if (visualId === 'salon') {
    return (
      <svg className="w-full h-full object-cover" viewBox="0 0 600 375" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="375" fill="#1C1B19" />
        {/* Soft diffused daylight through large floor-to-ceiling glass */}
        <rect x="0" y="0" width="600" height="180" fill="#262421" />
        <line x1="200" y1="0" x2="200" y2="180" stroke="#333" strokeWidth="1" />
        <line x1="400" y1="0" x2="400" y2="180" stroke="#333" strokeWidth="1" />
        <rect y="180" width="600" height="195" fill="#141312" />

        {/* Aurelius Sectional Sofa in Mohair Velvet */}
        <path d="M 60 160 C 60 140 80 135 120 135 L 480 135 C 510 135 520 145 520 165 L 520 280 C 520 300 500 305 470 305 L 100 305 C 75 305 60 295 60 270 Z" fill="#2E2820" />
        <rect x="80" y="150" width="130" height="100" rx="4" fill="#C5A869" />
        <rect x="220" y="150" width="130" height="100" rx="4" fill="#B39556" />
        <rect x="360" y="150" width="140" height="100" rx="4" fill="#C5A869" />

        {/* Monolith Travertine Stone Low Table */}
        <rect x="180" y="270" width="240" height="50" rx="2" fill="#EAE6DF" stroke="#D4AF37" strokeWidth="1" />
        <path d="M 200 285 Q 260 295 340 280 Q 380 290 400 282" stroke="#B8B0A2" strokeWidth="1.5" fill="none" opacity="0.7" />
        <rect x="195" y="318" width="210" height="8" fill="#A88B38" />
      </svg>
    );
  }

  if (visualId === 'dressing') {
    return (
      <svg className="w-full h-full object-cover" viewBox="0 0 600 375" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="375" fill="#151413" />
        <rect x="50" y="20" width="500" height="335" fill="#241E1A" stroke="#3D3028" strokeWidth="2" />
        {/* Sensory 2700K Warm LED channels */}
        <rect x="55" y="25" width="4" height="325" fill="#FFA534" />
        <rect x="215" y="25" width="4" height="325" fill="#FFA534" />
        <rect x="375" y="25" width="4" height="325" fill="#FFA534" />
        <rect x="540" y="25" width="4" height="325" fill="#FFA534" />

        {/* Glass reflection and leatherette drawers */}
        <rect x="65" y="220" width="140" height="120" fill="#3D291D" />
        <rect x="225" y="220" width="140" height="120" fill="#362419" />
        <rect x="385" y="220" width="140" height="120" fill="#3D291D" />
        <line x1="65" y1="260" x2="205" y2="260" stroke="#D4AF37" strokeWidth="1" />
        <line x1="225" y1="260" x2="365" y2="260" stroke="#D4AF37" strokeWidth="1" />
        <line x1="385" y1="260" x2="525" y2="260" stroke="#D4AF37" strokeWidth="1" />
      </svg>
    );
  }

  if (visualId === 'culinary') {
    return (
      <svg className="w-full h-full object-cover" viewBox="0 0 600 375" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="375" fill="#181818" />
        <rect x="40" y="30" width="520" height="180" fill="#222" />
        {/* Waterfall Quartz Island */}
        <polygon points="100,240 140,200 480,200 440,240" fill="#FAFAFA" stroke="#D4AF37" strokeWidth="0.8" />
        <polygon points="100,240 140,200 140,340 100,350" fill="#EAEAEA" />
        <polygon points="440,240 480,200 480,340 440,350" fill="#DEDEDE" />
        <polygon points="100,240 440,240 440,350 100,350" fill="#1C1C1C" />
        <line x1="120" y1="220" x2="420" y2="218" stroke="#999" strokeWidth="1.2" opacity="0.6" />
      </svg>
    );
  }

  // suite
  return (
    <svg className="w-full h-full object-cover" viewBox="0 0 600 375" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="375" fill="#171614" />
      <rect x="50" y="30" width="500" height="230" fill="#2E1C12" />
      {/* Fluted walnut panels */}
      {[...Array(24)].map((_, i) => (
        <line key={i} x1={65 + i * 20} y1="30" x2={65 + i * 20} y2="260" stroke="#1D110B" strokeWidth="2" />
      ))}
      {/* Hidden warm LED line */}
      <line x1="50" y1="30" x2="550" y2="30" stroke="#FFAE42" strokeWidth="3" />
      {/* Upholstered Bed & Floating Nightstands */}
      <rect x="130" y="150" width="340" height="170" rx="4" fill="#3D3730" />
      <rect x="150" y="180" width="300" height="150" rx="4" fill="#E8E4DA" />
      <rect x="50" y="200" width="70" height="40" fill="#24160E" stroke="#D4AF37" strokeWidth="1" />
      <rect x="480" y="200" width="70" height="40" fill="#24160E" stroke="#D4AF37" strokeWidth="1" />
    </svg>
  );
}
