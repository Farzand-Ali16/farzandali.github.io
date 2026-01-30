import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Experience />
      <Skills />
      <Projects />
      
      <footer className="bg-card border-t border-border py-8 text-center">
        <p className="text-muted-foreground">
          © 2025 Farzand Ali. Power BI & Data Analytics Developer.
        </p>
      </footer>
    </div>
  );
};

export default Index;
