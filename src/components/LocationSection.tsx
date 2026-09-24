import React from 'react';
import { Phone, Navigation, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

export const LocationSection: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Nayak Complex, near Bharat Petrol Pump, Uttarasasan, Bhubaneswar, Odisha 751002'
  )}`;

  return (
    <section id="location" className="py-14 sm:py-20 lg:py-24 bg-white text-[#11181D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
            <span>FIND US IN UTTARASASAN</span>
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#102C43] uppercase tracking-tight">
            WORKSHOP & SERVICE LOCATION <br className="hidden sm:inline" />
            <span className="text-[#D94B35]">IN BHUBANESWAR</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            Conveniently situated near Bharat Petrol Pump in Uttarasasan with full on-site service coverage across the city.
          </p>
        </div>

        {/* Split Section: Details on Left, Real Google Map iframe on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Address Card & Action Buttons */}
          <div className="lg:col-span-5 bg-[#F7F6F2] rounded-2xl p-5 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-[#D94B35] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base sm:text-lg text-[#102C43] uppercase">
                    {BUSINESS_INFO.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-semibold">
                    {BUSINESS_INFO.category}
                  </span>
                </div>
              </div>

              {/* Exact Address */}
              <div className="space-y-1 text-xs sm:text-sm text-[#11181D]">
                <div className="font-bold text-sm sm:text-base text-[#102C43]">Nayak Complex</div>
                <div className="text-slate-600">near Bharat Petrol Pump</div>
                <div className="text-slate-600">Uttarasasan</div>
                <div className="text-slate-600 font-medium">Bhubaneswar, Odisha 751002</div>
              </div>

              {/* Phone & Operating Hours */}
              <div className="pt-2 space-y-2 text-xs sm:text-sm border-t border-slate-200">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4 text-[#D94B35]" />
                  <span>Direct: </span>
                  <a href={BUSINESS_INFO.phoneTel} className="font-bold text-[#102C43] hover:text-[#D94B35]">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>{BUSINESS_INFO.hours}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#102C43] hover:bg-[#071A29] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="w-4 h-4 text-[#D94B35]" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex-1 py-3 px-4 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Responsive Embedded Google Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg border border-slate-200 min-h-[300px] sm:min-h-[400px]">
            <iframe
              title="Jay Maa Laxmi Refrigeration Location Map"
              src="https://maps.google.com/maps?q=Nayak%20complex%2C%20near%20bharat%20petrol%20pump%2C%20Uttarasasan%2C%20Bhubaneswar%2C%20Odisha%20751002&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px', display: 'block' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};
