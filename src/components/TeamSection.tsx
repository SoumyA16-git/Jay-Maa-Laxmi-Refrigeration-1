import React from 'react';
import { TEAM_MEMBERS } from '../data/hvacData';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#EEF1F2] text-[#11181D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
            <span>OUR SERVICE TEAM</span>
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#102C43] uppercase tracking-tight">
            THE PEOPLE <br className="hidden sm:inline" />
            <span className="text-[#D94B35]">BEHIND THE SERVICE.</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            Hands-on technical personnel dedicated to air conditioning repair and on-site servicing in Bhubaneswar.
          </p>
        </div>

        {/* 4 Technician Cards with Generic Labels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative h-56 sm:h-64 lg:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102C43]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>

              {/* Information Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2 text-center bg-white">
                <div>
                  <h3 className="font-heading font-black text-sm sm:text-base text-[#102C43] tracking-wider uppercase group-hover:text-[#D94B35] transition-colors">
                    {member.role}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  Jay Maa Laxmi Service Unit
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
