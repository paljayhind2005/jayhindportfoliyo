import { useState } from 'react';
import { Code, Globe, Database, Settings, Monitor, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = {
    programming: {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Java', level: 85, description: 'Object-oriented programming, Spring Boot' },
        { name: 'SQL', level: 80, description: 'Database queries, MySQL, MongoDB' },
        { name: 'JavaScript', level: 90, description: 'ES6+, Async/Await, DOM manipulation' },
        { name: 'TypeScript', level: 75, description: 'Type-safe JavaScript development' }
      ]
    },
    web: {
      title: 'Web Technologies',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 88, description: 'Hooks, Context API, State management' },
        { name: 'Node.js', level: 82, description: 'Express.js, RESTful APIs, Authentication' },
        { name: 'HTML/CSS', level: 92, description: 'Responsive design, Flexbox, Grid' },
        { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS framework' }
      ]
    },
    database: {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 80, description: 'NoSQL database, Mongoose ODM' },
        { name: 'MySQL', level: 75, description: 'Relational database, Complex queries' },
        { name: 'Git/GitHub', level: 88, description: 'Version control, Collaboration' },
        { name: 'VS Code', level: 90, description: 'IDE, Extensions, Debugging' }
      ]
    },
    systems: {
      title: 'Operating Systems',
      icon: Monitor,
      skills: [
        { name: 'Windows', level: 90, description: 'System administration, PowerShell' },
        { name: 'Linux', level: 70, description: 'Command line, Shell scripting' },
        { name: 'Android', level: 75, description: 'Mobile development, APK management' }
      ]
    }
  };

  const categories = [
    { key: 'programming', label: 'Programming', icon: Code },
    { key: 'web', label: 'Web Dev', icon: Globe },
    { key: 'database', label: 'Database', icon: Database },
    { key: 'systems', label: 'Systems', icon: Monitor }
  ];

  const currentCategory = skillCategories[activeCategory as keyof typeof skillCategories];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical expertise across various domains of software development
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'hover:bg-primary/10 hover:border-primary'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">{currentCategory.title}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill, index) => (
              <Card key={index} className="card-glow hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-3 mb-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GSAP', 'Shery.js', 'Redux', 'Express.js', 'REST APIs', 'JSON', 'Postman',
              'Firebase', 'JWT', 'bcrypt', 'Mongoose', 'npm', 'webpack', 'Babel'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-card border border-border px-4 py-2 rounded-full text-sm hover:bg-primary/10 hover:border-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;