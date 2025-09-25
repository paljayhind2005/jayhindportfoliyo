import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm Jayhind's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const knowledgeBase = {
    skills: {
      keywords: ['skill', 'technology', 'programming', 'language', 'framework'],
      response: "Jayhind is proficient in Java, SQL, and the MERN stack (MongoDB, Express.js, React.js, Node.js). He also has experience with HTML, CSS, JavaScript, Git, GitHub, VS Code, and works on Windows and Android platforms. He's currently studying DSA, OOP, DBMS, and Computer Networks."
    },
    projects: {
      keywords: ['project', 'portfolio', 'work', 'built', 'created', 'developed'],
      response: "Jayhind has worked on several impressive projects: 1) Education Website - A responsive platform with GSAP animations, 2) Quiz Application - A full-featured React app with proctoring and admin panel, 3) Habitica Daily Routine - A habit tracking app with gamification. All projects showcase his full-stack development skills."
    },
    education: {
      keywords: ['education', 'college', 'university', 'degree', 'academic', 'cgpa', 'grade'],
      response: "Jayhind is pursuing B.Tech in Information Technology from Bansal Institute of Science and Technology, Bhopal (2022-2026) with a CGPA of 7.45. He completed his 12th grade with 75.4% and 10th grade with 80.66%."
    },
    experience: {
      keywords: ['experience', 'internship', 'work', 'job', 'career'],
      response: "Jayhind is currently a student but has gained practical experience through personal projects and hackathons including Smart India Hackathon (SIH) and Reimagine. He's seeking internship and full-time opportunities to apply his skills in a professional environment."
    },
    certifications: {
      keywords: ['certificate', 'certification', 'achievement', 'hackathon', 'award'],
      response: "Jayhind has earned certifications from HackerRank (Java), Oracle (Database Management), and FRT (Cloud Foundation). He has also participated in prestigious hackathons like Smart India Hackathon (SIH) and Reimagine, showcasing his problem-solving abilities."
    },
    contact: {
      keywords: ['contact', 'email', 'phone', 'hire', 'reach', 'connect'],
      response: "You can reach Jayhind at pjayhind882@gmail.com or call +91 7879898216. He's also active on LinkedIn and GitHub. He's currently available for internships and full-time opportunities and typically responds within 24 hours."
    },
    location: {
      keywords: ['location', 'where', 'place', 'city', 'address'],
      response: "Jayhind is based in Bhopal, Madhya Pradesh, India. He's currently studying at Bansal Institute of Science and Technology in Bhopal."
    }
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => message.includes(keyword))) {
        return data.response;
      }
    }

    // Default responses for common greetings and general queries
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Jayhind Pal. You can ask me about his skills, projects, education, certifications, or how to contact him. What interests you most?";
    }

    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! If you have any other questions about Jayhind or would like to get in touch with him, just let me know. He's always excited to discuss new opportunities!";
    }

    if (message.includes('help')) {
      return "I can help you learn about: 🔹 Technical Skills & Technologies 🔹 Projects & Portfolio 🔹 Education & Academic Background 🔹 Certifications & Achievements 🔹 Contact Information 🔹 Career Objectives. Just ask me anything!";
    }

    return "That's an interesting question! While I don't have specific information about that, I can tell you about Jayhind's skills, projects, education, certifications, or how to contact him. What would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are Jayhind's main skills?",
    "Tell me about his projects",
    "What's his educational background?",
    "How can I contact him?",
    "Is he available for work?"
  ];

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary-glow shadow-glow animate-pulse-glow transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-elevation border-primary/20 animate-slide-up">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Jayhind's Assistant</h3>
                <p className="text-xs opacity-80">Ask me anything!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-[calc(100%-80px)]">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="h-3 w-3" />
                        ) : (
                          <Bot className="h-3 w-3" />
                        )}
                      </div>
                      <div className={`p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3 w-3" />
                      </div>
                      <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(question)}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Jayhind..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-primary hover:bg-primary-glow"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIAssistant;