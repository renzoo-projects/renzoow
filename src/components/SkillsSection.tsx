import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Flutter", "Blade"],
  },
  {
    title: "Backend",
    skills: ["MongoDB", "Firebase", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Other",
    skills: ["Figma", "Git", "Laravel", "MySQL"],
  },
  {
    title: "Creative",
    skills: ["UI/UX Design", "Godot", "GDScript", "Flutter", "Dart"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            Skills & <span className="italic text-accent">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A curated set of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-5 text-foreground font-sans">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm py-2 border-b border-border last:border-0 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
