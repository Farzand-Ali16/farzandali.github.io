import { Award, CheckCircle2, Medal, Sparkles } from "lucide-react";

const certifications = [
  {
    title: "Google Professional Data Analytics",
    issuer: "Google",
    year: "2025",
    description: "Comprehensive certification covering data analysis, visualization, and business intelligence.",
  },
  {
    title: "Database Administrator",
    issuer: "Sukkur IBA University",
    year: "2024",
    description: "Advanced database management and administration skills.",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full text-primary mb-4">
            <Medal className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors pr-2">
                      {cert.title}
                    </h3>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  <p className="text-primary font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {cert.issuer}
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4">
                    {cert.year}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
