import { motion } from "framer-motion";
import { Zap, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-radial-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative flex flex-col md:flex-row items-center md:justify-end gap-6">
          
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 text-muted-foreground text-sm flex items-center gap-1"
          >
            <span>© 2024 Renz Rendel De Arroz. </span>
            <span className="hidden sm:inline">Made with</span>
            <Heart className="w-4 h-4 text-primary hidden sm:inline" />
          </motion.p>
          
          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-end justify-end gap-3 glass px-4 py-2 rounded-full"
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
