import React from 'react';
import { MapPin, Home, PhoneCall, Calculator } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white text-[#11181D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
            <span className="w-5 h-0.5 bg-[#D94B35]"></span>
            <span>WHY CHOOSE JAY MAA LAXMI</span>
            <span className="w-5 h-0.5 bg-[#D94B35]"></span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#102C43] uppercase tracking-tight">
            CLEAR, VERIFIABLE <br className="hidden sm:inline" />
            <span className="text-[#D94B35]">SERVICE ATTRIBUTES.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Large Real AC Equipment / Technician Image */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-[#EEF1F2]">
              <img
                src="https://images.unsplash.com/photo-1621905252472-943afaa20e20?auto=format&fit=crop&w=900&q=80"
                alt="Air conditioning technical diagnostic work"
                className="w-full h-64 sm:h-80 lg:h-[460px] object-cover object-center"
              />
              
              <div className="absolute top-4 left-4 bg-[#102C43]/90 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                Local Presence · Bhubaneswar
              </div>
            </div>
          </div>

          {/* RIGHT: 4 Numbered Points */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            
            {/* Point 1: Local Presence */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F6F2] border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-[#102C43] text-white flex items-center justify-center font-heading font-black text-sm shrink-0 mt-0.5">
                01
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D94B35]" />
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#102C43] uppercase">
                    LOCAL PRESENCE
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Located at Nayak Complex, near Bharat Petrol Pump, Uttarasasan, serving Bhubaneswar residents and commercial spaces.
                </p>
              </div>
            </div>

            {/* Point 2: On-Site Service */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F6F2] border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-[#102C43] text-white flex items-center justify-center font-heading font-black text-sm shrink-0 mt-0.5">
                02
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#D94B35]" />
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#102C43] uppercase">
                    ON-SITE SERVICE
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We come directly to your doorstep for AC diagnostics, cooling issues, coil washing, and repair.
                </p>
              </div>
            </div>

            {/* Point 3: Direct Contact */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F6F2] border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-[#102C43] text-white flex items-center justify-center font-heading font-black text-sm shrink-0 mt-0.5">
                03
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#D94B35]" />
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#102C43] uppercase">
                    DIRECT CONTACT
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Call {BUSINESS_INFO.phone} directly without automated menu trees or intermediate dispatch handlers.
                </p>
              </div>
            </div>

            {/* Point 4: Online Estimates */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F6F2] border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-[#102C43] text-white flex items-center justify-center font-heading font-black text-sm shrink-0 mt-0.5">
                04
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#D94B35]" />
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#102C43] uppercase">
                    ONLINE ESTIMATES
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Online estimates are listed and available so you have clarity before repair work begins.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
