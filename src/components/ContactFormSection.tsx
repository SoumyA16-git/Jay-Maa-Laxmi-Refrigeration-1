import React, { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    area: '',
    serviceRequired: 'AC Repair',
    problem: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      area: '',
      serviceRequired: 'AC Repair',
      problem: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact-section" className="py-14 sm:py-20 lg:py-24 bg-[#071A29] text-white relative overflow-hidden border-t border-[#102C43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* LEFT: Large Real Photograph of Technician + Headlines */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full">
            <div className="inline-flex items-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
              <span className="w-5 h-0.5 bg-[#D94B35]"></span>
              <span>REQUEST SERVICE</span>
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight">
              NEED AC SERVICE? <br />
              <span className="text-[#D94B35]">LET&apos;S GET STARTED.</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Submit your AC problem details for on-site assistance in Uttarasasan and across Bhubaneswar.
            </p>

            {/* Large Real Technician Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/60 bg-[#102C43]">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"
                alt="AC Technician performing inspection"
                className="w-full h-56 sm:h-72 lg:h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A29]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
                  Jay Maa Laxmi Refrigeration
                </span>
                <div className="font-heading font-bold text-xs sm:text-sm mt-0.5">
                  Direct Doorstep Support in Bhubaneswar
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Premium Service Request Lead Form */}
          <div className="lg:col-span-7 bg-[#102C43] rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-700/90 shadow-2xl w-full">
            {submitted ? (
              <div className="text-center py-8 sm:py-10 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase">
                    Service Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-white">{formData.fullName}</span>. We have logged your request for <span className="text-[#D94B35] font-bold">{formData.serviceRequired}</span>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#071A29] border border-slate-700 text-xs text-slate-300 max-w-sm mx-auto space-y-1 text-left">
                  <div><span className="text-slate-500">Contact:</span> {formData.phone}</div>
                  <div><span className="text-slate-500">Area:</span> {formData.area || 'Bhubaneswar'}</div>
                  <div><span className="text-slate-500">Status:</span> Pending Dispatch Confirmation</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D94B35] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call ({BUSINESS_INFO.phone})</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-700 cursor-pointer text-center"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="border-b border-slate-700 pb-3">
                  <h3 className="font-heading font-black text-lg sm:text-xl text-white uppercase">
                    Enter Service Details
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Direct booking with Jay Maa Laxmi Refrigeration
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Subhra Jyoti"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#071A29] border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#D94B35] transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 072051 17681"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#071A29] border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#D94B35] transition-colors placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Area / Location */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                      Area / Colony in Bhubaneswar
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Uttarasasan, Rasulgarh, etc."
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#071A29] border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#D94B35] transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  {/* Service Required */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#071A29] border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#D94B35] transition-colors"
                    >
                      <option value="AC Repair">01 · AC Repair</option>
                      <option value="AC Service">02 · AC Service</option>
                      <option value="On-Site Service">03 · On-Site Service</option>
                      <option value="Online Estimate">04 · Online Estimate</option>
                    </select>
                  </div>
                </div>

                {/* Problem Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    Observed Issue / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the AC issue (e.g., not cooling, water leakage, strange noise, outdoor unit not starting)..."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#071A29] border border-slate-700 text-white text-base sm:text-sm focus:outline-none focus:border-[#D94B35] transition-colors placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer text-center"
                  >
                    <span>SUBMIT SERVICE REQUEST</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-400 pt-2 gap-2 text-center sm:text-left">
                  <span>Need immediate technician advice?</span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-[#D94B35] font-bold hover:underline"
                  >
                    Call directly: {BUSINESS_INFO.phone}
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
