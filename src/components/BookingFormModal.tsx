import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  Mail,
  User,
  MessageSquare,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingFormModal = ({
  isOpen,
  onClose,
}: BookingFormModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Basic validation
  //   if (!formData.name.trim() || !formData.phone.trim()) {
  //     toast({
  //       title: "Please fill required fields",
  //       description: "Name and phone number are required.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   await new Promise((resolve) => setTimeout(resolve, 1500));

  //   setIsSubmitting(false);
  //   setIsSuccess(true);

  //   // Reset after showing success
  //   setTimeout(() => {
  //     setIsSuccess(false);
  //     setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  //     onClose();
  //     toast({
  //       title: "Booking Request Sent!",
  //       description: "Our team will contact you within 24 hours.",
  //     });
  //   }, 2000);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_hoiq24z",
        "template_p5y1f45",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service || "Not specified",
          message: formData.message || "No additional message",
        },
        {
          publicKey: "dzSU9JsYL00gK9nSc",
          limitRate: {
            throttle: 10000, // anti-spam (10s)
          },
        },
      );

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
        onClose();

        toast({
          title: "Booking Request Sent!",
          description: "Our team will contact you within 24 hours.",
        });
      }, 2000);
    } catch (error) {
      console.error("EmailJS error:", error);

      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Centering wrapper */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              // Prevent click-through so backdrop click-to-close still works.
              onClick={(e) => e.stopPropagation()}
              className="w-full md:w-1/2 bg-card rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-display text-2xl font-bold">
                      Book a Consultation
                    </h2>
                    <p className="text-primary-foreground/80 text-sm mt-1">
                      We'll contact you within 24 hours
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="p-6">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you! We'll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="bg-background"
                        maxLength={100}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4 text-primary" />
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="bg-background"
                        maxLength={15}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-background"
                        maxLength={255}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="flex items-center gap-2"
                      >
                        <Calendar className="w-4 h-4 text-primary" />
                        Service Required
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="elderly-care">Elderly Care</option>
                        <option value="nursing-care">Nursing Care</option>
                        <option value="physiotherapy">Physiotherapy</option>
                        <option value="post-surgery">Post-Surgery Care</option>
                        <option value="medical-equipment">
                          Medical Equipment
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Additional Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your care requirements..."
                        className="bg-background min-h-[80px]"
                        maxLength={1000}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          Submitting...
                        </span>
                      ) : (
                        "Submit Booking Request"
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      By submitting, you agree to be contacted by our care
                      coordinators
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
