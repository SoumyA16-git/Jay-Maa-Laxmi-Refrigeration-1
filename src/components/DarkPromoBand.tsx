import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface DarkPromoBandProps {
  onRequestService: () => void;
}

export const DarkPromoBand: React.FC<DarkPromoBandProps> = ({ onRequestService }) => {
  return (
    <section className="relative bg-[#071A29] text-white py-14 sm:py-16 lg:py-20 overflow-hidden border-y border-[#102C43]">
      {/* Background Photograph with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
          alt="Technician work environment"
          className="w-full h-full object-cover object-center opacity-15 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A29] via-[#071A29]/95 to-[#102C43]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT: Book Your AC Service */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
              <span className="w-5 h-0.5 bg-[#D94B35]"></span>
              <span>BOOK YOUR AC SERVICE</span>
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase leading-tight">
              GET YOUR AC <br />
              <span className="text-[#D94B35]">SERVICE REQUEST STARTED.</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-base max-w-xl leading-relaxed">
              Whether you need troubleshooting, seasonal servicing, or an on-site technician visit in Bhubaneswar, submit your details to schedule service.
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestService}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center"
              >
                <span>REQUEST SERVICE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: Need Help With Your AC? + Call Now */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end w-full">
            <div className="w-full max-w-md bg-[#102C43] border border-slate-700/80 rounded-2xl p-5 sm:p-8 space-y-4 shadow-xl">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                Direct Hotline Assistance
              </div>

              <div className="text-lg sm:text-xl font-heading font-bold text-white uppercase">
                NEED HELP WITH YOUR AC?
              </div>

              <div className="space-y-1">
                <div className="text-xs text-slate-300">
                  Call directly to speak with us:
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-white">
                  {BUSINESS_INFO.phone}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-md text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
