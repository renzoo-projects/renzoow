import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/orgs/renzoo-projects/repositories", color: "hover:text-primary hover:border-primary/50", target: "_blank" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/renz-rendel-de-arroz-3026113a1/", color: "hover:text-secondary hover:border-secondary/50", target: "_blank" },
  { icon: Mail, label: "Email", href: "mailto:renzdearroz@gmail.com", color: "hover:text-secondary hover:border-secondary/50" },
];

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      
      {/* Floating orb */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-secondary mb-4"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">OPEN</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">GATE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Initiate communication through the shadow realm
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-5 py-4 glass rounded-xl focus:ring-2 focus:ring-primary/50 transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Email
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-5 py-4 glass rounded-xl focus:ring-2 focus:ring-primary/50 transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                className="w-full px-5 py-4 glass rounded-xl focus:ring-2 focus:ring-primary/50 transition-all outline-none text-foreground resize-none placeholder:text-muted-foreground/50"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full px-8 py-5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 box-glow rounded-xl" />
            </motion.button>
          </motion.form>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="glass-strong rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold text-foreground font-['Orbitron']">
                  Connect With Me
                </h3>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to collaborate on your next project? Whether you need a full-stack solution, 
                UI/UX design, or just want to discuss ideas, I'm here to help bring your vision to life.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`flex items-center gap-3 p-4 glass rounded-xl border border-border/50 transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 transition-colors" />
                    <span className="font-medium transition-colors">{social.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="mt-8 flex items-center gap-4 glass px-5 py-4 rounded-xl">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75" />
                </div>
                <div>
                  <span className="text-foreground font-medium">Currently available</span>
                  <span className="text-muted-foreground ml-2">for new quests</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
