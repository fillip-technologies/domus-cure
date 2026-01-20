import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { Users, Award, Heart, Target } from "lucide-react";
import { useEffect } from "react";

const stats = [
  { icon: Users, value: "1000+", label: "Families Served" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Heart, value: "50+", label: "Care Professionals" },
  { icon: Target, value: "98%", label: "Satisfaction Rate" },
];

const About = () => {
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
                About Us
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Learn more about our mission to bring compassionate healthcare
                to your home
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <AboutSection />

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Journey of <span className="text-primary">Compassion</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none text-muted-foreground"
              >
                <p className="text-lg leading-relaxed mb-6">
                  Domus Cure was founded with a simple yet powerful vision: to
                  make quality healthcare accessible to everyone in the comfort
                  of their homes. We understand that healing happens best in
                  familiar surroundings, surrounded by loved ones.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our team of certified healthcare professionals brings years of
                  experience in nursing, elderly care, physiotherapy, and
                  patient support. We carefully select and train each caregiver
                  to ensure they not only have the technical skills but also the
                  compassion and empathy that quality care demands.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we proudly serve families across Patna and the NCR
                  region, providing round-the-clock care that gives families
                  peace of mind. Our commitment to excellence and personalized
                  attention has made us the trusted choice for home healthcare.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
