import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

const StatsPanel = () => {
  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-normal text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsPanel;
