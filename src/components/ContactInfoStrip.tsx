import React from 'react';
import { Phone, MapPin, Compass, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

export const ContactInfoStrip: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200 py-6 sm:py-8 text-[#11181D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-0 lg:divide-x divide-slate-200">
          
          {/* PHONE */}
          <div className="p-3.5 sm:p-4 lg:px-6 bg-[#F7F6F2] lg:bg-transparent rounded-xl lg:rounded-none border lg:border-none border-slate-200/80 flex items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 text-[#D94B35] flex items-center justify-center shrink-0 border border-red-100">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                PHONE
              </div>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="font-heading font-black text-base sm:text-lg text-[#102C43] hover:text-[#D94B35] transition-colors leading-tight truncate block"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="p-3.5 sm:p-4 lg:px-6 bg-[#F7F6F2] lg:bg-transparent rounded-xl lg:rounded-none border lg:border-none border-slate-200/80 flex items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#102C43] flex items-center justify-center shrink-0 border border-blue-100">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                LOCATION
              </div>
              <div className="font-heading font-bold text-xs sm:text-sm text-[#102C43] leading-tight truncate">
                {BUSINESS_INFO.location.area}, {BUSINESS_INFO.location.city}
              </div>
            </div>
          </div>

          {/* LANDMARK */}
          <div className="p-3.5 sm:p-4 lg:px-6 bg-[#F7F6F2] lg:bg-transparent rounded-xl lg:rounded-none border lg:border-none border-slate-200/80 flex items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
              <Compass className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                LANDMARK
              </div>
              <div className="font-heading font-bold text-xs sm:text-sm text-[#102C43] leading-tight truncate">
                {BUSINESS_INFO.location.landmark}
              </div>
            </div>
          </div>

          {/* HOURS */}
          <div className="p-3.5 sm:p-4 lg:px-6 bg-[#F7F6F2] lg:bg-transparent rounded-xl lg:rounded-none border lg:border-none border-slate-200/80 flex items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Clock className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                HOURS
              </div>
              <div className="font-heading font-bold text-xs sm:text-sm text-[#102C43] leading-tight truncate">
                {BUSINESS_INFO.hours}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
