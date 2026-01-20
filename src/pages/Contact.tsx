import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PHONE_NUMBER } from "@/const/contact";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: [
        "Ground Floor, A/3, Kankarbagh Main Rd",
        "Near Chandan Hero, Patna, Bihar 800020",
      ],
    },
    {
      icon: Phone,
      title: "Call Us Anytime",
      details: ["+91 92047 30464"],
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["info@domuscure.in", "support@domuscure.in"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["24/7 Emergency Support", "Mon–Sat, 9AM–7PM"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* HERO */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
            >
              Contact DomusCure
            </motion.h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Reach us instantly via call, WhatsApp, or visit our office.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 space-y-16">
            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((d, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {d}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* CTA STRIP */}
            <div className="bg-primary rounded-2xl p-8 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/80 mt-1">
                  Our team is available 24/7 for urgent care support.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </a>

                <a href={`tel:+${PHONE_NUMBER}`}>
                  <Button variant="hero" className="gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            {/* MAP */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Find Us on Map
              </h3>
              <div className="bg-card rounded-xl overflow-hidden shadow-soft h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9898673012!2d85.1350!3d25.6093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzMzLjUiTiA4NcKwMDgnMDYuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Domus Cure Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
