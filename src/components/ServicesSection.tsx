import React from 'react';
import { ArrowRight, Wrench, Shield, Home, Calculator } from 'lucide-react';
import { SERVICES } from '../data/hvacData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ac-repair':
        return <Wrench className="w-5 h-5" />;
      case 'ac-service':
        return <Shield className="w-5 h-5" />;
      case 'on-site-service':
        return <Home className="w-5 h-5" />;
      case 'online-estimate':
      default:
        return <Calculator className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-[#EEF1F2] text-[#11181D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
            <span className="w-5 h-0.5 bg-[#D94B35]"></span>
            <span>WHAT WE OFFER</span>
            <span className="w-5 h-0.5 bg-[#D94B35]"></span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#102C43] uppercase tracking-tight">
            PROFESSIONAL AC <br className="hidden sm:inline" />
            <span className="text-[#D94B35]">REPAIR & SERVICE</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            Get in touch for AC repair, servicing, on-site service or an estimate.
          </p>
        </div>

        {/* 4 Primary Confirmed Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Container */}
              <div className="relative h-44 sm:h-48 lg:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Number Badge Top Right */}
                <div className="absolute top-3 right-3 bg-[#102C43] text-white text-xs font-black font-heading px-2.5 py-1 rounded-md shadow-sm">
                  {service.number}
                </div>

                {/* Service Icon Floating */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white text-[#D94B35] shadow-lg flex items-center justify-center border border-slate-100">
                  {getIcon(service.id)}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-heading font-black text-lg text-[#102C43] tracking-tight uppercase group-hover:text-[#D94B35] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-[11px] font-bold text-[#D94B35] uppercase tracking-wider">
                    {service.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA Action */}
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#F7F6F2] hover:bg-[#102C43] hover:text-white text-[#102C43] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-between group-hover:border-[#102C43] border border-slate-200 cursor-pointer"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
