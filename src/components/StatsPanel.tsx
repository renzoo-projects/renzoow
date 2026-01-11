import { motion } from "framer-motion";
import { Sword, Shield, Zap, Brain, Code, Palette } from "lucide-react";

const stats = [
  { name: "Frontend", value: 95, icon: Code, color: "primary" },
  { name: "Backend", value: 88, icon: Zap, color: "secondary" },
  { name: "Design", value: 92, icon: Palette, color: "primary" },
  { name: "Problem Solving", value: 90, icon: Brain, color: "secondary" },
  { name: "Leadership", value: 85, icon: Sword, color: "primary" },
  { name: "Resilience", value: 98, icon: Shield, color: "secondary" },
];

const StatsPanel = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]"
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
            className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            System Analysis
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">STATUS</span>{" "}
            <span className="text-foreground">WINDOW</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Current ability parameters and skill levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-strong rounded-xl p-6 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`p-4 rounded-xl ${
                  stat.color === "primary" 
                    ? "bg-primary/15 group-hover:bg-primary/25" 
                    : "bg-secondary/15 group-hover:bg-secondary/25"
                } transition-colors duration-300`}>
                  <stat.icon className={`w-6 h-6 ${
                    stat.color === "primary" ? "text-primary" : "text-secondary"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-semibold uppercase tracking-wider text-sm">
                      {stat.name}
                    </span>
                    <span className={`text-3xl font-bold font-['Orbitron'] ${
                      stat.color === "primary" 
                        ? "text-primary text-glow" 
                        : "text-secondary text-glow-blue"
                    }`}>
                      {stat.value}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full relative overflow-hidden ${
                    stat.color === "primary" 
                      ? "bg-gradient-to-r from-primary/80 to-primary" 
                      : "bg-gradient-to-r from-secondary/80 to-secondary"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Power Level */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block relative">
            <div className="glass-strong rounded-2xl p-10 relative overflow-hidden">
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-40 rounded-full border border-primary/20 animate-pulse" />
                <div className="absolute w-32 h-32 rounded-full border border-primary/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="absolute w-24 h-24 rounded-full border border-primary/40 animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
              
              <div className="relative z-10">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Total Power Level
                </div>
                <div className="text-5xl md:text-7xl font-black font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-pulse-glow">
                  S-RANK
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsPanel;
