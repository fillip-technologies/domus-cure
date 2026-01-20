import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  Award, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Certified Professionals",
    description: "All our caregivers are thoroughly vetted, trained, and certified healthcare professionals.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock care available whenever you need it, including emergencies and holidays.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "We maintain the highest standards of care with regular quality checks and family feedback.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description: "Customized care plans designed specifically around your loved one's unique needs.",
  },
];

const benefits = [
  "Trained & Background Verified Staff",
  "Affordable Care Packages",
  "No Hidden Charges",
  "Regular Health Reports",
  "Emergency Support Line",
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-background overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in{" "}
              <span className="text-primary">Home Healthcare</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We understand that choosing a home healthcare provider is a significant decision. 
              That's why we go above and beyond to deliver exceptional care that puts your family's 
              peace of mind first.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
