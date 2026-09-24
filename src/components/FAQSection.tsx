import React, { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/hvacData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white text-[#11181D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LEFT: Real Technician Photograph & Hotline Card */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-[#EEF1F2]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="AC Technician answering service questions"
                className="w-full h-64 sm:h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102C43]/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Have A Specific Query?
                </span>
                <div className="font-heading font-black text-base sm:text-lg mt-0.5">
                  Direct Answers From Our Team
                </div>
              </div>
            </div>

            {/* Support Call Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#102C43] text-white space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D94B35]">
                Direct Contact
              </div>
              <h3 className="font-heading font-black text-lg text-white">
                Need more information?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Call our Bhubaneswar service line during working hours to speak with our staff directly.
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full py-3 rounded-xl bg-[#D94B35] hover:bg-[#E56A43] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-sm text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW · {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6 w-full">
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
                <span className="w-5 h-0.5 bg-[#D94B35]"></span>
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#102C43] uppercase leading-tight">
                CLEAR ANSWERS TO <br />
                <span className="text-[#D94B35]">COMMON SERVICE QUESTIONS.</span>
              </h2>
            </div>

            {/* Accordion Items */}
            <div className="space-y-3 pt-2">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.id}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-[#F7F6F2]"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-heading font-bold text-xs sm:text-sm md:text-base text-[#102C43] hover:text-[#D94B35] transition-colors cursor-pointer"
                    >
                      <span className="uppercase">{faq.question}</span>
                      <div className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 transition-transform ${isOpen ? 'rotate-180 text-[#D94B35]' : 'text-slate-500'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
