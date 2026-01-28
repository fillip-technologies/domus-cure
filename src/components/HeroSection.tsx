import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { PHONE_NUMBER } from "@/const/contact";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional home care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Trusted Home Healthcare Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Compassionate Care,{" "}
            <span className="text-secondary">Right at Home</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed"
          >
            Experience professional nursing care, elderly support, and
            post-surgery assistance in the comfort of your home. Our dedicated
            team brings healthcare to your doorstep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              variant="hero"
              size="lg"
              className="gap-2"
              onClick={() => {
                document
                  .getElementById("bookcare")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Calendar className="w-5 h-5" />
              Book Care Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <a href={`tel:+${PHONE_NUMBER}`}>
              <Button variant="hero-outline" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Us Today
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-8 text-primary-foreground/80"
          >
            <div className="flex items-center gap-2">
              <div className="w-16 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">
                  5+
                </span>
              </div>
              <span className="text-sm">
                Years of
                <br />
                Excellence
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">
                  1K+
                </span>
              </div>
              <span className="text-sm">
                Happy
                <br />
                Families
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">
                  24/7
                </span>
              </div>
              <span className="text-sm">
                Support
                <br />
                Available
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
