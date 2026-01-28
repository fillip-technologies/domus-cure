import { motion } from "framer-motion";
import {
  Stethoscope,
  ArrowRight,
  Ambulance,
  UserCheck,
  TestTube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Stethoscope,
    title: "Home Nursing Services",
    description:
      "Professional nursing services including wound care, medication management, and health monitoring.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Ambulance,
    title: "Ambulance Services",
    description:
      "Reliable ambulance services for emergency & non-emergency patient transportation with medical support.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: UserCheck,
    title: "OPD Consultation Support",
    description:
      "Hassle-free OPD and doctor consultation support to help patients access the right medical care on time.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TestTube,
    title: "Lab Test Services",
    description:
      "Convenient home-based diagnostic and lab test services with accurate and timely medical reports.",
    color: "bg-secondary/10 text-secondary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const ServicesHighlights = () => {
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Healthcare Services at{" "}
            <span className="text-primary">Your Doorstep</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide comprehensive home healthcare services tailored to meet
            your unique needs with compassion and professionalism.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <Link to="/services">
                <Button
                  variant="ghost"
                  className="gap-2 p-0 h-auto text-primary hover:bg-transparent hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="default" size="lg" className="gap-2">
              View All Services <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
