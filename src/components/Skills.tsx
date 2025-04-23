
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

// Updated skills data with 70% backend / cloud focus and 30% frontend.
const skillsData = [
  {
    category: "Backend & Cloud",
    skills: [
      { name: "Go", level: 92 },
      { name: "C#", level: 90 },
      { name: "Java", level: 88 },
      { name: "Python", level: 87 },
      { name: "Node.js", level: 83 },
      { name: "Event-driven Design", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "Microservices", level: 88 },
      { name: "SQL", level: 82 },
      { name: "MongoDB", level: 79 },
      { name: "Docker", level: 85 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "AWS / GCP / Azure", level: 82 },
      { name: "Cloud Native Architecture", level: 85 },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "TypeScript", level: 84 },
      { name: "React", level: 82 },
      { name: "Vue.js", level: 77 },
      { name: "JavaScript", level: 80 },
      { name: "HTML5 & CSS3", level: 78 },
      { name: "Tailwind CSS", level: 75 },
    ]
  },
  {
    category: "Engineering Leadership & Tools",
    skills: [
      { name: "Mentoring & Team Leadership", level: 90 },
      { name: "Product-focused Delivery", level: 88 },
      { name: "Agile Practices", level: 85 },
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 90 },
      { name: "Jest & Testing", level: 75 },
      { name: "Figma", level: 72 },
    ]
  }
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [show, setShow] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-4" ref={skillRef}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs font-medium text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-tech-blue to-tech-purple h-2 rounded-full origin-left transform transition-all duration-1000" 
          style={{ width: show ? `${level}%` : '0%', transitionDelay: '0.2s' }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Cloud-native full stack engineer with a backend-first focus, I blend strong architectural chops and technical leadership to deliver scalable product solutions. Here’s an overview of my key strengths:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">{category.category}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

