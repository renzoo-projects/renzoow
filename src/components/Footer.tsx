import { motion } from "framer-motion";
import { Zap, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-radial-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold font-['Orbitron']">
              <span className="text-primary">SL</span>
              <span className="text-foreground">.</span>
              <span className="text-foreground">DEV</span>
            </span>
          </motion.div>
          
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            <span>© 2024 Shadow Monarch Developer.</span>
            <span className="hidden sm:inline">Made with</span>
            <Heart className="w-4 h-4 text-primary hidden sm:inline" />
          </motion.p>
          
          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 glass px-4 py-2 rounded-full"
          >
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Status: <span className="text-primary font-bold font-['Orbitron']">ACTIVE</span>
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
