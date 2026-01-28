import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/Domus.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Home Nursing Care", href: "/services" },
  { name: "Elderly Care", href: "/services" },
  { name: "Patient Attendant", href: "/services" },
  { name: "Post-Surgery Care", href: "/services" },
  { name: "Physiotherapy", href: "/services" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background pt-20 pb-10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-4">
        {/* Top Section */}
        <div className="grid gap-14 lg:grid-cols-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img src={logo} alt="Domus Cure" className="h-11 mb-4" />

            <p className="text-background/70 text-sm leading-relaxed max-w-sm mb-6">
              Compassion-driven home healthcare designed to support recovery,
              dignity, and comfort — right where patients feel safest.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-background/10 
                         flex items-center justify-center
                         hover:bg-secondary hover:text-secondary-foreground
                         transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-background/50 mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="hover:text-secondary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-background/50 mb-5">
              Services
            </h4>
            <ul className="grid grid-cols-1 gap-3 text-sm">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="hover:text-secondary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-3">
            <div className="bg-background/5 border border-background/10 rounded-2xl p-6">
              <h4 className="text-sm font-semibold mb-4">Get in Touch</h4>

              <div className="space-y-4 text-sm text-background/70">
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p>+91 92047 30464</p>
                    <p>+91 62016 37225</p>
                    <p>+91 91612 40573</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-secondary mt-0.5" />
                  <p>info@domuscure.in</p>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1" />
                  <p className="leading-relaxed">Patna · Noida · Ranchi</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center
                       w-full rounded-xl bg-secondary text-secondary-foreground
                       py-2.5 text-sm font-medium hover:opacity-90 transition"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mb-12">
          <div className="bg-background/5 border border-background/10 rounded-2xl p-6">
            <h4 className="text-sm font-semibold mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              Our Offices
            </h4>

            <div className="grid gap-6 md:grid-cols-3 text-sm text-background/70">
              {/* Patna */}
              <div>
                <p className="font-medium text-background mb-1">
                  Patna (Head Office)
                </p>
                <p className="leading-relaxed">
                  Nav Vihar Colony, 56 ka Dagar,
                  <br />
                  Near Nariyani Gas Godown,
                  <br />
                  Patna – 800008
                </p>
              </div>

              {/* Noida */}
              <div>
                <p className="font-medium text-background mb-1">Noida</p>
                <p className="leading-relaxed">
                  Kailash Hospital, Sector 71,
                  <br />
                  Mamura, Gautam Budh Nagar,
                  <br />
                  Uttar Pradesh – 201309
                </p>
              </div>

              {/* Ranchi */}
              <div>
                <p className="font-medium text-background mb-1">Ranchi</p>
                <p className="leading-relaxed">
                  H-238, RIIMS Rd,
                  <br />
                  Indraprasth Colony, Tunkitoli,
                  <br />
                  Jharkhand – 834009
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-background/10 pt-6">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Domus Cure. All rights reserved.
          </p>

          <a
            href="https://filliptechnologies.com/"
            target="_blank"
            className="text-xs text-background/50 hover:text-background transition"
          >
            Design and Developed by Fillip Technologies
          </a>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full
               bg-secondary text-secondary-foreground shadow-xl
               flex items-center justify-center z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};
