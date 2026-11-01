import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, MapPin, Clock, Navigation, Mail, ArrowUpRight } from 'lucide-react';

interface FooterSectionProps {
  onOpenConsultation: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenConsultation }) => {
  return (
    <footer id="contact" className="relative w-full bg-[#111111] text-[#FDFDFD] pt-24 pb-16 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top CTA Banner inside Footer */}
        <div className="p-8 sm:p-12 lg:p-16 bg-[#1A1A1A] border border-white/[0.1] relative overflow-hidden mb-20 shadow-2xl">
          {/* Subtle gold decorative hairline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium block">
                Private Showroom Reservation
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#FDFDFD] leading-snug">
                Experience Handcrafted Luxury Firsthand in Jorabat.
              </h3>
              <p className="text-sm sm:text-base text-[#FDFDFD]/70 font-light max-w-xl">
                Walk through our curated living salons, touch our hand-selected Italian stone slabs, and review tactile wood joinery with our lead architects.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              {/* Large Call-To-Action Dialer Button linked to phone system */}
              <a
                href="tel:+919181038666"
                className="group w-full py-4 px-6 bg-[#D4AF37] hover:bg-[#E5C358] text-[#1A1A1A] font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Showroom: +91 91810 38666</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 px-6 border border-white/25 hover:border-[#D4AF37] text-[#FDFDFD] hover:text-[#D4AF37] text-xs tracking-[0.14em] uppercase transition-colors flex items-center justify-center gap-2"
              >
                <span>Schedule Architectural Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hard-Coded Business Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Brand Identity Column */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" />
            <p className="text-xs text-[#FDFDFD]/60 font-light leading-relaxed pt-2 max-w-sm">
              Makers of bespoke architectural furniture, sensory walk-in wardrobe galleries, and turnkey luxury residential transformations throughout Northeast India.
            </p>
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-medium block">
                Direct Line:
              </span>
              <a
                href="tel:+919181038666"
                className="text-base font-serif text-[#FDFDFD] hover:text-[#D4AF37] transition-colors"
              >
                +91 91810 38666
              </a>
            </div>
          </div>

          {/* Physical Location Box */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Physical Showroom Location</span>
            </div>
            {/* Exact Required String */}
            <address className="not-italic text-sm text-[#FDFDFD]/85 font-light leading-relaxed border-l border-white/10 pl-4 py-1">
              Dream House Luxury Furniture,<br />
              2nd Floor, The Arch, 10th Mile,<br />
              Mawsmai Village, Jorabat,<br />
              Baridua 10th Mile, Meghalaya 793101
            </address>
            <a
              href="https://maps.google.com/?q=The+Arch+Jorabat+Meghalaya+793101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF37] hover:underline pt-1"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps Navigation</span>
            </a>
          </div>

          {/* Operational Hours Display */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Operational Hours</span>
            </div>
            {/* Exact Required String */}
            <div className="border-l border-white/10 pl-4 py-1 space-y-1">
              <p className="text-base font-serif text-[#FDFDFD]">
                Open Daily • 10:00 AM to 8:00 PM
              </p>
              <p className="text-xs text-[#FDFDFD]/60 font-light">
                Private evening VIP curation tours available by prior appointment.
              </p>
              <div className="pt-2 text-[11px] text-[#D4AF37]/90 uppercase tracking-widest">
                Valet Parking & Elevator Access Available
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FDFDFD]/50 font-light">
          <p>© {new Date().getFullYear()} Dream House Luxury Furniture. All architectural designs and trademarks reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#FDFDFD] transition-colors cursor-pointer">Material Atelier Standards</span>
            <span className="hover:text-[#FDFDFD] transition-colors cursor-pointer">Architectural Inquiries</span>
            <span className="text-[#D4AF37]">Jorabat · Meghalaya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
