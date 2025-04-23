
import { Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="gradient-text">Umer</span>
            <br />
            Software Engineer
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            I build high-quality web applications with React, TypeScript, and modern frameworks.
            Passionate about creating clean, efficient, and user-friendly solutions that deliver real value.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
  <Button className="bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90 px-6 py-6 text-base">
    View Projects
    <ArrowRight className="ml-2 w-4 h-4" />
  </Button>
</a>
            <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/10 px-6 py-6 text-base">
              <Github className="mr-2 w-4 h-4" />
              GitHub Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll to About section">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-tech-blue"
          >
            <path 
              d="M12 5V19M12 19L5 12M12 19L19 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
