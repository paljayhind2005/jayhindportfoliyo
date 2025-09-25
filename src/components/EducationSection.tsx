import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Information Technology',
      institution: 'Bansal Institute of Science and Technology, Bhopal',
      duration: '2022 - 2026',
      grade: 'CGPA: 7.45 (till 6th Sem)',
      status: 'current',
      coursework: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Computer Networks']
    },
    {
      degree: 'Higher Secondary Education (XII)',
      field: 'Science',
      institution: 'Govt. Boys Higher Secondary School, Harpalpur',
      duration: '2022',
      grade: '75.4%',
      status: 'completed'
    },
    {
      degree: 'Secondary Education (X)',
      field: 'General',
      institution: 'S.S. Mandir School, Harpalpur', 
      duration: '2020',
      grade: '80.66%',
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic journey that shaped my foundation in technology and problem-solving
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>

          {/* Education Cards */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow z-10">
                </div>

                {/* Content Card */}
                <div className="w-full lg:w-5/12">
                  <Card className={`card-glow hover-lift group ${item.status === 'current' ? 'ring-2 ring-primary/50' : ''}`}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground">{item.degree}</h3>
                            {item.field && (
                              <p className="text-primary font-medium">{item.field}</p>
                            )}
                          </div>
                        </div>
                        {item.status === 'current' && (
                          <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Institution */}
                      <p className="text-muted-foreground mb-3 font-medium">{item.institution}</p>

                      {/* Duration and Grade */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-success font-semibold">
                          <Award className="h-4 w-4" />
                          <span>{item.grade}</span>
                        </div>
                      </div>

                      {/* Coursework */}
                      {item.coursework && (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Key Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.coursework.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 rounded-lg bg-card border border-border hover-glow">
            <div className="text-3xl font-bold text-primary mb-2">7.45</div>
            <div className="text-muted-foreground">Current CGPA</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border hover-glow">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Years of Study</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border hover-glow">
            <div className="text-3xl font-bold text-primary mb-2">2026</div>
            <div className="text-muted-foreground">Expected Graduation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;