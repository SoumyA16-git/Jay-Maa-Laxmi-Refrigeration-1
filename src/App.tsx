import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { WhyOurService } from './components/WhyOurService';
import { DarkPromoBand } from './components/DarkPromoBand';
import { ProcessSection } from './components/ProcessSection';
import { TeamSection } from './components/TeamSection';
import { LargeImageBanner } from './components/LargeImageBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactFormSection } from './components/ContactFormSection';
import { ContactInfoStrip } from './components/ContactInfoStrip';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileDock } from './components/MobileDock';
import { ServiceRequestModal } from './components/ServiceRequestModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenRequestService = () => {
    setSelectedServiceId(undefined);
    setModalOpen(true);
  };

  const handleOpenEstimate = () => {
    setSelectedServiceId('online-estimate');
    setModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setModalOpen(true);
  };

  const handleLearnMore = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#11181D] font-sans selection:bg-[#D94B35] selection:text-white pb-20 md:pb-0 overflow-x-hidden w-full relative">
      {/* 01. Top Utility Bar & Professional Navigation */}
      <Navbar
        onRequestService={handleOpenRequestService}
        onOpenEstimate={handleOpenEstimate}
      />

      <main className="overflow-x-hidden w-full">
        {/* Large Image-Based Hero with Parallax Background + Floating Proof Card */}
        <HeroSection onRequestService={handleOpenRequestService} />

        {/* 02. About / Introduction (Asymmetrical image collage + 3 factual rows) */}
        <AboutSection onLearnMore={handleLearnMore} />

        {/* 03. Trust / Local Proof Strip (5.0 ★, 12 Reviews, On-Site, Bhubaneswar) */}
        <TrustStrip />

        {/* 04. Comprehensive Solutions / Services Section (4 confirmed services) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 05. Why Our Service Section (Technician photo + 3 feature blocks) */}
        <WhyOurService onRequestService={handleOpenRequestService} />

        {/* 06. Dark Feature / Promo CTA Band */}
        <DarkPromoBand onRequestService={handleOpenRequestService} />

        {/* 07. How It Works / 4-Step Process Section */}
        <ProcessSection />

        {/* 08. Our Service Team Section (4 technical personnel cards) */}
        <TeamSection />

        {/* 09. Full-Width Dramatic Image Banner */}
        <LargeImageBanner onRequestService={handleOpenRequestService} />

        {/* 10. Why Choose Us Section (Detailed factual attributes) */}
        <WhyChooseUs />

        {/* 11 & 12. Verified Customer Reviews & Testimonials */}
        <ReviewsSection />

        {/* 13. Frequently Asked Questions (Interactive Accordion) */}
        <FAQSection />

        {/* 14. Helpful Guides & Content Section */}
        <ArticlesSection />

        {/* 15. Lead Contact Form Section */}
        <ContactFormSection />

        {/* 16. Contact Information Quick Strip */}
        <ContactInfoStrip />

        {/* 17. Asymmetrical Photo Gallery */}
        <GallerySection />

        {/* 18. Workshop & Service Location Section with Interactive Map */}
        <LocationSection />

        {/* 19. Final Dark Conversion CTA Band */}
        <FinalCTA onRequestService={handleOpenRequestService} />
      </main>

      {/* 20. Large Professional 4-Column Footer */}
      <Footer
        onSelectService={handleSelectService}
        onRequestService={handleOpenRequestService}
      />

      {/* 21. Sticky Mobile Action Dock (Quick Call & Service Request) */}
      <MobileDock onRequestService={handleOpenRequestService} />

      {/* 22. Service Request & Estimate Interactive Modal */}
      <ServiceRequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}
