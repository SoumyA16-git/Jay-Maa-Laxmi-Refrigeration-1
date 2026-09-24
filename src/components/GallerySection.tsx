import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/hvacData';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F7F6F2] text-[#11181D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-[#D94B35] font-bold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
            <span>PHOTO GALLERY</span>
            <span className="w-6 h-0.5 bg-[#D94B35]"></span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#102C43] uppercase tracking-tight">
            A LOOK <span className="text-[#D94B35]">AT THE WORK</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            Real photography from our daily air conditioning repair, diagnostics, and on-site servicing operations.
          </p>
        </div>

        {/* Asymmetrical Masonry/Grid (1 large, 2 medium, 2 portrait crops, 1 wide) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-5">
          
          {/* 1. Large Image (spans 8 cols on desktop) */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_IMAGES[0])}
            className="sm:col-span-2 lg:col-span-8 group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-60 sm:h-80 lg:h-96 border border-slate-200"
          >
            <img
              src={GALLERY_IMAGES[0].url}
              alt={GALLERY_IMAGES[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 sm:p-6 text-white">
              <span className="text-xs text-[#D94B35] font-bold uppercase tracking-wider">
                {GALLERY_IMAGES[0].title}
              </span>
              <p className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">
                {GALLERY_IMAGES[0].caption}
              </p>
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/40 p-2 rounded-full">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* 2. Medium Image (spans 4 cols on desktop) */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_IMAGES[1])}
            className="sm:col-span-1 lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-56 sm:h-80 lg:h-96 border border-slate-200"
          >
            <img
              src={GALLERY_IMAGES[1].url}
              alt={GALLERY_IMAGES[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 sm:p-6 text-white">
              <span className="text-xs text-[#D94B35] font-bold uppercase tracking-wider">
                {GALLERY_IMAGES[1].title}
              </span>
              <p className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">
                {GALLERY_IMAGES[1].caption}
              </p>
            </div>
          </div>

          {/* 3. Medium Image (spans 4 cols on desktop) */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_IMAGES[2])}
            className="sm:col-span-1 lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-56 sm:h-72 lg:h-80 border border-slate-200"
          >
            <img
              src={GALLERY_IMAGES[2].url}
              alt={GALLERY_IMAGES[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 sm:p-6 text-white">
              <span className="text-xs text-[#D94B35] font-bold uppercase tracking-wider">
                {GALLERY_IMAGES[2].title}
              </span>
              <p className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">
                {GALLERY_IMAGES[2].caption}
              </p>
            </div>
          </div>

          {/* 4. Portrait Crop (spans 4 cols on desktop) */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_IMAGES[3])}
            className="sm:col-span-1 lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-56 sm:h-72 lg:h-80 border border-slate-200"
          >
            <img
              src={GALLERY_IMAGES[3].url}
              alt={GALLERY_IMAGES[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 sm:p-6 text-white">
              <span className="text-xs text-[#D94B35] font-bold uppercase tracking-wider">
                {GALLERY_IMAGES[3].title}
              </span>
              <p className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">
                {GALLERY_IMAGES[3].caption}
              </p>
            </div>
          </div>

          {/* 5. Portrait Crop (spans 4 cols on desktop) */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_IMAGES[4])}
            className="sm:col-span-1 lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-56 sm:h-72 lg:h-80 border border-slate-200"
          >
            <img
              src={GALLERY_IMAGES[4].url}
              alt={GALLERY_IMAGES[4].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 sm:p-6 text-white">
              <span className="text-xs text-[#D94B35] font-bold uppercase tracking-wider">
                {GALLERY_IMAGES[4].title}
              </span>
              <p className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">
                {GALLERY_IMAGES[4].caption}
              </p>
            </div>
          </div>

          {/* 6. Wide Landscape Image (spans 12 cols on desktop) */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_IMAGES[5])}
            className="sm:col-span-2 lg:col-span-12 group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-52 sm:h-72 border border-slate-200"
          >
            <img
              src={GALLERY_IMAGES[5].url}
              alt={GALLERY_IMAGES[5].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 sm:p-6 text-white">
              <span className="text-xs text-[#D94B35] font-bold uppercase tracking-wider">
                {GALLERY_IMAGES[5].title}
              </span>
              <p className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">
                {GALLERY_IMAGES[5].caption}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="relative max-w-4xl w-full bg-[#071A29] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full max-h-[70vh] object-contain bg-black"
            />

            <div className="p-4 sm:p-5 bg-[#102C43] text-white">
              <h3 className="font-heading font-black text-base sm:text-lg text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
