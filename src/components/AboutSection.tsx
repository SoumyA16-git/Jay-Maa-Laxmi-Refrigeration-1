import React from 'react';
import { Phone, ArrowRight, Home, PhoneCall, Calculator } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white text-[#11181D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Asymmetrical Image Collage - Responsive Fit */}
          <div className="lg:col-span-6 w-full">
            <div className="relative max-w-md sm:max-w-lg mx-auto lg:mx-0 pb-6 sm:pb-8 lg:pb-0">
              
              {/* Primary Large Image: AC Technician servicing unit */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 w-4/5">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=700&q=80"
                  alt="Jay Maa Laxmi technician inspecting air conditioner unit"
                  className="w-full h-72 sm:h-96 object-cover object-center"
                />
              </div>

              {/* Smaller Overlapping Supporting Image: Equipment & Condenser */}
              <div className="absolute -bottom-2 right-0 sm:-bottom-6 sm:-right-4 w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10">
                <img
                  src="https://images.unsplash.com/photo-1590756254933-2873d72a83b6?auto=format&fit=crop&w=500&q=80"
                  alt="Air conditioner outdoor condenser unit"
                  className="w-full h-40 sm:h-56 object-cover object-center"
                />
              </div>

              {/* Verified Local Accent Tag floating */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-8 bg-[#102C43] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
                Bhubaneswar · Odisha
              </div>
            </div>
          </div>

          {/* RIGHT: Content & 3 Factual Feature Rows */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small Accent Tag */}
            <div className="inline-flex items-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
              <span className="w-5 h-0.5 bg-[#D94B35]"></span>
              <span>ABOUT OUR SERVICE</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#102C43] uppercase leading-tight">
              AC SERVICE BUILT AROUND <br />
              <span className="text-[#D94B35]">THE PROBLEM AT HAND.</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Jay Maa Laxmi Refrigeration is a local air-conditioning repair and service business based in Uttarasasan, Bhubaneswar, providing repair and on-site service for customers who need practical help with their AC systems.
            </p>

            {/* 3 Factual Feature Rows */}
            <div className="space-y-3.5 pt-1">
              
              {/* Row 1: On-Site Service */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F7F6F2] border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-[#D94B35]/10 text-[#D94B35] flex items-center justify-center shrink-0 mt-0.5">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#102C43] uppercase tracking-wide">
                    ON-SITE SERVICE
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Service at the customer&apos;s location where applicable.
                  </p>
                </div>
              </div>

              {/* Row 2: Direct Contact */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F7F6F2] border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-[#D94B35]/10 text-[#D94B35] flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#102C43] uppercase tracking-wide">
                    DIRECT CONTACT
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Speak directly with the business.
                  </p>
                </div>
              </div>

              {/* Row 3: Online Estimates */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F7F6F2] border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-[#D94B35]/10 text-[#D94B35] flex items-center justify-center shrink-0 mt-0.5">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#102C43] uppercase tracking-wide">
                    ONLINE ESTIMATES
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Online estimates are currently listed.
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs: Learn More + Call */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onLearnMore}
                className="px-6 py-3 rounded-lg bg-[#102C43] hover:bg-[#071A29] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 text-[#D94B35]" />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-6 py-3 rounded-lg bg-transparent hover:bg-slate-100 text-[#102C43] border border-slate-300 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#D94B35]" />
                <span>CALL {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
