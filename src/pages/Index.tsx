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
import { useLocation } from "react-router-dom";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

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
