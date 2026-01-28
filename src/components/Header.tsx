import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { PHONE_NUMBER } from "@/const/contact";
import logo from "@/assets/Domus.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // console.log(PHONE_NUMBER)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* <Link to="/">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  D
                </span>
              </div>
              <span className="text-2xl font-bold text-foreground">
                Domus
                <span
                  className={` ${isScrolled ? "text-primary" : "text-white"}`}
                >
                  Cure
                </span>
              </span>
            </motion.div>
          </Link> */}

          <Link to="/">
            <img src={logo} alt="Domus Cure Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors relative group ${
                    isScrolled
                      ? isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                      : "text-white hover:text-white"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      isScrolled ? "bg-primary" : "bg-white"
                    } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>

            {/* Call */}
            <a href={`tel:+${PHONE_NUMBER}`}>
              <Button variant="hero" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium py-3 transition-colors ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <a
                  href={`https://wa.me/${PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" className="gap-2 w-full">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
                <a href={`tel:+${PHONE_NUMBER}`}>
                  <Button variant="hero" className="gap-2 w-full">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
