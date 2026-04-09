import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/orgs/renzoo-projects/repositories" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/renz-rendel-de-arroz-3026113a1/" },
  { icon: Mail, label: "Email", href: "mailto:renzdearroz@gmail.com" },
];

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left side */}
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

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-sm text-muted-foreground">
                Currently available for new projects
              </span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { label: "Name", type: "text", key: "name" as const, placeholder: "Your name" },
              { label: "Email", type: "email", key: "email" as const, placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm text-muted-foreground mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={formState[field.key]}
                  onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Message</label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all outline-none text-foreground resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
