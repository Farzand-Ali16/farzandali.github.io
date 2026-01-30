import { Globe, Languages, Sparkle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full text-primary mb-4">
            <Sparkle className="w-4 h-4" />
            <span className="text-sm font-medium">Get to Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8 animate-fade-in-up">
          <div className="group relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                I am a <span className="text-primary font-semibold">Computer Science student</span> with expertise in Power BI, Excel, and data visualization. 
                I create <span className="text-primary font-semibold">interactive dashboards</span> and insightful reports that help businesses make <span className="text-primary font-semibold">better decisions</span>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group/item flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    <Languages className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Languages</h3>
                    <p className="text-muted-foreground">Urdu, English</p>
                  </div>
                </div>
                
                <div className="group/item flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Interests</h3>
                    <p className="text-muted-foreground">Data Analytics, Visualization, Continuous Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
