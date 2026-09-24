import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface FinalCTAProps {
  onRequestService: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestService }) => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#102C43] text-white overflow-hidden border-t border-[#071A29]">
      {/* Background Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1800&q=80"
          alt="Technician working on cooling equipment"
          className="w-full h-full object-cover object-center opacity-20 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A29]/95 via-[#102C43]/90 to-[#102C43]/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
        
        <div className="inline-flex items-center justify-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
          <span className="w-5 h-0.5 bg-[#D94B35]"></span>
          <span>GET IN TOUCH TODAY</span>
          <span className="w-5 h-0.5 bg-[#D94B35]"></span>
        </div>

        {/* Headline */}
        <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight">
          READY TO GET <br />
          <span className="text-[#D94B35]">YOUR AC SERVICED?</span>
        </h2>

        {/* Supporting Text */}
        <div className="text-slate-300 text-xs sm:text-base space-y-1">
          <div className="font-bold text-white uppercase tracking-wider">
            {BUSINESS_INFO.name}
          </div>
          <div>
            Uttarasasan, Bhubaneswar · Odisha 751002
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="px-8 py-3.5 sm:py-4 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xl text-center"
          >
            <Phone className="w-4 h-4" />
            <span>CALL {BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={onRequestService}
            className="px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-100 text-[#102C43] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xl cursor-pointer text-center"
          >
            <span>REQUEST SERVICE</span>
            <ArrowRight className="w-4 h-4 text-[#D94B35]" />
          </button>
        </div>

      </div>
    </section>
  );
};
