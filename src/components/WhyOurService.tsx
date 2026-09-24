import React from 'react';
import { Phone, ArrowRight, Home, PhoneCall, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface WhyOurServiceProps {
  onRequestService: () => void;
}

export const WhyOurService: React.FC<WhyOurServiceProps> = ({ onRequestService }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white text-[#11181D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Large Real Technician Photograph */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-[#EEF1F2]">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80"
                alt="AC Technician performing diagnostics on outdoor condenser unit"
                className="w-full h-64 sm:h-80 lg:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102C43]/60 via-transparent to-transparent"></div>
              
              {/* Floating Verified Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-xs p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D94B35]/10 text-[#D94B35] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-black text-xs sm:text-sm text-[#102C43] uppercase">
                    JAY MAA LAXMI REFRIGERATION
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Uttarasasan, Bhubaneswar · Odisha
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content with 3 Feature Rows */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
              <span className="w-5 h-0.5 bg-[#D94B35]"></span>
              <span>WHY OUR SERVICE</span>
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#102C43] uppercase leading-tight">
              A PRACTICAL APPROACH <br />
              <span className="text-[#D94B35]">TO AC SERVICE.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We focus on the straightforward needs of everyday customers: diagnose the issue, provide the service on-site when feasible, and maintain direct communication from start to finish.
            </p>

            {/* 3 Numbered Feature Blocks */}
            <div className="space-y-4 pt-1">
              
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#102C43] text-white flex items-center justify-center font-heading font-black text-xs shrink-0 mt-0.5">
                  01
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-heading font-bold text-sm text-[#102C43] uppercase">
                    ON-SITE SERVICE WHERE NEEDED
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Air conditioning units are inspected and serviced at the customer&apos;s premises.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#102C43] text-white flex items-center justify-center font-heading font-black text-xs shrink-0 mt-0.5">
                  02
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-heading font-bold text-sm text-[#102C43] uppercase">
                    DIRECT CONTACT WITH THE SERVICE TEAM
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    No middlemen or call center delays—speak directly with the service provider.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#102C43] text-white flex items-center justify-center font-heading font-black text-xs shrink-0 mt-0.5">
                  03
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-heading font-bold text-sm text-[#102C43] uppercase">
                    CLEAR SERVICE REQUEST PROCESS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Call directly or submit your issue online for quick coordination.
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onRequestService}
                className="px-6 py-3 rounded-lg bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>REQUEST SERVICE</span>
                <ArrowRight className="w-4 h-4" />
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
