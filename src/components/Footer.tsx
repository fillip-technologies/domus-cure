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
    <footer className="bg-foreground text-background pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            {/* <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  D
                </span>
              </div>
              <span className="text-xl font-bold">
                Domus<span className="text-secondary">Cure</span>
              </span>
            </Link> */}
            <Link to="/">
              <img src={logo} alt="Domus Cure Logo" className="h-10 w-auto -ml-3" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-5 mt-2">
              Professional home healthcare services bringing compassionate care
              to your loved ones, right at your doorstep.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Ground Floor, A/3, Kankarbagh Main Rd, Near Chandan Hero,
                  Patna, Bihar 800020
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  +91 9204730464
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  info@domuscure.in
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Domus Cure. All rights reserved.
            </p>
            <a href="https://filliptechnologies.com/" target="_blank">
              <p className="text-background/60 text-sm hover:underline underline-offset-2">
                Developed by Fillip Technologies Pvt. Ltd.
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full gradient-cta shadow-button flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-secondary-foreground" />
      </motion.button>
    </footer>
  );
};
