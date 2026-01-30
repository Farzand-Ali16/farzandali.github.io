import { BarChart3, Database, FileSpreadsheet, PieChart, Server, TrendingUp, Zap } from "lucide-react";

const skills = [
  {
    name: "Power BI Dashboard Development",
    icon: BarChart3,
    description: "Creating interactive and insightful dashboards",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    name: "Data Analytics",
    icon: TrendingUp,
    description: "Analyzing complex datasets to extract insights",
    color: "from-green-500/20 to-green-500/5"
  },
  {
    name: "Data Visualization",
    icon: PieChart,
    description: "Designing clear and compelling visual reports",
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    name: "Microsoft Excel",
    icon: FileSpreadsheet,
    description: "Advanced formulas, pivot tables, and analysis",
    color: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    name: "Database Management",
    icon: Database,
    description: "SQL queries and database optimization",
    color: "from-orange-500/20 to-orange-500/5"
  },
  {
    name: "Business Intelligence",
    icon: Server,
    description: "Transforming data into business value",
    color: "from-primary/20 to-accent/5"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full text-primary mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
