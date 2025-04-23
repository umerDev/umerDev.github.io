
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS showcasing my skills and projects",
    tags: ["React", "Tailwind CSS", "Vite", "TypeScript"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    github: "https://github.com/umerDev",
    liveDemo: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce application with shopping cart and payment integration",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/umerDev",
    liveDemo: "#"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A productivity app for managing tasks with drag and drop functionality",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/umerDev",
    liveDemo: "#"
  },
  {
    id: 4,
    title: "Weather App",
    description: "Real-time weather application with location search and forecast",
    tags: ["React", "Weather API", "Styled Components"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    github: "https://github.com/umerDev",
    liveDemo: "#"
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projectsData.length));
  };
  
  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">My Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built with attention to detail and a focus on solving real problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.slice(0, visibleProjects).map(project => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader className="p-4">
                <h3 className="font-semibold text-xl">{project.title}</h3>
              </CardHeader>
              
              <CardContent className="p-4 pt-0">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 border-t bg-gray-50 flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="bg-tech-blue hover:bg-tech-darkblue" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          {visibleProjects < projectsData.length ? (
            <Button onClick={showMoreProjects} className="bg-tech-blue hover:bg-tech-darkblue">
              Load More
            </Button>
          ) : projectsData.length > 3 ? (
            <Button onClick={showLessProjects} variant="outline" className="border-tech-blue text-tech-blue">
              Show Less
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Projects;
