import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Heart,
  Users,
  Activity,
  Dumbbell,
  CheckCircle2,
  Plane,
  Ambulance,
  TestTube,
  UserCheck,
} from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    icon: Stethoscope,
    title: "Home Nursing Services",
    description:
      "Professional nursing care provided at home by certified and experienced nurses for medical and personal needs.",
    features: [
      "Patient Care at Home",
      "Critical Care Nursing",
      "Old Age Care",
      "GDA (General Duty Attendant) Services",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Plane,
    title: "Elder Tour & Assisted Travel",
    description:
      "Safe and well-planned travel assistance for senior citizens with complete caregiving support throughout the journey.",
    features: [
      "Assisted travel for senior citizens",
      "Caregiver support during tours",
      "Safety-focused elder travel planning",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Ambulance,
    title: "Ambulance Services",
    description:
      "Reliable ambulance services for both emergency and non-emergency patient transportation with medical support.",
    features: [
      "Basic Ambulance",
      "Non-emergency patient transfer",
      "Advanced Ambulance",
      "Emergency & critical support",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TestTube,
    title: "Lab Test Services",
    description:
      "Convenient home-based diagnostic and lab test services with accurate and timely medical reports.",
    features: [
      "Blood sample collection at home",
      "Diagnostic sample collection at home",
      "Timely and accurate reports",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: UserCheck,
    title: "OPD Consultation Support",
    description:
      "Hassle-free OPD and doctor consultation support to help patients access the right medical care on time.",
    features: [
      "Doctor appointment coordination",
      "Specialist consultation assistance",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Elderly Care at Home",
    description:
      "Compassionate and personalized elderly care services designed to ensure comfort, safety, and dignity at home.",
    features: [
      "Daily living assistance",
      "Companionship and emotional support",
      "Mobility assistance",
      "Meal preparation",
      "Personal hygiene care",
      "Safety monitoring",
    ],
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Users,
    title: "Patient Attendant",
    description:
      "Dedicated patient attendants offering round-the-clock support for hospital and home-based care needs.",
    features: [
      "24/7 patient monitoring",
      "Hospital stay support",
      "Home care assistance",
      "Feeding support",
      "Position changing",
      "Basic medical care",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Activity,
    title: "Post-Surgery Care",
    description:
      "Comprehensive post-operative care at home to ensure safe recovery and faster healing after surgery.",
    features: [
      "Surgical wound care",
      "Pain management support",
      "Mobility rehabilitation",
      "Medication administration",
      "Doctor coordination",
      "Progress monitoring",
    ],
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Dumbbell,
    title: "Physiotherapy at Home",
    description:
      "Expert physiotherapy services at home to improve mobility, strength, and overall physical well-being.",
    features: [
      "Orthopedic rehabilitation",
      "Neurological physiotherapy",
      "Post-stroke therapy",
      "Sports injury recovery",
      "Geriatric physiotherapy",
      "Pain management",
    ],
    color: "bg-primary/10 text-primary",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 gradient-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Our Services
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Comprehensive home healthcare solutions tailored to your needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}
                    >
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl bg-muted/50 overflow-hidden">
                        <div className="absolute inset-0 gradient-hero opacity-10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full gradient-hero flex items-center justify-center">
                            <service.icon className="w-16 h-16 text-primary-foreground" />
                          </div>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/50 -z-10" />
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-secondary/10 -z-10" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
