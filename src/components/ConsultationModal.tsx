import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, Clock, MapPin } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialInterest = 'Bespoke Living Furniture',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(initialInterest);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-xl bg-[#1D1D1D] border border-white/15 text-[#FDFDFD] p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#FDFDFD]/60 hover:text-[#D4AF37] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="space-y-2 mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
                Private Showroom Reservation
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#FDFDFD]">
                Schedule an Architectural Tour
              </h3>
              <p className="text-xs sm:text-sm text-[#FDFDFD]/70 font-light leading-relaxed">
                Meet with our master furniture artisans and interior architects at our Jorabat showroom on the 2nd Floor of The Arch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-1.5 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singhania"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#FDFDFD] placeholder-[#FDFDFD]/30 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-1.5 font-medium">
                  Contact Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#FDFDFD] placeholder-[#FDFDFD]/30 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-1.5 font-medium">
                  Curation Interest
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#FDFDFD] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Ultra-Luxury Bespoke Home Furniture">Ultra-Luxury Bespoke Home Furniture</option>
                  <option value="Premium Custom Walk-In Wardrobes">Premium Custom Walk-In Wardrobes</option>
                  <option value="Architectural Modular Setups">Architectural Modular Setups</option>
                  <option value="Full-Home Interior Curation & Styling">Full-Home Interior Curation & Styling</option>
                  <option value="Complete Showroom Walkthrough">Complete Showroom Walkthrough</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-1.5 font-medium">
                  Preferred Date & Time Window
                </label>
                <input
                  type="text"
                  placeholder="e.g. This Saturday afternoon, around 3:00 PM"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 px-4 py-3 text-sm text-[#FDFDFD] placeholder-[#FDFDFD]/30 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-1.5 font-medium">
                  Architectural Notes / Space Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your floorplan, ceiling heights, or aesthetic preferences..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 px-4 py-2.5 text-sm text-[#FDFDFD] placeholder-[#FDFDFD]/30 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#E5C358] text-[#1A1A1A] font-semibold text-xs uppercase tracking-[0.18em] transition-colors duration-200"
                >
                  Confirm Private Reservation
                </button>
              </div>

              <div className="pt-3 text-center border-t border-white/10">
                <p className="text-xs text-[#FDFDFD]/60 mb-2">Need immediate assistance or direct coordination?</p>
                <a
                  href="tel:+919181038666"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Direct: +91 91810 38666
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
                Appointment Registered
              </span>
              <h3 className="text-2xl font-serif text-[#FDFDFD]">
                Thank you, {name}
              </h3>
              <p className="text-xs sm:text-sm text-[#FDFDFD]/75 font-light leading-relaxed max-w-md mx-auto">
                Our Senior Design Director has received your request regarding{' '}
                <span className="text-[#D4AF37]">{interest}</span>. We will contact you at{' '}
                <span className="font-mono text-[#FDFDFD]">{phone}</span> to confirm your private concierge access.
              </p>
            </div>

            <div className="p-4 bg-[#141414] border border-white/10 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <MapPin className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider">Showroom Destination</span>
              </div>
              <p className="text-[#FDFDFD]/80">2nd Floor, The Arch, 10th Mile, Mawsmai Village, Jorabat, Meghalaya 793101</p>
              <p className="text-[#FDFDFD]/50 text-[11px] pt-1">Open Daily: 10:00 AM – 8:00 PM</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919181038666"
                className="py-3 px-6 bg-[#D4AF37] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Dial +91 91810 38666
              </a>
              <button
                onClick={handleReset}
                className="py-3 px-6 border border-white/20 text-[#FDFDFD] text-xs uppercase tracking-wider hover:border-[#D4AF37]"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
