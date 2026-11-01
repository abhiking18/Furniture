import React, { useState } from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesTimeline } from './components/ServicesTimeline';
import { LookbookSection } from './components/LookbookSection';
import { MaterialAtelier } from './components/MaterialAtelier';
import { FooterSection } from './components/FooterSection';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInterest, setConsultationInterest] = useState('Bespoke Living Furniture');

  const handleOpenConsultation = (interest?: string) => {
    if (interest) {
      setConsultationInterest(interest);
    }
    setIsConsultationOpen(true);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#FDFDFD] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#FDFDFD]">
      {/* 1. CRITICAL DEMO FLAG REQUIREMENT: Sticky full-width banner at absolute top */}
      <DemoBanner />

      {/* 2. Top Navigation Bar (3-zone contract) */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('Showroom VIP Visit')} />

      {/* Main Presentation Surface */}
      <main className="flex-1">
        {/* Hero Section: Asymmetrical split screen with living room LED visuals */}
        <HeroSection
          onExploreCollection={scrollToServices}
          onOpenConsultation={() => handleOpenConsultation('Full-Scale Architectural Consultation')}
        />

        {/* Detailed Services Index: Staggered irregular vertical timeline with exact photo mappings */}
        <ServicesTimeline
          onSelectService={(service) => handleOpenConsultation(service.title)}
        />

        {/* Alternating Layout Field: Curated Suites Lookbook in Ivory White */}
        <LookbookSection
          onSelectPiece={(piece) => handleOpenConsultation(`${piece.category} Suite: ${piece.name}`)}
        />

        {/* Tactile Material Atelier & Provenance Swatches */}
        <MaterialAtelier />
      </main>

      {/* 3. Hard-Coded Local Contact & Verified Business Footer */}
      <FooterSection
        onOpenConsultation={() => handleOpenConsultation('General Showroom Inquiries')}
      />

      {/* Interactive VIP Consultation / Tour Reservation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialInterest={consultationInterest}
      />
    </div>
  );
}
