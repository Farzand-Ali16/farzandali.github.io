import { Briefcase, Calendar, CheckCircle2, Target } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full text-primary mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Work History</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </div>
        
        <div className="animate-fade-in-up">
          <div className="group relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                <Briefcase className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Freelance Data Analyst
                </h3>
                <p className="text-lg md:text-xl text-primary font-bold mb-4">
                  Self-Employed
                </p>
                <div className="inline-flex items-center gap-2 bg-background/50 px-4 py-2 rounded-lg mb-6">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground font-medium">2024 - Present</span>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/30 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">
                      Worked on multiple <span className="text-foreground font-semibold">Power BI dashboards</span> and data analysis projects
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/30 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">
                      Skilled in developing clean, <span className="text-foreground font-semibold">data-driven visual reports</span> and analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/30 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">
                      Transformed complex datasets into <span className="text-foreground font-semibold">actionable business insights</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/30 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">
                      Collaborated with clients to understand requirements and deliver <span className="text-foreground font-semibold">tailored solutions</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
