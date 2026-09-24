import React from 'react';
import { Phone, MapPin, Clock, Snowflake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onRequestService: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onRequestService }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#071A29] text-white border-t border-[#102C43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-28 md:pb-12">
        
        {/* Top Area: Brand Title & Business Category */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 sm:pb-12 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#D94B35] flex items-center justify-center text-white shrink-0">
              <Snowflake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-heading font-black text-lg sm:text-2xl tracking-tight text-white uppercase">
                {BUSINESS_INFO.name}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                {BUSINESS_INFO.category}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-5 py-2.5 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onRequestService}
              className="px-5 py-2.5 rounded-xl bg-[#102C43] hover:bg-[#102C43]/80 text-white text-xs font-bold uppercase tracking-wider border border-slate-700 transition-colors cursor-pointer text-center"
            >
              REQUEST SERVICE
            </button>
          </div>
        </div>

        {/* Four Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-8 sm:py-12 border-b border-slate-800 text-xs">
          
          {/* Column 1: QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-[#D94B35]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('reviews')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Customer Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('location')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: VERIFIED SERVICES */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-[#D94B35]">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onSelectService('ac-repair')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AC Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('ac-service')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AC Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('on-site-service')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  On-Site Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('online-estimate')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Online Estimate
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: LOCATION */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-[#D94B35]">
              LOCATION
            </h4>
            <div className="space-y-2 text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D94B35] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Nayak Complex</div>
                  <div>near Bharat Petrol Pump</div>
                  <div>Uttarasasan, Bhubaneswar</div>
                  <div>Odisha 751002</div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 text-slate-400">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: CONTACT */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider text-[#D94B35]">
              CONTACT
            </h4>
            <div className="space-y-3">
              <div className="text-slate-400">
                Direct phone line for bookings and enquiries:
              </div>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="font-heading font-black text-lg sm:text-xl text-white hover:text-[#D94B35] transition-colors block"
              >
                {BUSINESS_INFO.phone}
              </a>
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Area: Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs gap-3 sm:gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <span>Air Conditioning Repair & Service</span>
            <span>•</span>
            <span>Bhubaneswar, Odisha</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
