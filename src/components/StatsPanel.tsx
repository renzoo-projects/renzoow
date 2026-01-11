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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">STATUS</span>{" "}
            <span className="text-foreground">WINDOW</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Current ability parameters and skill levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gradient-border rounded-sm p-6 bg-card/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-sm ${stat.color === "primary" ? "bg-primary/20" : "bg-secondary/20"}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color === "primary" ? "text-primary" : "text-secondary"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-semibold uppercase tracking-wider">
                      {stat.name}
                    </span>
                    <span className={`text-2xl font-bold font-['Orbitron'] ${stat.color === "primary" ? "text-primary text-glow" : "text-secondary text-glow-blue"}`}>
                      {stat.value}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full ${stat.color === "primary" ? "bg-gradient-to-r from-primary to-primary/50" : "bg-gradient-to-r from-secondary to-secondary/50"}`}
                  style={{
                    boxShadow: stat.color === "primary" 
                      ? "0 0 10px hsl(var(--primary))" 
                      : "0 0 10px hsl(var(--secondary))"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Power Level */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block gradient-border rounded-sm p-8 bg-card/50 backdrop-blur-sm">
            <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Total Power Level
            </div>
            <div className="text-5xl md:text-6xl font-black font-['Orbitron'] text-primary text-glow animate-pulse-glow">
              S-RANK
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsPanel;
