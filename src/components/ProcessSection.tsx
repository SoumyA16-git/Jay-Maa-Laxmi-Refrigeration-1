import React from 'react';
import { PhoneCall, Search, Home, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/hvacData';

export const ProcessSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <PhoneCall className="w-5 h-5" />;
      case 1:
        return <Search className="w-5 h-5" />;
      case 2:
        return <Home className="w-5 h-5" />;
      case 3:
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white text-[#11181D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
            <span>OUR SIMPLE SERVICE PROCESS</span>
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#102C43] uppercase tracking-tight">
            FROM YOUR FIRST CALL <br className="hidden sm:inline" />
            <span className="text-[#D94B35]">TO THE COMPLETED SERVICE.</span>
          </h2>
        </div>

        {/* 4 Process Stages with connecting line */}
        <div className="relative">
          
          {/* Desktop Connecting Horizontal Line */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-slate-200 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div 
                key={step.number} 
                className="bg-[#F7F6F2] lg:bg-transparent rounded-2xl p-5 sm:p-6 lg:p-0 flex flex-col items-center text-center space-y-3 sm:space-y-4 border border-slate-200/80 lg:border-none"
              >
                {/* Numbered Circle with Icon */}
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center text-[#102C43]">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#102C43] text-white flex items-center justify-center shadow-inner">
                      {getIcon(index)}
                    </div>
                  </div>
                  
                  {/* Floating Number Badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#D94B35] text-white text-[11px] sm:text-xs font-heading font-black flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-black text-base sm:text-lg text-[#102C43] uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
