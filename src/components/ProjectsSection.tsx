import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import PondStatImage from "@/assets/images/PondStat.png";
import LaundryManagementSystem from "@/assets/images/LaundryManagementSystem.png";
import PathfindingVisualizer from "@/assets/images/PathfindingVisualizer.png";
import FlappyJoyride from "@/assets/images/FlappyJoyride.png";

const projects = [
  {
    title: "Laundry Management System",
    description: "A comprehensive system for managing laundry services, including order tracking and customer management.",
    tags: ["HTML", "JavaScript", "CSS", "PHP", "MySQL"],
    image: LaundryManagementSystem,
    repo: "https://github.com/renzoupv/Laundry-Management-System",
  },
  {
    title: "PondStat",
    description: "A statistics dashboard for monitoring pond water quality data in real-time, built for UP Visayas fisheries students.",
    tags: ["Flutter", "Dart", "Firebase"],
    image: PondStatImage,
    repo: "https://github.com/PondStat/PondStat-Mobile-App",
  },
  {
    title: "Pathfinding Visualizer",
    description: "Interactive visualization tool for pathfinding algorithms like A*, Dijkstra, BFS, and DFS.",
    tags: ["WASM", "C", "HTML", "JavaScript", "CSS"],
    image: PathfindingVisualizer,
    repo: "https://github.com/renzoupv/Pathfinding-Visualizer",
  },
  {
    title: "Flappy Joyride",
    description: "Flappy Joyride is a fast-paced survival game that builds on the classic flap-and-dodge mechanic with increasing difficulty and new threats. Players must avoid homing missiles and unpredictably oriented pipes while adapting to faster speeds and escalating hazard spawns.",
    tags: ["Godot", "GDScript"],
    image: FlappyJoyride,
    repo: "https://github.com/renzoupv/Yet-Another-Flappy-Bird-Clone",
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
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-background/95 border border-border text-foreground shadow-lg flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </div>
                </a>
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
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent shrink-0 mt-1 transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
