import { ExternalLink, Github, Code, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import educationWebsite from '@/assets/education-website.jpg';
import quizApp from '@/assets/quiz-app.jpg';
import habiticaApp from '@/assets/habitica-app.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Education Website',
      description: 'A responsive and user-friendly education platform providing access to online courses, notes, and learning materials with modern animations.',
      image: educationWebsite,
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Shery.js'],
      features: [
        'Responsive design for all devices',
        'Interactive animations with GSAP',
        'Course catalog and materials',
        'Modern UI/UX design'
      ],
      githubUrl: 'https://github.com/jayhindpal/education-website',
      liveUrl: 'https://education-demo.netlify.app',
      category: 'Web Development'
    },
    {
      title: 'Quiz Application',
      description: 'Advanced React-based quiz platform with category-wise questions, timer functionality, proctoring features, and comprehensive admin panel.',
      image: quizApp,
      technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        'Category-wise quiz system',
        'Timer with auto-submit functionality',
        'Webcam-based proctoring',
        'Admin panel for question management',
        'Leaderboard and result analytics'
      ],
      githubUrl: 'https://github.com/jayhindpal/quiz-application',
      liveUrl: 'https://quiz-app-demo.netlify.app',
      category: 'Full Stack'
    },
    {
      title: 'Habitica - Daily Routine',
      description: 'Comprehensive habit tracking and task management web application with gamification elements, progress monitoring, and community challenges.',
      image: habiticaApp,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      features: [
        'Daily habit tracking system',
        'Exercise video uploads',
        'Progress monitoring & analytics',
        'Community challenges',
        'Reward system & achievements'
      ],
      githubUrl: 'https://github.com/jayhindpal/habitica-routine',
      liveUrl: 'https://habitica-demo.netlify.app',
      category: 'Full Stack'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of my latest work and development projects using modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card key={index} className={`card-glow hover-lift group overflow-hidden ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="lg:flex">
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden h-64 lg:h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background/90 backdrop-blur-sm"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background/90 backdrop-blur-sm"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className="lg:w-1/2 p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium">
                          {project.category}
                        </span>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                            className="hover:text-primary"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            className="hover:text-primary"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                        <Zap className="h-5 w-5 text-primary mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                        <Code className="h-5 w-5 text-primary mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button
                        className="flex-1 bg-primary hover:bg-primary-glow"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Project
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-primary/50 hover:border-primary"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10"
            onClick={() => window.open('https://github.com/jayhindpal', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;