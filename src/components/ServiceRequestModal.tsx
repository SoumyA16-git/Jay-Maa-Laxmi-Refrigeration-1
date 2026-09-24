import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    serviceType: 'AC Repair',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      if (initialServiceId === 'ac-repair') setFormData(prev => ({ ...prev, serviceType: 'AC Repair' }));
      else if (initialServiceId === 'ac-service') setFormData(prev => ({ ...prev, serviceType: 'AC Service' }));
      else if (initialServiceId === 'on-site-service') setFormData(prev => ({ ...prev, serviceType: 'On-Site Service' }));
      else if (initialServiceId === 'online-estimate') setFormData(prev => ({ ...prev, serviceType: 'Online Estimate' }));
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      area: '',
      serviceType: 'AC Repair',
      description: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#102C43] text-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl border border-slate-700 relative my-auto animate-in fade-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase">
                Service Request Logged
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                Thank you, <span className="font-bold text-white">{formData.name}</span>. We will call you directly at <span className="text-[#D94B35] font-bold">{formData.phone}</span>.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#071A29] border border-slate-700 text-xs text-slate-300 text-left space-y-1">
              <div><span className="text-slate-500">Service:</span> {formData.serviceType}</div>
              <div><span className="text-slate-500">Location:</span> {formData.area || 'Bhubaneswar'}</div>
              <div><span className="text-slate-500">Shop:</span> Uttarasasan, near Bharat Petrol Pump</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex-1 py-3 px-4 rounded-xl bg-[#D94B35] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call ({BUSINESS_INFO.phone})</span>
              </a>
              <button
                onClick={resetForm}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-700 cursor-pointer text-center"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-[11px] font-bold text-[#D94B35] uppercase tracking-wider">
                Doorstep AC Service
              </div>
              <h3 className="font-heading font-black text-lg sm:text-xl text-white uppercase">
                {formData.serviceType === 'Online Estimate' ? 'Get An Online Estimate' : 'Request AC Service'}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Jay Maa Laxmi Refrigeration · Uttarasasan, Bhubaneswar
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Subhra Jyoti"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#071A29] border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#D94B35] placeholder:text-slate-600"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 072051 17681"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#071A29] border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#D94B35] placeholder:text-slate-600"
                />
              </div>

              {/* Service Type Selection */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  Service Category
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#071A29] border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#D94B35]"
                >
                  <option value="AC Repair">01 · AC Repair</option>
                  <option value="AC Service">02 · AC Service</option>
                  <option value="On-Site Service">03 · On-Site Service</option>
                  <option value="Online Estimate">04 · Online Estimate</option>
                </select>
              </div>

              {/* Area in Bhubaneswar */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  Location / Area in Bhubaneswar
                </label>
                <input
                  type="text"
                  placeholder="e.g. Uttarasasan, Near Petrol Pump, etc."
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#071A29] border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#D94B35] placeholder:text-slate-600"
                />
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  Issue Details / Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Cooling issue, strange noise, water leak, gas check..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#071A29] border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#D94B35] placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>CONFIRM & SUBMIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-center text-[11px] text-slate-400">
              Direct Phone Support: <a href={BUSINESS_INFO.phoneTel} className="text-[#D94B35] font-bold hover:underline">{BUSINESS_INFO.phone}</a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
