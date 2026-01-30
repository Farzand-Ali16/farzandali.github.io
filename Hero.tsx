import { ArrowRight, Sparkles, Database, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Available for Projects</span>
          </div>
          
          {/* Main heading with gradient */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Farzand Ali</span>
              <span className="block text-gradient mt-2">Data Developer</span>
            </h1>
          </div>
          
          {/* Subtitle with icon */}
          <div className="flex items-center gap-3 text-xl md:text-2xl text-muted-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <span>Power BI & Data Analytics Specialist</span>
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Transforming complex data into actionable insights through interactive dashboards. 
            Creating visual stories that empower businesses to make data-driven decisions.
          </p>
          
          {/* Tech badges */}
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg text-sm font-medium flex items-center gap-2">
              <Database className="w-4 h-4 text-primary" />
              Power BI
            </div>
            <div className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg text-sm font-medium flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              Data Analytics
            </div>
            <div className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg text-sm font-medium">
              Excel Expert
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105"
            >
              View Projects 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-card hover:border-primary/50 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative group">
            {/* Glow effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20" />
            
            {/* Image container with animated border */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/40 group-hover:border-primary/60 transition-all group-hover:scale-105 duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <img 
                src="https://i.postimg.cc/BQGYxjLD/photo.jpg" 
                alt="Farzand Ali"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card backdrop-blur-md border-2 border-primary/30 px-6 py-3 rounded-2xl shadow-xl animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-sm">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
