import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsPanel from "@/components/StatsPanel";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="stats">
          <StatsPanel />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        {false && (
          <section id="testimonials">
            <TestimonialsSection />
          </section>
        )}
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
