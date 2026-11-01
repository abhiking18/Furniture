import React, { useState } from 'react';
import { Sparkles, Check, ChevronRight, Eye, Layers, Sliders, Shield } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  photoDescription: string;
  category: string;
  leadTime: string;
  summary: string;
  details: string[];
  materials: string[];
  curationHighlights: { label: string; value: string }[];
  visualType: 'furniture' | 'wardrobe' | 'modular' | 'styling';
  imageUrl: string;
}

const services: ServiceItem[] = [
  {
    id: 'bespoke-furniture',
    number: '01',
    title: 'Ultra-Luxury Bespoke Home Furniture',
    photoDescription: 'An expensive modern velvet sofa arrangement with custom marble-top coffee tables inside a high-ceiling residential lounge',
    category: 'Salons & Formal Living',
    leadTime: '4–6 Weeks Handcrafting',
    summary: 'Precision-tailored seating arrangements and monolithic stone tables crafted to architectural dimensions, eliminating spatial compromises in luxury living environments.',
    details: [
      'Individually balanced multi-density foam cores wrapped in down-feather envelopes',
      'Solid quarter-sawn hardwood internal frames with lifetime structural integrity',
      'Book-matched Italian Carrara and Nero Marquina marble with micro-beveled profiling',
      'Bespoke champagne brushed brass sub-bases and silent leveling glides'
    ],
    materials: ['Italian Nubuck', 'Mohair Velvet', 'Calacatta Marble', 'Champagne Brass'],
    curationHighlights: [
      { label: 'Craft Technique', value: 'Double-needle French seams' },
      { label: 'Load Rating', value: 'Engineered commercial-grade frame' },
      { label: 'Customization', value: 'Infinite dimension & fabric choice' },
    ],
    visualType: 'furniture',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'walkin-wardrobes',
    number: '02',
    title: 'Premium Custom Walk-In Wardrobes',
    photoDescription: 'A modern floor-to-ceiling walk-in closet system featuring tinted glass shutters, custom leatherette drawer units, and integrated sensory LED strip lighting',
    category: 'Private Dressing & Vault Suites',
    leadTime: '5–7 Weeks Millwork',
    summary: 'Architecturally integrated dressing galleries with acoustic soft-closing mechanics, sensory motion illumination, and dedicated compartments for couture, horology, and precious accessories.',
    details: [
      'Floor-to-ceiling smoked grey tempered glass shutters with matte anodized champagne frames',
      'Custom saddle-stitched leatherette lining in watch winders and jewelry trays',
      'Hidden 2700K warm LED channels with proximity detection that illuminate upon entry',
      'Acoustic felt back panels that dampen ambient noise for a serene boutique ambiance'
    ],
    materials: ['Smoked Glass', 'Saddle Leatherette', 'Sensory 2700K LEDs', 'Fluted Oak'],
    curationHighlights: [
      { label: 'Lighting System', value: 'Sensory micro-proximity 2700K' },
      { label: 'Drawer Organizers', value: 'Bespoke velvet & leather inserts' },
      { label: 'Hardware', value: 'Blum concealed motion runners' },
    ],
    visualType: 'wardrobe',
    imageUrl: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'modular-setups',
    number: '03',
    title: 'Architectural Modular Setups',
    photoDescription: 'A sleek, handle-less luxury kitchen layout with modern built-in premium appliances and quartz waterfall island profiling',
    category: 'Culinary & Architectural Millwork',
    leadTime: '6–8 Weeks Precision Install',
    summary: 'Handle-less architectural kitchen systems and wall units engineered with millimeter tolerances, continuous seamless veining, and integrated premium European appliances.',
    details: [
      'Mitered 45-degree quartz waterfall island with unbroken natural veining flow',
      'Touch-to-open electric servo drive cabinet shutters with finger-pull J-groove profiles',
      'Flush-mounted induction and hidden extraction channels for pure spatial minimalism',
      'Anti-fingerprint thermal laminate coatings with self-healing micro-surfacing'
    ],
    materials: ['Seamless Quartz', 'Anti-Fingerprint Acrylic', 'Smoked Walnut', 'Integrated Steel'],
    curationHighlights: [
      { label: 'Island Profile', value: 'Mitered 45° Waterfall Quartz' },
      { label: 'Drive Mechanism', value: 'Blum Servo-Drive electric touch' },
      { label: 'Appliance Fitting', value: 'Zero-clearance architectural flush' },
    ],
    visualType: 'modular',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'interior-curation',
    number: '04',
    title: 'Full-Home Interior Curation & Styling',
    photoDescription: 'A fully styled luxury master bedroom suite showing custom bed paneling, ambient luxury accent lighting, and premium home upholstery textiles',
    category: 'Turnkey Residential Transformations',
    leadTime: 'Full-Project Architectural Oversight',
    summary: 'A unified turnkey transformation that balances architectural millwork, bespoke textiles, acoustic paneling, and curated art accents to deliver five-star residential sanctuaries.',
    details: [
      'Custom upholstered floating headboard wall with fluted acoustic paneling',
      'Layered mood lighting schemes with recessed floor washers and floating perimeter coves',
      'Curated Belgian linen drapery with silent motorized dual-track ceiling pockets',
      'Complete furniture coordination ensuring harmonious material continuity throughout the estate'
    ],
    materials: ['Fluted Acoustic Paneling', 'Belgian Sheers', 'Cashmere Wool', 'Brushed Bronze'],
    curationHighlights: [
      { label: 'Acoustic Rating', value: 'Class A sound absorption panels' },
      { label: 'Lighting Zones', value: 'Dimmable 4-scene architectural preset' },
      { label: 'Styling Scope', value: 'Turnkey furniture, rugs, & drapery' },
    ],
    visualType: 'styling',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
  },
];

