import React from 'react';
import { Phone, ArrowRight, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface HeroSectionProps {
  onRequestService: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestService }) => {
  return (
    <section className="relative bg-[#071A29] text-white min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* 
        Big Atmospheric Parallax Background Image
        Using bg-fixed on supported screens with subtle overlay gradients
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat sm:bg-fixed filter brightness-75 contrast-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2200&q=85')`
        }}
      >
        {/* Layered Rich Radial & Directional Gradients for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A29]/95 via-[#071A29]/85 to-[#102C43]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A29] via-transparent to-[#071A29]/60" />
      </div>

      {/* Decorative Blueprint/Grid Accent Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT CONTENT: Heading, Description, CTAs, Rating */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl">
            
            {/* Eyebrow Pill / Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#D94B35] font-bold text-xs sm:text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D94B35] animate-pulse"></span>
              <span className="text-white font-semibold">AIR CONDITIONING</span>
              <span className="text-slate-400">•</span>
              <span className="text-[#D94B35]">REPAIR & SERVICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-tight text-white uppercase">
              AC PROBLEMS? <br />
              <span className="text-white">GET PROFESSIONAL</span> <br />
              <span className="text-[#D94B35] drop-shadow-sm">SERVICE YOU CAN TRUST.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
              Reliable air-conditioning repair, cooling diagnostics, and doorstep on-site service for homes and businesses in Bhubaneswar.
            </p>

            {/* Highlighted Value Row on Mobile/Desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D94B35] shrink-0" />
                <span>On-Site Service</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D94B35] shrink-0" />
                <span>Direct Contact</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#D94B35] shrink-0" />
                <span>Online Estimates</span>
              </div>
            </div>

            {/* CTA Buttons - Full Width on Mobile, Inline on Desktop */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-7 py-4 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl inline-flex items-center justify-center gap-2.5 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW · {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onRequestService}
                className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 hover:border-white transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs text-center"
              >
                <span>REQUEST SERVICE</span>
                <ArrowRight className="w-4 h-4 text-[#D94B35]" />
              </button>
            </div>

            {/* Google Rating & Review Count Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-300 border-t border-slate-700/60 max-w-md">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="font-bold text-white tracking-wide">
                5.0 RATING
              </div>
              <span className="text-slate-500">•</span>
              <div className="font-semibold text-slate-300">
                {BUSINESS_INFO.reviewsCount} GOOGLE REVIEWS
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Large Technician Photograph + Mobile-Fitted Proof Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end w-full">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              
              {/* Primary Image Frame with Equipment visible */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/70 bg-[#071A29]">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Technician servicing air conditioning outdoor and indoor equipment"
                  className="w-full h-72 sm:h-96 md:h-[420px] object-cover object-center filter contrast-105"
                />
              </div>

              {/* 
                Floating White Trust Card:
                On mobile: relative, centered, no horizontal clipping!
                On sm+: absolute positioned overlapping smoothly!
              */}
              <div className="relative mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-white text-[#11181D] rounded-xl p-4 sm:p-5 shadow-2xl border border-slate-200 flex items-center justify-between sm:justify-start gap-4 z-20 w-full sm:w-auto">
                <div className="w-12 h-12 rounded-lg bg-[#D94B35]/10 text-[#D94B35] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#D94B35]" />
                </div>
                
                <div className="flex flex-col border-r border-slate-200 pr-4">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-black font-heading text-[#102C43] leading-none">
                      5.0
                    </span>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight mt-0.5">
                    Google Rating
                  </span>
                </div>

                <div className="flex flex-col pl-1">
                  <span className="text-2xl font-black font-heading text-[#D94B35] leading-none">
                    12
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight mt-0.5">
                    Google Reviews
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
