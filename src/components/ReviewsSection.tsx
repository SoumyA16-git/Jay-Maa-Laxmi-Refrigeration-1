import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, FEATURED_REVIEW, ADDITIONAL_REVIEWS, SECONDARY_REVIEWS } from '../data/hvacData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-14 sm:py-20 lg:py-24 bg-[#EEF1F2] text-[#11181D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
            <span>CUSTOMER FEEDBACK</span>
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#102C43] uppercase tracking-tight">
            WHAT OUR <span className="text-[#D94B35]">CUSTOMERS SAY.</span>
          </h2>

          {/* Google Reviews Badge */}
          <div className="pt-1 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#102C43] uppercase tracking-wider">
              5.0 RATING · {BUSINESS_INFO.reviewsCount} GOOGLE REVIEWS
            </div>
          </div>
        </div>

        {/* SECTION 11: Main Reviews Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-14">
          
          {/* Featured Large Review: Subhra Jyoti */}
          <div className="lg:col-span-7 bg-[#102C43] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10">
              <MessageSquare className="w-48 h-48 text-white" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                ))}
              </div>

              <blockquote className="font-heading font-bold text-lg sm:text-2xl text-white leading-snug">
                &ldquo;{FEATURED_REVIEW.text}&rdquo;
              </blockquote>
            </div>

            <div className="pt-4 border-t border-slate-700/80 space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-sm sm:text-base text-white">
                    {FEATURED_REVIEW.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {FEATURED_REVIEW.meta} · {FEATURED_REVIEW.time}
                  </div>
                </div>
                <div className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#D94B35] text-white uppercase tracking-wider">
                  Verified Review
                </div>
              </div>

              {/* Owner Response */}
              {FEATURED_REVIEW.ownerResponse && (
                <div className="p-3.5 rounded-lg bg-[#071A29] border border-slate-700 text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-[#D94B35] uppercase text-[10px] tracking-wider">
                    Response from the owner:
                  </div>
                  <div className="italic">&ldquo;{FEATURED_REVIEW.ownerResponse.text}&rdquo;</div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: 2 Additional Primary Reviews */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {ADDITIONAL_REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200/90 flex-1 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="font-medium text-slate-800 text-sm sm:text-base leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <div className="font-heading font-bold text-[#102C43]">
                        {review.author}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {review.meta} · {review.time}
                      </div>
                    </div>
                  </div>

                  {review.ownerResponse && (
                    <div className="mt-2.5 p-2.5 rounded bg-slate-50 text-[11px] text-slate-600 border border-slate-100">
                      <span className="font-bold text-[#D94B35]">Owner: </span>
                      <span>&ldquo;{review.ownerResponse.text}&rdquo;</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* SECTION 12: Secondary Reviews */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              ADDITIONAL CUSTOMER REVIEWS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECONDARY_REVIEWS.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="text-xs font-medium text-slate-700 italic">
                  &ldquo;{item.text}&rdquo;
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-bold text-[#102C43]">{item.author}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
