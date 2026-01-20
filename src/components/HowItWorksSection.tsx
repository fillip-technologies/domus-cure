import { motion } from "framer-motion";
import { 
  PhoneCall, 
  UserCheck, 
  ClipboardCheck, 
  HeartPulse,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Contact Us",
    description: "Reach out via call, WhatsApp, or fill the inquiry form with your requirements.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Assessment",
    description: "Our team assesses your needs and creates a personalized care plan for you.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Caregiver Match",
    description: "We match you with the most suitable caregiver based on your specific needs.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Care Begins",
    description: "Professional care starts at your home with continuous monitoring and support.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started with our home healthcare services is easy. 
            Follow these simple steps to begin your journey with us.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
                
                <div className="bg-card rounded-2xl p-6 shadow-card text-center h-full">
                  {/* Step Number */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center shadow-button">
                      {step.number.slice(-1)}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
