import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER } from "@/const/contact";

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden py-10">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm border border-white/20"
          >
            Get Started Today
          </motion.span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Ready to Experience Quality Home Healthcare?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed font-light">
            Take the first step towards compassionate, professional care for
            your loved ones. Contact us today for a free consultation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 bg-secondary hover:bg-secondary/90 text-white shadow-button h-14 px-8 text-base"
            >
              <Calendar className="w-5 h-5" />
              Book Care Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-base backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call: +91 9204730464
            </Button>
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8"
          >
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="gap-2 text-white/70 hover:text-white hover:bg-white/10"
              >
                <MessageCircle className="w-5 h-5" />
                Or chat with us on WhatsApp
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
