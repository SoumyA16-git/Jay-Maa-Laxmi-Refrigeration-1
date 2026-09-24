import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface MobileDockProps {
  onRequestService: () => void;
}

export const MobileDock: React.FC<MobileDockProps> = ({ onRequestService }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071A29]/95 backdrop-blur-md border-t border-slate-700/80 p-2.5 sm:p-3 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 sm:px-3 rounded-xl bg-[#D94B35] active:bg-[#E56A43] text-white font-bold text-xs uppercase tracking-wider shadow-md text-center"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span className="truncate">CALL NOW</span>
        </a>

        {/* Request Service Button */}
        <button
          onClick={onRequestService}
          className="flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 sm:px-3 rounded-xl bg-[#102C43] active:bg-[#102C43]/80 text-white font-bold text-xs uppercase tracking-wider border border-slate-600 shadow-md cursor-pointer text-center"
        >
          <Calendar className="w-4 h-4 text-[#D94B35] shrink-0" />
          <span className="truncate">REQUEST SERVICE</span>
        </button>

      </div>
    </div>
  );
};
