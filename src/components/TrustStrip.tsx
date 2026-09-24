import React from 'react';
import { Star, MessageSquare, Home, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200 py-6 sm:py-8 text-[#11181D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-slate-200">
          
          {/* Block 1: 5.0 Google Rating */}
          <div className="p-3.5 sm:p-4 lg:px-6 bg-[#F7F6F2] lg:bg-transparent rounded-xl lg:rounded-none border lg:border-none border-slate-200/80 flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-200/60">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400" />
            </div>
            <div className="min-w-0">
              <div className="font-heading font-black text-xl sm:text-2xl text-[#102C43] leading-none">
                5.0 ★
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 truncate">
                Google Rating
              </div>
            </div>
          </div>

          {/* Block 2: 12 Google Reviews */}
          <div className="p-3.5 sm:p-4 lg:px-6 bg-[#F7F6F2] lg:bg-transparent rounded-xl lg:rounded-none border lg:border-none border-slate-200/80 flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 text-[#D94B35] flex items-center justify-center shrink-0 border border-red-100">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="font-heading font-black text-xl sm:text-2xl text-[#102C43] leading-none">
                {BUSINESS_INFO.reviewsCount}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 truncate">
                Google Reviews
              </div>
            </div>
          </div>

          {/* Block 3: ON-SITE Service */}
          <div className="p-3.5 sm:p-4 lg:px-6 bg-[#F7F6F2] lg:bg-transparent rounded-xl lg:rounded-none border lg:border-none border-slate-200/80 flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#102C43] flex items-center justify-center shrink-0 border border-blue-100">
              <Home className="w-5 h-5 sm:w-6 sm:h-6 text-[#102C43]" />
            </div>
            <div className="min-w-0">
              <div className="font-heading font-black text-xl sm:text-2xl text-[#102C43] leading-none">
                ON-SITE
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 truncate">
                Service
              </div>
            </div>
          </div>

          {/* Block 4: BHUBANESWAR Local Business */}
          <div className="p-3.5 sm:p-4 lg:px-6 bg-[#F7F6F2] lg:bg-transparent rounded-xl lg:rounded-none border lg:border-none border-slate-200/80 flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D94B35]" />
            </div>
            <div className="min-w-0">
              <div className="font-heading font-black text-lg sm:text-2xl text-[#102C43] leading-none truncate">
                BHUBANESWAR
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 truncate">
                Local Business
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
