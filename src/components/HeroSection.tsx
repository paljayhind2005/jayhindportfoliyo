import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Aspiring Software Developer',
    'MERN Stack Developer', 
    'Java Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-primary-glow/10 rounded-full filter blur-xl animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-primary text-glow">Jayhind Pal</span>
          </h1>
          
          <div className="h-20 flex items-center justify-center mb-8">
            <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Information Technology student passionate about creating innovative solutions 
            and building exceptional web applications with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-semibold hover-lift group"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold hover-glow border-primary/50 hover:border-primary"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <Button
              variant="ghost"
              size="lg"
              className="hover-lift hover:text-primary group"
              onClick={() => window.open('https://github.com/paljayhind2005', '_blank')}
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="lg" 
              className="hover-lift hover:text-primary group"
              onClick={() => window.open('https://www.linkedin.com/in/jayhind-pal/', '_blank')}
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="hover-lift hover:text-primary group"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;