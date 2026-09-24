import React, { useState } from 'react';
import { ArrowRight, BookOpen, X, Clock } from 'lucide-react';
import { SERVICE_GUIDES, GuideItem } from '../data/hvacData';

export const ArticlesSection: React.FC = () => {
  const [activeGuide, setActiveGuide] = useState<GuideItem | null>(null);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#EEF1F2] text-[#11181D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
            <span>AC SERVICE TIPS & GUIDES</span>
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#102C43] uppercase tracking-tight">
            PRACTICAL ADVICE FOR <br className="hidden sm:inline" />
            <span className="text-[#D94B35]">HOME & OFFICE AIR CONDITIONING</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            Essential operational insights, preliminary checks, and guidance before booking on-site service.
          </p>
        </div>

        {/* 4 Informative Guide Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {SERVICE_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#102C43] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {guide.category}
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#D94B35]" />
                    <span>{guide.readTime}</span>
                  </div>

                  <h3 className="font-heading font-black text-sm sm:text-base text-[#102C43] uppercase tracking-tight group-hover:text-[#D94B35] transition-colors line-clamp-2">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {guide.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setActiveGuide(guide)}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#F7F6F2] hover:bg-[#102C43] hover:text-white text-[#102C43] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-between border border-slate-200 cursor-pointer"
                >
                  <span>READ GUIDE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal to Read Full Guide */}
      {activeGuide && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative my-auto animate-in fade-in">
            <button
              onClick={() => setActiveGuide(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close Guide"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D94B35]">
                <BookOpen className="w-4 h-4" />
                <span>{activeGuide.category} · {activeGuide.readTime}</span>
              </div>

              <h3 className="font-heading font-black text-lg sm:text-2xl text-[#102C43] uppercase leading-tight pr-6">
                {activeGuide.title}
              </h3>

              <div className="rounded-xl overflow-hidden h-48 sm:h-56 w-full">
                <img
                  src={activeGuide.image}
                  alt={activeGuide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
                {activeGuide.content}
              </p>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 text-center sm:text-left">
                  Jay Maa Laxmi Refrigeration · Bhubaneswar
                </span>
                <button
                  onClick={() => setActiveGuide(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#102C43] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071A29] cursor-pointer text-center"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
