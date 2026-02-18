import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const RANKS = ["E", "D", "C", "B", "A", "S"] as const;
type Rank = (typeof RANKS)[number];

// Set your current rank here
const CURRENT_RANK: Rank = "A";

const rankStyles: Record<Rank, { label: string; ring: string; text: string; glow: string }> = {
  E: { label: "Unranked", ring: "border-muted-foreground/30", text: "text-muted-foreground", glow: "" },
  D: { label: "Novice", ring: "border-secondary/30", text: "text-secondary", glow: "text-glow-blue" },
  C: { label: "Rising", ring: "border-primary/30", text: "text-primary", glow: "text-glow" },
  B: { label: "Skilled", ring: "border-primary/40", text: "text-primary", glow: "text-glow-gold" },
  A: { label: "Elite", ring: "border-secondary/40", text: "text-secondary", glow: "text-glow-blue" },
  S: { label: "Legend", ring: "border-primary/60", text: "text-primary", glow: "text-glow " },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="absolute inset-0 bg-radial-glow" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            x: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]"
        />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 2 === 0 
                ? "hsl(var(--primary))" 
                : "hsl(var(--secondary))",
            }}
            animate={{
              y: [0, -150 - Math.random() * 100, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] border border-primary/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[30%] -left-[15%] w-[800px] h-[800px] border border-secondary/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          {/* Level Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-10"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">Hunter Rank: </span>
            <span className={`text-2xl font-bold ${rankStyles[CURRENT_RANK].text} ${rankStyles[CURRENT_RANK].glow} font-['Orbitron']`}>{CURRENT_RANK}</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="block relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-pulse-glow">
                  Renz Rendel De Arroz
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            <span className="text-foreground/80">Full-Stack Developer</span>
            <span className="mx-3 text-primary">•</span>
            <span className="text-foreground/80">UI/UX Designer</span>
            <span className="mx-3 text-secondary">•</span>
            <span className="text-foreground/80">Digital Architect</span>
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mb-14"
          >
            {[
              { label: "Projects", value: "15+", color: "primary" },
              { label: "Experience", value: "3 YRS", color: "secondary" },
              { label: "Skills", value: "10+", color: "primary" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center glass px-6 py-4 rounded-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={`text-3xl md:text-4xl font-bold font-['Orbitron'] ${
                  stat.color === "primary" 
                    ? "text-primary text-glow" 
                    : "text-secondary text-glow-blue"
                }`}>
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold uppercase tracking-wider rounded-lg overflow-hidden"
            >
             <a href="#projects"><span className="relative z-10">Summon Projects</span></a>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 box-glow rounded-lg" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 glass text-foreground font-bold uppercase tracking-wider rounded-lg hover:bg-primary/10 transition-all duration-300 border border-primary/30"
            >
             <a href="#skills">View Skills</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-muted-foreground/60"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
