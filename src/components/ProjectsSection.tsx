import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

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

const rankColors: Record<string, string> = {
  S: "text-primary text-glow bg-primary/20 border-primary",
  A: "text-secondary text-glow-blue bg-secondary/20 border-secondary",
  B: "text-amber-400 bg-amber-400/20 border-amber-400",
};

const ProjectsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">SHADOW</span>{" "}
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
              className="group gradient-border rounded-sm overflow-hidden bg-card/50 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Rank Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-sm border-2 flex items-center justify-center font-bold text-xl font-['Orbitron'] ${rankColors[project.rank]}`}>
                  {project.rank}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-primary/90 rounded-full text-primary-foreground"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-card/90 rounded-full text-foreground border border-border"
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-primary" />
                  <h3 className="text-xl font-bold text-foreground font-['Orbitron'] group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted rounded-sm text-muted-foreground"
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
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 gradient-border bg-transparent text-foreground font-bold uppercase tracking-wider rounded-sm hover:bg-primary/10 transition-all duration-300"
          >
            Summon More Shadows
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
