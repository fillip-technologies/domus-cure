import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesHighlights } from "@/components/ServicesHighlights";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsPreview } from "@/components/TestimonialsPreview";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesHighlights />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <TestimonialsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
