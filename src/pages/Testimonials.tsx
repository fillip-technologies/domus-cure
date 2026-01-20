import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Son of Patient",
    content:
      "The care provided by Domus Cure for my mother was exceptional. The nurses were professional, compassionate, and treated her like family. I highly recommend their services to anyone looking for quality home healthcare.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Daughter of Elderly Patient",
    content:
      "Finding reliable elderly care was stressful until we found Domus Cure. Their attendants are well-trained and genuinely caring. My father is happier than ever and we have complete peace of mind.",
    rating: 5,
  },
  {
    name: "Amit Gupta",
    role: "Post-Surgery Patient",
    content:
      "After my knee surgery, the physiotherapy sessions at home helped me recover faster than expected. The team was punctual, skilled, and very supportive throughout my recovery journey.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    role: "Family Member",
    content:
      "We needed 24/7 care for my grandmother and Domus Cure provided exactly that. The caregivers are not just skilled but also very patient and understanding with elderly patients.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Patient",
    content:
      "I was bedridden after an accident and needed nursing care at home. The nurses from Domus Cure were professional, maintained proper hygiene, and helped me recover comfortably at home.",
    rating: 5,
  },
  {
    name: "Meena Kumari",
    role: "Daughter of Patient",
    content:
      "The post-surgery care for my father was outstanding. The team coordinated well with the hospital doctors and ensured smooth recovery. Highly professional service at affordable rates.",
    rating: 5,
  },
];

const Testimonials = () => {
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
                Testimonials
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Hear what families say about their experience with Domus Cure
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 relative"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6">
                    <Quote className="w-10 h-10 text-primary/10" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/80 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Trusted by <span className="text-primary">1000+</span> Families
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join the growing community of families who have experienced the
                Domus Cure difference. Your loved ones deserve the best care.
              </p>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
