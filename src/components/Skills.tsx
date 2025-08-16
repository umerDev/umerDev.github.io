
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const skillsData = [
  {
    category: "Backend & Cloud",
    skills: [
      { name: "Typescript", level: 90 },
      { name: "Node.js", level: 90 },
      { name: "Cloud Native Architecture", level: 90 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 90 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Microservices", level: 88 },
      { name: "Event-driven Design", level: 85 },
      { name: "Docker", level: 85 },
      { name: "Terraform", level: 85 },
      { name: "AWS / GCP / Azure", level: 85 },
      { name: "SQL", level: 82 },
      { name: "NoSQL", level: 79 },
      { name: "C#", level: 70 },
      { name: "Go", level: 70 },
      { name: "Java", level: 70 },
      { name: "Python", level: 70 },
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
        As a cloud-native full stack engineer, I combine deep architectural expertise and technical leadership to build scalable, high-impact product solutions. Below is a summary of my core strengths:        </p>
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
        {/* Certifications Pill Badges */}
        <div className="mt-6 flex flex-wrap gap-10 justify-center">
          <h1 className="text-xl font-semibold mt-1 gradient-text">Certifications</h1>
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-tech-blue to-tech-purple text-white font-semibold shadow-md text-sm">
            ITIL Foundation
          </span>
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-tech-blue to-tech-purple text-white font-semibold shadow-md text-sm">
            Agile Foundation
          </span>
          <a
            href="https://www.credly.com/badges/d70bd345-176a-4e05-8fc4-f3ce769bcb89/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-tech-blue to-tech-purple text-white font-semibold shadow-md text-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-tech-blue"
          >
            Azure AI Fundamentals
          </a>
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-tech-blue to-tech-purple text-white font-semibold shadow-md text-sm">
            OWASP
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;

