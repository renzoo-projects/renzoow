import { motion } from "framer-motion";
import { Github, Linkedin, Send, Facebook, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/orgs/renzoo-projects/repositories" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/renz-rendel-de-arroz-3026113a1/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/renzo.dearroz" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/renzdearroz" }
];

const LoadingDots = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
      <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
    </div>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    subject: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<{
    name?: string;
    subject?: string;
    email?: string;
    message?: string;
  }>({});

  const [submitMessage, setSubmitMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Status Control
  const status: "available" | "busy" | "unavailable" = "available";

  const statusConfig = {
    available: {
      text: "Currently available for new projects",
      color: "bg-emerald-500",
      shadow: "shadow-emerald-500/50",
    },
    busy: {
      text: "Currently busy with projects",
      color: "bg-yellow-500",
      shadow: "shadow-yellow-500/50",
    },
    unavailable: {
      text: "Not accepting new projects",
      color: "bg-red-500",
      shadow: "shadow-red-500/50",
    },
  };

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage("");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const validateForm = () => {
    const nextErrors: typeof errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formState.name.trim()) nextErrors.name = "Name is required.";
    if (!formState.subject.trim()) nextErrors.subject = "Subject is required.";

    if (!formState.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailRegex.test(formState.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formState.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSending(true);
    setSubmitMessage("");

    const templateParams = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      subject: formState.subject.trim(),
      message: formState.message.trim(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setTimeout(() => {
          setSubmitMessage("Message sent successfully!");
          setFormState({ name: "", subject: "", email: "", message: "" });
          setErrors({});
        }, 600);
      })
      .catch(() => {
        setSubmitMessage("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-normal mb-6">
              Let's <span className="italic text-accent">Talk</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>

            <div className="flex gap-4 mb-10">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* STATUS */}
            <div className="flex items-center gap-3">
              <div
                className={`w-2.5 h-2.5 rounded-full animate-pulse shadow-lg ${
                  statusConfig[status].color
                } ${statusConfig[status].shadow}`}
              />
              <span className="text-sm text-muted-foreground">
                {statusConfig[status].text}
              </span>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {[
              { label: "Name", key: "name" as const, type: "text", placeholder: "Your name" },
              { label: "Email", key: "email" as const, type: "email", placeholder: "your@email.com" },
              { label: "Subject", key: "subject" as const, type: "text", placeholder: "Subject" }
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm text-muted-foreground mb-2">
                  {field.label}
                </label>

                <input
                  type={field.type}
                  value={formState[field.key]}
                  onChange={(e) =>
                    setFormState({ ...formState, [field.key]: e.target.value })
                  }
                  className={`w-full px-4 py-3 bg-background border rounded-xl outline-none text-foreground placeholder:text-muted-foreground/50 ${
                    errors[field.key] ? "border-red-500" : "border-border"
                  }`}
                  placeholder={field.placeholder}
                />

                {errors[field.key] && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors[field.key]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Message
              </label>

              <textarea
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className={`w-full px-4 py-3 bg-background border rounded-xl outline-none text-foreground resize-none placeholder:text-muted-foreground/50 ${
                  errors.message ? "border-red-500" : "border-border"
                }`}
                placeholder="Tell me about your project..."
              />

              {errors.message && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full px-8 py-3.5 bg-primary text-primary-foreground rounded-full flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSending ? (
                <>
                  <LoadingDots />
                  <span className="ml-2">Sending</span>
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {submitMessage && (
              <div className="mt-3 text-sm text-emerald-500 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                {submitMessage}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;