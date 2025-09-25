import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Java Programming Certification',
      issuer: 'HackerRank',
      date: '2024',
      description: 'Comprehensive certification covering Java fundamentals, OOP concepts, and advanced programming techniques.',
      skills: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
      credentialUrl: 'https://hackerrank.com/certificates/java',
      verified: true,
      color: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
    },
    {
      title: 'Oracle Database Management Certificate',
      issuer: 'Oracle Corporation',
      date: '2024',
      description: 'Advanced database management concepts, SQL optimization, and database administration fundamentals.',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Database Administration'],
      credentialUrl: 'https://oracle.com/certificates/database',
      verified: true,
      color: 'bg-red-500/10 text-red-500 border-red-500/20'
    },
    {
      title: 'Cloud Foundation Certificate',
      issuer: 'Future Ready Talent (FRT)',
      date: '2024',
      description: 'Cloud computing fundamentals, Azure services, and modern cloud architecture principles.',
      skills: ['Cloud Computing', 'Microsoft Azure', 'Cloud Architecture', 'DevOps'],
      credentialUrl: 'https://futurereadytalent.in/certificates',
      verified: true,
      color: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
    },
    {
      title: 'Smart India Hackathon (SIH)',
      issuer: 'Government of India',
      date: '2023',
      description: 'Participated in national-level hackathon focusing on innovative solutions for real-world problems.',
      skills: ['Problem Solving', 'Innovation', 'Team Collaboration', 'Project Management'],
      credentialUrl: 'https://sih.gov.in',
      verified: true,
      color: 'bg-green-500/10 text-green-500 border-green-500/20'
    },
    {
      title: 'Reimagine Hackathon',
      issuer: 'Tech Community',
      date: '2023',
      description: 'Innovative hackathon focused on reimagining technology solutions for modern challenges.',
      skills: ['Creative Thinking', 'Full Stack Development', 'UI/UX Design', 'Prototyping'],
      credentialUrl: 'https://reimagine-hackathon.com',
      verified: true,
      color: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-glow hover-lift group h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${cert.color}`}>
                    <Award className="h-6 w-6" />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full text-xs">
                      <CheckCircle className="h-3 w-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{cert.issuer} • {cert.date}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/50 hover:border-primary hover:bg-primary/10 group-hover:shadow-glow transition-all"
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Credential
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 rounded-lg bg-card border border-border hover-glow">
            <div className="text-3xl font-bold text-primary mb-2">{certifications.length}</div>
            <div className="text-muted-foreground">Certifications Earned</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border hover-glow">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-muted-foreground">Hackathons Participated</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border hover-glow">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Completion Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-3">Continuous Learning</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I believe in continuous improvement and staying updated with the latest technologies. 
            Currently pursuing additional certifications in cloud computing and advanced web development.
          </p>
          <Button
            className="bg-primary hover:bg-primary-glow"
            onClick={() => window.open('https://linkedin.com/in/jayhindpal', '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;