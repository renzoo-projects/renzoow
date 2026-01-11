import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Shadow Realm",
    description: "A dark-themed e-commerce platform with real-time inventory and AI recommendations",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    rank: "S",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    title: "Monarch Dashboard",
    description: "Analytics dashboard with real-time data visualization and custom reporting",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    rank: "S",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Hunter's Guild",
    description: "Team collaboration platform with task management and communication tools",
    tags: ["React", "Firebase", "WebSocket"],
    rank: "A",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    title: "Gate System",
    description: "Authentication and authorization microservice with OAuth2 integration",
    tags: ["Node.js", "Redis", "Docker"],
    rank: "A",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
  },
];

const rankConfig: Record<string, { gradient: string; border: string; glow: string }> = {
  S: { 
    gradient: "from-primary to-purple-400",
    border: "border-primary/50",
    glow: "shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
  },
  A: { 
    gradient: "from-secondary to-cyan-300",
    border: "border-secondary/50",
    glow: "shadow-[0_0_30px_hsl(var(--secondary)/0.3)]"
  },
  B: { 
    gradient: "from-amber-400 to-orange-400",
    border: "border-amber-400/50",
    glow: "shadow-[0_0_30px_hsl(45_100%_50%/0.3)]"
  },
};

const ProjectsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
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
            className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            Featured Works
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SHADOW</span>{" "}
            <span className="text-foreground">ARMY</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Projects summoned from the depths of creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group glass-strong rounded-2xl overflow-hidden ${rankConfig[project.rank].glow} hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)] transition-all duration-500`}
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
                {/* Rank Badge */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`absolute top-4 right-4 w-14 h-14 rounded-xl border-2 flex items-center justify-center font-bold text-2xl font-['Orbitron'] bg-gradient-to-br ${rankConfig[project.rank].gradient} ${rankConfig[project.rank].border} text-white shadow-lg`}
                >
                  {project.rank}
                </motion.div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/40 backdrop-blur-sm">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-primary rounded-full text-primary-foreground shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 glass rounded-full text-foreground"
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-4 h-4 text-primary" />
                  <h3 className={`text-xl font-bold font-['Orbitron'] bg-gradient-to-r ${rankConfig[project.rank].gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </div>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs bg-muted/50 rounded-lg text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 glass text-foreground font-bold uppercase tracking-wider rounded-xl hover:bg-primary/10 transition-all duration-300 border border-primary/30 inline-flex items-center gap-3"
          >
            <span>Summon More Shadows</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
