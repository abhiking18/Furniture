import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-[37px] z-40 w-full bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/[0.06] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 lg:px-12 py-4">
        {/* Zone 1: Single element Brand Zone */}
        <a
          href="#"
          className="focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
          aria-label="Dream House Luxury Furniture Home"
        >
          <BrandLogo size="md" />
        </a>

        {/* Zone 2: 4–5 concise single-line nav links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-[0.14em] text-[#FDFDFD]/75 uppercase"
        >
          <a
            href="#showroom-hero"
            className="hover:text-[#D4AF37] transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Showroom
          </a>
          <a
            href="#services"
            className="hover:text-[#D4AF37] transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Bespoke Services
          </a>
          <a
            href="#curated-suites"
            className="hover:text-[#D4AF37] transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Curated Suites
          </a>
          <a
            href="#materials"
            className="hover:text-[#D4AF37] transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Atelier Finishes
          </a>
          <a
            href="#contact"
            className="hover:text-[#D4AF37] transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Jorabat Showroom
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="tel:+919181038666"
            className="text-xs font-semibold tracking-wider text-[#FDFDFD]/80 hover:text-[#D4AF37] flex items-center gap-2 transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>+91 91810 38666</span>
          </a>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 text-xs font-medium tracking-[0.12em] uppercase text-[#1A1A1A] bg-[#D4AF37] hover:bg-[#E5C358] transition-all duration-300 rounded-none shadow-sm whitespace-nowrap shrink-0"
          >
            Private Consultation
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenConsultation}
            className="px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-[#1A1A1A] bg-[#D4AF37] rounded-none"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FDFDFD]/80 hover:text-[#D4AF37]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#161616] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium tracking-wider uppercase text-[#FDFDFD]/80">
            <a
              href="#showroom-hero"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-1 border-b border-white/[0.04]"
            >
              Showroom
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-1 border-b border-white/[0.04]"
            >
              Bespoke Services
            </a>
            <a
              href="#curated-suites"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-1 border-b border-white/[0.04]"
            >
              Curated Suites
            </a>
            <a
              href="#materials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-1 border-b border-white/[0.04]"
            >
              Atelier Finishes
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-1"
            >
              Jorabat Showroom
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+919181038666"
              className="w-full py-3 text-center text-xs tracking-widest uppercase border border-white/20 text-[#FDFDFD] flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              Call +91 91810 38666
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-xs tracking-widest uppercase bg-[#D4AF37] text-[#1A1A1A] font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              Schedule Private Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
