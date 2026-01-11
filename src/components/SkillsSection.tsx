import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "MASTER", category: "Frontend" },
  { name: "TypeScript", level: "MASTER", category: "Language" },
  { name: "Node.js", level: "ELITE", category: "Backend" },
  { name: "Python", level: "ELITE", category: "Language" },
  { name: "PostgreSQL", level: "ELITE", category: "Database" },
  { name: "AWS", level: "ADVANCED", category: "Cloud" },
  { name: "Docker", level: "ADVANCED", category: "DevOps" },
  { name: "Figma", level: "MASTER", category: "Design" },
  { name: "Next.js", level: "ELITE", category: "Framework" },
  { name: "GraphQL", level: "ADVANCED", category: "API" },
  { name: "Redis", level: "ADVANCED", category: "Database" },
  { name: "Tailwind", level: "MASTER", category: "Styling" },
];

const levelColors: Record<string, { bg: string; text: string; glow: string }> = {
  MASTER: { bg: "bg-primary/20", text: "text-primary", glow: "text-glow" },
  ELITE: { bg: "bg-secondary/20", text: "text-secondary", glow: "text-glow-blue" },
  ADVANCED: { bg: "bg-amber-500/20", text: "text-amber-400", glow: "" },
};

const SkillsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">ACQUIRED</span>{" "}
            <span className="text-primary text-glow">SKILLS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Arsenal of abilities unlocked through countless battles
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="gradient-border rounded-sm p-4 bg-card/80 backdrop-blur-sm cursor-pointer group"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {skill.category}
              </div>
              <div className="text-lg font-bold text-foreground mb-2 font-['Orbitron'] group-hover:text-primary transition-colors">
                {skill.name}
              </div>
              <div className={`inline-block px-2 py-1 rounded-sm text-xs font-bold ${levelColors[skill.level].bg} ${levelColors[skill.level].text} ${levelColors[skill.level].glow}`}>
                {skill.level}
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
          <div className="inline-block gradient-border rounded-sm px-6 py-3 bg-card/50 backdrop-blur-sm">
            <span className="text-primary text-glow font-bold mr-2">+3</span>
            <span className="text-muted-foreground">Skills currently being acquired...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
