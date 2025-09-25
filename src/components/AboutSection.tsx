import { Code, Database, Globe, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Java, SQL, DSA'
    },
    {
      icon: Globe,
      title: 'Web Development', 
      description: 'MERN Stack'
    },
    {
      icon: Database,
      title: 'Database',
      description: 'MySQL, MongoDB'
    },
    {
      icon: Cpu,
      title: 'Problem Solving',
      description: 'Algorithms & Logic'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full filter blur-xl opacity-30 animate-pulse-glow"></div>
              <img
                src={profilePhoto}
                alt="Jayhind Pal"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/20 hover-lift"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl animate-bounce">
                👋
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Passionate Developer & Problem Solver
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated Information Technology student at Bansal Institute of Science 
                  and Technology, Bhopal, with a strong passion for software development and 
                  creating innovative solutions.
                </p>
                <p>
                  My journey in technology has been driven by curiosity and a desire to solve 
                  real-world problems through code. I specialize in full-stack development 
                  using the MERN stack and have a solid foundation in Java programming.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, participating 
                  in hackathons, or contributing to open-source projects. I believe in continuous 
                  learning and staying updated with the latest industry trends.
                </p>
              </div>
            </div>

            {/* Career Objective */}
            <div className="bg-card p-6 rounded-lg border border-border hover-glow">
              <h4 className="text-lg font-semibold text-primary mb-3">Career Objective</h4>
              <p className="text-muted-foreground">
                Seeking a position in a reputed and dynamic company where I can utilise my skills 
                for the benefit of the organisation while also having the opportunity to develop my abilities.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="card-glow hover-lift group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;