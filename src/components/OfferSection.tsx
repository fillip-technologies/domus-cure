import { motion } from "framer-motion";
import { Gift, Clock, Percent, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OfferSectionProps {
  onBookNow: () => void;
}

export const OfferSection = ({ onBookNow }: OfferSectionProps) => {
  const offers = [
    {
      icon: Percent,
      title: "20% Off First Visit",
      description:
        "New clients get 20% discount on their first consultation and care session",
      highlight: "Limited Time",
    },
    {
      icon: Gift,
      title: "Free Health Assessment",
      description: "Complimentary comprehensive health evaluation worth ₹2,000",
      highlight: "Worth",
    },
    {
      icon: Clock,
      title: "24/7 Care Package",
      description: "Round-the-clock nursing care with special monthly rates",
      highlight: "Best Value",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/5 relative overflow-hidden"
      id="bookcare"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-secondary fill-white" />
            <span className="text-sm font-medium">Special Offers</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exclusive Care Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our limited-time offers and give your loved ones
            the premium care they deserve
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
                <div className="absolute -top-3 right-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {offer.highlight}
                  </span>
                </div>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <offer.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {offer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={onBookNow}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Now & Claim Offer
          </Button>
          <p className="text-muted-foreground text-sm mt-3">
            Limited slots available • No obligation consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
};
