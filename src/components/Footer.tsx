import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-xl font-bold font-['Orbitron'] text-primary text-glow">
              SL<span className="text-foreground">.</span>DEV
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            © 2024 Shadow Monarch Developer. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="text-muted-foreground text-sm">Status:</span>
            <span className="text-primary text-glow text-sm font-bold font-['Orbitron']">ACTIVE</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
