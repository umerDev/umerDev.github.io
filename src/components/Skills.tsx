
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "React", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 78 },
      { name: "RESTful APIs", level: 88 },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Jest", level: 78 },
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
          I've worked with a variety of technologies and tools throughout my career.
          Here's an overview of my technical expertise:
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
