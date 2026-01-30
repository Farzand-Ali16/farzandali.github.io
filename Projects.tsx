import { ExternalLink, Rocket, FolderKanban } from "lucide-react";

const projects = [
  {
    title: "Adidas Sales Dashboard",
    description: "Created an interactive Power BI dashboard to analyze Adidas sales data, showing key metrics like revenue trends, product performance, and regional insights. Features dynamic filters and drill-down capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["Power BI", "Data Analytics", "Sales Intelligence"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full text-primary mb-4">
            <FolderKanban className="w-4 h-4" />
            <span className="text-sm font-medium">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8 animate-fade-in-up">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="grid md:grid-cols-2 gap-0 relative">
                <div className="relative h-72 md:h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center relative z-10">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary rounded-xl text-sm font-semibold hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="relative bg-card/50 backdrop-blur-sm border-2 border-dashed border-border rounded-2xl p-12 text-center overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">More Projects Coming Soon</h3>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                I'm constantly working on new data analytics projects. Check back soon for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