interface ServicesTimelineProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesTimeline: React.FC<ServicesTimelineProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('bespoke-furniture');

  return (
    <section id="services" className="relative w-full bg-[#1A1A1A] text-[#FDFDFD] py-24 lg:py-32 border-b border-white/[0.08]">
      {/* Background Section Ambient Field */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 lg:mb-28">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-medium mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" aria-hidden="true" />
            <span>Core Capabilities & Atelier Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#FDFDFD] tracking-[-0.01em] leading-tight [text-wrap:balance]">
            Staggered Architecture of{' '}
            <span className="italic font-normal text-[#D4AF37]">Bespoke Craft</span>.
          </h2>
          <p className="text-base text-[#FDFDFD]/70 font-light mt-4 leading-relaxed font-sans max-w-2xl">
            Each commission is engineered from raw architectural drafts through custom fabrication to turnkey placement in Jorabat and premier estates across the region.
          </p>
        </div>

        {/* Staggered Irregular Vertical Timeline */}
        <div className="relative">
          {/* Vertical Hairline Timeline Spine */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-12 w-[1px] bg-white/[0.12] -translate-x-1/2" />

          <div className="space-y-24 lg:space-y-36">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Central Marker Node (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#D4AF37] items-center justify-center shadow-lg">
                    <span className="text-[10px] font-mono text-[#D4AF37] font-bold">
                      {service.number}
                    </span>
                  </div>

                  {/* Left Column (or Right on alternating items) */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:pr-8' : 'lg:order-2 lg:pl-8'
                    }`}
                  >
                    {/* Editorial Index & Category */}
                    <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                      <span className="lg:hidden font-mono font-bold">{service.number} ·</span>
                      <span>{service.category}</span>
                      <span className="text-white/30">/</span>
                      <span className="text-[#FDFDFD]/60">{service.leadTime}</span>
                    </div>

                    {/* Exact Service Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#FDFDFD] leading-tight">
                      {service.title}
                    </h3>

                    {/* Verified Photo Mapping Callout Box (as requested) */}
                    <div className="p-4 bg-[#222222] border border-white/[0.08] relative group">
                      <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold mb-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Curated Photo Composition</span>
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#FDFDFD]/85 italic font-serif leading-relaxed">
                        &ldquo;{service.photoDescription}&rdquo;
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-[#FDFDFD]/75 font-light leading-relaxed">
                      {service.summary}
                    </p>

                    {/* Curation Highlights */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      {service.curationHighlights.map((highlight, idx) => (
                        <div key={idx} className="p-3 bg-[#1F1F1F] border border-white/[0.05]">
                          <p className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-medium">{highlight.label}</p>
                          <p className="text-xs text-[#FDFDFD] mt-0.5 font-medium">{highlight.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Material Swatches Inline */}
                    <div className="pt-2">
                      <p className="text-[11px] uppercase tracking-widest text-[#FDFDFD]/50 mb-2">Master Finishes:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.materials.map((mat, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-white/[0.04] border border-white/[0.08] text-[#FDFDFD]/90 font-light"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3">
                      <button
                        onClick={() => onSelectService(service)}
                        className="group inline-flex items-center gap-3 text-xs tracking-[0.16em] uppercase text-[#D4AF37] hover:text-[#E5C358] transition-colors py-2"
                      >
                        <span className="border-b border-[#D4AF37] group-hover:border-[#E5C358] pb-0.5">
                          Request Consultation for {service.title.split(' ')[0]}
                        </span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column Visual (or Left on alternating items) */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:pl-8' : 'lg:order-1 lg:pr-8'
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] bg-[#141414] overflow-hidden group border border-white/[0.1] shadow-2xl">
                      {/* High-Resolution Architectural Photograph with Fallback */}
                      <ArchitecturalImage
                        src={service.imageUrl}
                        alt={`${service.title} — ${service.photoDescription}`}
                        fallbackGraphic={renderServiceArtwork(service.visualType)}
                      />

                      {/* Photo Badge Ribbon */}
                      <div className="absolute top-4 left-4 z-20 bg-[#1A1A1A]/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[10px] tracking-widest text-[#D4AF37] uppercase">
                        Exhibit {service.number}
                      </div>

                      {/* Bottom Caption Pill-less */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#141414]/90 backdrop-blur-md p-3 border border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-serif text-[#FDFDFD]">{service.title}</p>
                          <p className="text-[10px] text-[#FDFDFD]/60 tracking-wider uppercase">Jorabat Showroom Installation</p>
                        </div>
                        <span className="text-[11px] text-[#D4AF37] font-mono">{service.leadTime.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper to render high-fidelity custom architectural illustration matching each exact photo description
function renderServiceArtwork(type: 'furniture' | 'wardrobe' | 'modular' | 'styling') {
  if (type === 'furniture') {
    // "An expensive modern velvet sofa arrangement with custom marble-top coffee tables inside a high-ceiling residential lounge"
    return (
      <svg className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" viewBox="0 0 500 375" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="loungeCeiling" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#252525" />
            <stop offset="100%" stopColor="#171717" />
          </linearGradient>
          <linearGradient id="champagneVelvet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B39343" />
            <stop offset="50%" stopColor="#CBB163" />
            <stop offset="100%" stopColor="#9E7E32" />
          </linearGradient>
          <linearGradient id="marbleTop" x1="0" y1="0" x2="1" y2="0.5">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#F1EFEA" />
            <stop offset="70%" stopColor="#E5E2DA" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        {/* High ceiling architectural lounge */}
        <rect width="500" height="375" fill="url(#loungeCeiling)" />
        {/* Double-height architectural window panels with ambient warm diffused light */}
        <rect x="30" y="20" width="130" height="240" fill="#202020" stroke="#333" strokeWidth="1" />
        <rect x="180" y="20" width="130" height="240" fill="#202020" stroke="#333" strokeWidth="1" />
        <rect x="330" y="20" width="140" height="240" fill="#202020" stroke="#333" strokeWidth="1" />

        {/* Polished stone floor with reflections */}
        <rect y="260" width="500" height="115" fill="#121212" />
        <line x1="0" y1="260" x2="500" y2="260" stroke="#333" strokeWidth="1" />

        {/* Expensive Modern Velvet Sofa Arrangement */}
        <path d="M 60 215 C 60 200 80 195 120 195 L 430 195 C 455 195 465 205 465 225 L 465 310 C 465 320 455 325 430 325 L 80 325 C 65 325 60 315 60 295 Z" fill="#242220" />
        {/* Velvet Cushions */}
        <rect x="75" y="210" width="115" height="75" rx="6" fill="url(#champagneVelvet)" />
        <rect x="195" y="210" width="115" height="75" rx="6" fill="#A88B38" />
        <rect x="315" y="210" width="135" height="75" rx="6" fill="url(#champagneVelvet)" />

        {/* Custom Marble-Top Coffee Tables */}
        {/* Large round marble table */}
        <ellipse cx="230" cy="305" rx="80" ry="26" fill="#0A0A0A" />
        <ellipse cx="230" cy="295" rx="78" ry="24" fill="#A88A30" />
        <ellipse cx="230" cy="288" rx="80" ry="24" fill="url(#marbleTop)" stroke="#D4AF37" strokeWidth="1" />
        {/* Veins */}
        <path d="M 180 286 Q 215 292 250 284 Q 280 279 295 290" stroke="#A39B8F" strokeWidth="1.2" fill="none" opacity="0.6" />

        {/* Secondary nested black marble table */}
        <ellipse cx="320" cy="315" rx="50" ry="18" fill="#1C1C1C" stroke="#D4AF37" strokeWidth="1" />
        <ellipse cx="320" cy="310" rx="48" ry="16" fill="#151515" />
      </svg>
    );
  }

  if (type === 'wardrobe') {
    // "A modern floor-to-ceiling walk-in closet system featuring tinted glass shutters, custom leatherette drawer units, and integrated sensory LED strip lighting"
    return (
      <svg className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" viewBox="0 0 500 375" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="smokedGlass" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E1E1E" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#2D2D2D" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#1A1A1A" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#2B2B2B" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="closetLed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF2D1" />
            <stop offset="50%" stopColor="#FFAE42" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        <rect width="500" height="375" fill="#141414" />

        {/* Floor-to-ceiling walk-in closet bays */}
        <rect x="25" y="15" width="140" height="345" fill="#1D1815" stroke="#3D3028" strokeWidth="2" />
        <rect x="180" y="15" width="140" height="345" fill="#1D1815" stroke="#3D3028" strokeWidth="2" />
        <rect x="335" y="15" width="140" height="345" fill="#1D1815" stroke="#3D3028" strokeWidth="2" />

        {/* Integrated Sensory LED Strip Lighting along vertical verticals */}
        <rect x="27" y="18" width="3" height="340" fill="url(#closetLed)" />
        <rect x="162" y="18" width="3" height="340" fill="url(#closetLed)" />
        <rect x="182" y="18" width="3" height="340" fill="url(#closetLed)" />
        <rect x="317" y="18" width="3" height="340" fill="url(#closetLed)" />
        <rect x="337" y="18" width="3" height="340" fill="url(#closetLed)" />
        <rect x="472" y="18" width="3" height="340" fill="url(#closetLed)" />

        {/* Wardrobe Shelving and Hanging garments */}
        <line x1="30" y1="80" x2="160" y2="80" stroke="#D4AF37" strokeWidth="1" />
        <line x1="30" y1="160" x2="160" y2="160" stroke="#333" strokeWidth="1" />
        <line x1="185" y1="90" x2="315" y2="90" stroke="#D4AF37" strokeWidth="1" />

        {/* Custom Leatherette Drawer Units in Lower Half */}
        <rect x="32" y="240" width="128" height="32" fill="#3D291D" rx="1" />
        <rect x="32" y="276" width="128" height="32" fill="#362419" rx="1" />
        <rect x="32" y="312" width="128" height="32" fill="#2E1E14" rx="1" />
        {/* Leather pull tabs */}
        <rect x="90" y="254" width="12" height="4" fill="#D4AF37" rx="1" />
        <rect x="90" y="290" width="12" height="4" fill="#D4AF37" rx="1" />
        <rect x="90" y="326" width="12" height="4" fill="#D4AF37" rx="1" />

        {/* Central Display Jewelry & Watch Island Trays */}
        <rect x="186" y="220" width="128" height="124" fill="#2B1D15" />
        <line x1="186" y1="260" x2="314" y2="260" stroke="#443" strokeWidth="1" />
        <line x1="186" y1="300" x2="314" y2="300" stroke="#443" strokeWidth="1" />

        {/* Tinted Smoked Glass Shutters Overlay with Reflections */}
        <rect x="25" y="15" width="140" height="345" fill="url(#smokedGlass)" />
        <rect x="335" y="15" width="140" height="345" fill="url(#smokedGlass)" />
        {/* Glass reflection streaks */}
        <line x1="45" y1="20" x2="140" y2="350" stroke="#FFF" strokeWidth="0.8" opacity="0.15" />
        <line x1="355" y1="20" x2="450" y2="350" stroke="#FFF" strokeWidth="0.8" opacity="0.15" />
      </svg>
    );
  }

  if (type === 'modular') {
    // "A sleek, handle-less luxury kitchen layout with modern built-in premium appliances and quartz waterfall island profiling"
    return (
      <svg className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" viewBox="0 0 500 375" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="quartzIsland" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EDEDED" />
            <stop offset="45%" stopColor="#FAFAFA" />
            <stop offset="80%" stopColor="#DFDFDF" />
            <stop offset="100%" stopColor="#EFEFEF" />
          </linearGradient>
          <linearGradient id="kitchenCove" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFE194" />
            <stop offset="100%" stopColor="#FFA734" />
          </linearGradient>
        </defs>
        <rect width="500" height="375" fill="#161616" />

        {/* Back wall of handle-less tall cabinets */}
        <rect x="30" y="20" width="440" height="180" fill="#1E1E1E" />
        <line x1="140" y1="20" x2="140" y2="200" stroke="#2B2B2B" strokeWidth="1.5" />
        <line x1="250" y1="20" x2="250" y2="200" stroke="#2B2B2B" strokeWidth="1.5" />
        <line x1="360" y1="20" x2="360" y2="200" stroke="#2B2B2B" strokeWidth="1.5" />

        {/* Built-in Premium Appliances (Matte Black & Smoked Glass Ovens) */}
        <rect x="260" y="60" width="90" height="60" fill="#0D0D0D" stroke="#D4AF37" strokeWidth="0.8" />
        <rect x="260" y="130" width="90" height="60" fill="#0D0D0D" stroke="#333" strokeWidth="0.8" />
        <circle cx="305" cy="90" r="14" fill="#181818" stroke="#D4AF37" strokeWidth="1" />
        <text x="305" y="93" fill="#D4AF37" fontSize="7" textAnchor="middle" fontFamily="sans-serif">200°C</text>

        {/* Counter niche with warm under-cabinet LED bar */}
        <rect x="30" y="150" width="220" height="50" fill="#121212" />
        <line x1="30" y1="150" x2="250" y2="150" stroke="url(#kitchenCove)" strokeWidth="3" />

        {/* Sleek Quartz Waterfall Island Profiling */}
        {/* Waterfall Left Edge */}
        <polygon points="90,270 120,240 120,355 90,365" fill="#D6D6D6" />
        {/* Waterfall Top Slab */}
        <polygon points="120,240 430,240 400,270 90,270" fill="url(#quartzIsland)" stroke="#D4AF37" strokeWidth="0.6" />
        {/* Quartz Natural Veining on Island */}
        <path d="M 140 252 Q 220 248 290 256 Q 340 250 380 258" stroke="#9E988D" strokeWidth="1.5" fill="none" opacity="0.6" />
        {/* Waterfall Right Edge */}
        <polygon points="400,270 430,240 430,355 400,365" fill="#CCCCCC" />
        {/* Island Front Face (Dark Matte Handle-less) */}
        <polygon points="90,270 400,270 400,365 90,365" fill="#202020" />
        {/* J-Pull recessed channel accent */}
        <line x1="95" y1="285" x2="395" y2="285" stroke="#111" strokeWidth="3" />
        <line x1="95" y1="286" x2="395" y2="286" stroke="#D4AF37" strokeWidth="0.8" />
      </svg>
    );
  }

  // "styling"
  // "A fully styled luxury master bedroom suite showing custom bed paneling, ambient luxury accent lighting, and premium home upholstery textiles"
  return (
    <svg className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" viewBox="0 0 500 375" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="headboardWood" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2A1A12" />
          <stop offset="20%" stopColor="#3A2419" />
          <stop offset="40%" stopColor="#2A1A12" />
          <stop offset="60%" stopColor="#3A2419" />
          <stop offset="80%" stopColor="#2A1A12" />
          <stop offset="100%" stopColor="#3A2419" />
        </linearGradient>
        <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE082" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="500" height="375" fill="#181818" />

      {/* Bespoke fluted wood wall paneling behind bed */}
      <rect x="40" y="25" width="420" height="230" fill="url(#headboardWood)" stroke="#22150E" strokeWidth="2" />
      {/* Fluting vertical lines */}
      {[...Array(20)].map((_, i) => (
        <line key={i} x1={55 + i * 20} y1="25" x2={55 + i * 20} y2="255" stroke="#160C07" strokeWidth="1.5" />
      ))}

      {/* Ambient Luxury Accent Lighting (Hidden perimeter cove) */}
      <rect x="40" y="25" width="420" height="4" fill="#FFA534" filter="blur(2px)" />
      <line x1="40" y1="25" x2="460" y2="25" stroke="#FFE9A6" strokeWidth="2" />

      {/* Hanging modern pendant lights with warm ambient glow */}
      <line x1="90" y1="25" x2="90" y2="130" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="90" cy="140" r="28" fill="url(#lampGlow)" />
      <ellipse cx="90" cy="138" rx="7" ry="12" fill="#D4AF37" />

      <line x1="410" y1="25" x2="410" y2="130" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="410" cy="140" r="28" fill="url(#lampGlow)" />
      <ellipse cx="410" cy="138" rx="7" ry="12" fill="#D4AF37" />

      {/* King-size Upholstered Bed with Custom Bed Paneling */}
      {/* Cushioned Headboard */}
      <rect x="110" y="130" width="280" height="110" rx="4" fill="#38332E" stroke="#52483E" strokeWidth="2" />
      <line x1="250" y1="130" x2="250" y2="240" stroke="#25221F" strokeWidth="2" />

      {/* Luxury Bed Base & Mattress */}
      <rect x="90" y="230" width="320" height="120" rx="6" fill="#24211D" />

      {/* Premium Home Upholstery Textiles, Pillows & Throws */}
      {/* Fluffy Euro Pillows */}
      <rect x="130" y="175" width="55" height="40" rx="3" fill="#E8E4DA" transform="rotate(-4 130 175)" />
      <rect x="180" y="178" width="55" height="38" rx="3" fill="#D4AF37" opacity="0.8" />
      <rect x="265" y="178" width="55" height="38" rx="3" fill="#D4AF37" opacity="0.8" />
      <rect x="315" y="175" width="55" height="40" rx="3" fill="#E8E4DA" transform="rotate(4 315 175)" />

      {/* Layered Cashmere & Velvet Duvet */}
      <path d="M 100 240 L 400 240 L 415 345 L 85 345 Z" fill="#EBE7DE" />
      {/* Charcoal Velvet Bed Runner */}
      <path d="M 85 305 L 415 305 L 415 345 L 85 345 Z" fill="#2D2A26" />
    </svg>
  );
}
