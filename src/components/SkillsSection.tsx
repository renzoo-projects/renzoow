import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "MASTER", category: "Frontend" },
  { name: "TypeScript", level: "MASTER", category: "Language" },
  { name: "Node.js", level: "ELITE", category: "Backend" },
  { name: "Python", level: "ELITE", category: "Language" },
  { name: "Firebase", level: "ADVANCED", category: "Database" },
  { name: "AWS", level: "ADVANCED", category: "Cloud" },
  { name: "C", level: "ADVANCED", category: "DevOps" },
  { name: "Figma", level: "ELITE", category: "Design" },
  { name: "Next.js", level: "ELITE", category: "Framework" },
  { name: "RESTAPI", level: "ADVANCED", category: "API" },
  { name: "MongoDB", level: "ADVANCED", category: "Database" },
  { name: "Tailwind", level: "MASTER", category: "Styling" },
];

const levelConfig: Record<string, { gradient: string; glow: string; badge: string }> = {
  MASTER: { 
    gradient: "from-primary to-purple-400", 
    glow: "shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
    badge: "bg-primary/20 text-primary border-primary/30"
  },
  ELITE: { 
    gradient: "from-secondary to-cyan-300", 
    glow: "shadow-[0_0_20px_hsl(var(--secondary)/0.5)]",
    badge: "bg-secondary/20 text-secondary border-secondary/30"
  },
  ADVANCED: { 
    gradient: "from-amber-400 to-orange-400", 
    glow: "shadow-[0_0_20px_hsl(45_100%_50%/0.5)]",
    badge: "bg-amber-500/20 text-amber-400 border-amber-400/30"
  },
};

const SkillsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
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
            Skill Inventory
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">ACQUIRED</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SKILLS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Arsenal of abilities unlocked through countless battles
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`glass-strong rounded-xl p-5 cursor-pointer group relative overflow-hidden ${levelConfig[skill.level].glow} hover:${levelConfig[skill.level].glow}`}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${levelConfig[skill.level].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {skill.category}
                </div>
                <div className={`text-lg font-bold font-['Orbitron'] mb-3 bg-gradient-to-r ${levelConfig[skill.level].gradient} bg-clip-text text-transparent group-hover:opacity-100 transition-all`}>
                  {skill.name}
                </div>
                <div className={`inline-block px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wider border ${levelConfig[skill.level].badge}`}>
                  {skill.level}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill acquisition notification */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass px-6 py-4 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-glow font-bold font-['Orbitron']">+3</span>
            </div>
            <span className="text-muted-foreground text-sm">Skills currently being acquired...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
