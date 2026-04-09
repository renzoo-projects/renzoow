import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Laundry Management System",
    description: "A comprehensive system for managing laundry services, including order tracking and customer management.",
    tags: ["HTML", "JavaScript", "CSS", "PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Pathfinding Visualizer",
    description: "Interactive visualization tool for pathfinding algorithms like A*, Dijkstra, BFS, and DFS.",
    tags: ["WASM", "C", "HTML", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    title: "PondStat",
    description: "A statistics dashboard for monitoring pond water quality data in real-time, built for UP Visayas fisheries students.",
    tags: ["Flutter", "Dart", "Firebase"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    title: "Flappy Chaos",
    description: "A chaotic twist on Flappy Bird with unpredictable obstacles for an extra challenge.",
    tags: ["Godot", "GDScript"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
  },
  {
    title: "Fortnite Shop Discord Bot",
    description: "A Discord bot providing real-time Fortnite item shop updates and player stats.",
    tags: ["JavaScript", "Discord.js", "API"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            Selected <span className="italic text-accent">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A collection of projects that showcase my range and passion for building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground font-sans group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent shrink-0 mt-1 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
