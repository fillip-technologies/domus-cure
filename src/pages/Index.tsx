import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesHighlights } from "@/components/ServicesHighlights";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsPreview } from "@/components/TestimonialsPreview";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { OfferSection } from "@/components/OfferSection";
import { BookingFormModal } from "@/components/BookingFormModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesHighlights />
        <OfferSection onBookNow={() => setIsBookingOpen(true)} />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <TestimonialsPreview />
        <CTASection />
      </main>
      <Footer />
      <BookingFormModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default Index;
