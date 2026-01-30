import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full text-primary mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </div>
        
        <div className="animate-fade-in-up">
          <div className="group relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-lg md:text-xl text-primary font-semibold mb-3">
                  Quaid-e-Awam University of Engineering, Science & Technology (QUEST)
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground bg-background/50 px-4 py-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Nawabshah, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-background/50 px-4 py-2 rounded-lg">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Graduating in 2028</span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Focused on <span className="text-foreground font-semibold">analytics</span>, <span className="text-foreground font-semibold">programming</span>, and <span className="text-foreground font-semibold">visualization skills</span>. Developing expertise in 
                  data-driven decision making and business intelligence tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
