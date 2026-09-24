import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, Snowflake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface NavbarProps {
  onRequestService: () => void;
  onOpenEstimate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestService, onOpenEstimate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* 1. TOP UTILITY BAR (Reference hierarchy) */}
      <div className="bg-white border-b border-slate-200 text-xs text-[#11181D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-2">
          
          {/* LEFT: Location Address */}
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <div className="w-5 h-5 rounded-full bg-[#D94B35]/10 text-[#D94B35] flex items-center justify-center shrink-0">
              <MapPin className="w-3 h-3" />
            </div>
            <span className="font-medium text-slate-700 truncate text-[11px] sm:text-xs">
              Uttarasasan, Bhubaneswar
            </span>
          </div>

          {/* CENTER: Phone Number */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <div className="w-5 h-5 rounded-full bg-[#D94B35]/10 text-[#D94B35] flex items-center justify-center shrink-0">
              <Phone className="w-3 h-3" />
            </div>
            <a 
              href={BUSINESS_INFO.phoneTel} 
              className="font-semibold text-[#102C43] hover:text-[#D94B35] transition-colors"
            >
              Phone: {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* RIGHT: Opening Hours & Small CTA */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-600">
              <Clock className="w-3 h-3 text-[#D94B35]" />
              <span className="font-medium">{BUSINESS_INFO.hours}</span>
            </div>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center justify-center px-2.5 sm:px-3 py-1 rounded-md bg-[#D94B35] hover:bg-[#E56A43] text-white text-[11px] font-bold tracking-wider uppercase transition-colors shrink-0"
            >
              CALL NOW
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (Deep Navy #102C43) */}
      <nav className="bg-[#102C43] text-white border-b border-[#071A29]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          
          {/* LEFT: Business Brand Logo / Name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#D94B35] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105 shrink-0">
              <Snowflake className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-white leading-tight">
                JAY MAA LAXMI
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-slate-300">
                REFRIGERATION
              </span>
            </div>
          </a>

          {/* CENTER: Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-slate-200">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-[#D94B35] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollTo('services')} 
              className="hover:text-[#D94B35] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className="hover:text-[#D94B35] transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollTo('reviews')} 
              className="hover:text-[#D94B35] transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollTo('location')} 
              className="hover:text-[#D94B35] transition-colors cursor-pointer"
            >
              Location
            </button>
            <button 
              onClick={() => scrollTo('contact-section')} 
              className="hover:text-[#D94B35] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* RIGHT: Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEstimate}
              className="px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white border border-slate-600 hover:border-white transition-colors cursor-pointer"
            >
              ONLINE ESTIMATE
            </button>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-3.5 sm:px-4 py-2 rounded-lg bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              CALL {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-2.5 py-1.5 rounded-md bg-[#D94B35] text-white text-[11px] font-bold uppercase tracking-wider"
            >
              Call
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-[#071A29] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071A29] border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 text-sm">
            <button
              onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="block w-full text-left py-2 text-slate-200 hover:text-[#D94B35] font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="block w-full text-left py-2 text-slate-200 hover:text-[#D94B35] font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="block w-full text-left py-2 text-slate-200 hover:text-[#D94B35] font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('reviews')}
              className="block w-full text-left py-2 text-slate-200 hover:text-[#D94B35] font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="block w-full text-left py-2 text-slate-200 hover:text-[#D94B35] font-medium"
            >
              Location
            </button>
            <button
              onClick={() => scrollTo('contact-section')}
              className="block w-full text-left py-2 text-slate-200 hover:text-[#D94B35] font-medium"
            >
              Contact
            </button>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenEstimate(); }}
                className="w-full py-2.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider text-slate-200 border border-slate-700"
              >
                Online Estimate
              </button>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full py-2.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider bg-[#D94B35] text-white"
              >
                CALL {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
