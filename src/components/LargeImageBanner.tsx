import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface LargeImageBannerProps {
  onRequestService: () => void;
}

export const LargeImageBanner: React.FC<LargeImageBannerProps> = ({ onRequestService }) => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#071A29] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
          alt="Technician servicing split AC in detail"
          className="w-full h-full object-cover object-center opacity-30 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A29]/95 via-[#071A29]/80 to-[#102C43]/70"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
        
        {/* Subhead Tag */}
        <div className="inline-flex items-center justify-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
          <span className="w-5 h-0.5 bg-[#D94B35]"></span>
          <span>AC SERVICE · BHUBANESWAR</span>
          <span className="w-5 h-0.5 bg-[#D94B35]"></span>
        </div>

        {/* Large Statement Headline */}
        <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-white uppercase tracking-tight leading-tight max-w-3xl mx-auto">
          WHEN THE COOLING MATTERS, <br />
          <span className="text-[#D94B35]">THE DETAILS MATTER.</span>
        </h2>

        {/* Short Factual Paragraph */}
        <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          From checking refrigerant levels and cleaning dust-clogged evaporator coils to securing electrical terminals, our service is focused on restoring reliable operation.
        </p>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onRequestService}
            className="px-7 py-3.5 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xl cursor-pointer text-center"
          >
            <span>REQUEST SERVICE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 hover:border-white transition-colors inline-flex items-center justify-center gap-2 text-center"
          >
            <Phone className="w-4 h-4 text-[#D94B35]" />
            <span>CALL {BUSINESS_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
