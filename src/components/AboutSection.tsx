import { motion } from "framer-motion";
import { Target, Eye, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Main circle */}
              <div className="absolute inset-8 rounded-full gradient-hero opacity-10" />
              <div className="absolute inset-16 rounded-full bg-accent" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary-foreground">D</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Domus Cure</h3>
                  <p className="text-muted-foreground">Caring for Families</p>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-0 bg-card rounded-xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">5+ Years</p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-16 left-0 bg-card rounded-xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Patna & NCR</p>
                    <p className="text-xs text-muted-foreground">Service Areas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Bringing Healthcare{" "}
              <span className="text-primary">Home</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Domus Cure is a trusted home healthcare provider dedicated to delivering 
              compassionate and professional medical care right at your doorstep. We believe 
              that quality healthcare should be accessible, affordable, and personalized 
              for every family.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide exceptional home healthcare services that enhance the quality 
                    of life for patients while offering peace of mind to their families.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become the most trusted name in home healthcare, making professional 
                    medical care accessible to every household across India.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
