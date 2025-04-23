
import { Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto w-full">
          {/* Left: Text */}
          <div className="flex-1 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="gradient-text">Umer</span>.
              <br />
              Software Engineer
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              I build high-quality full-stack applications with TypeScript, Vue, React and other modern frameworks.
              Passionate about creating clean, efficient, and user-friendly solutions that deliver real value.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button className="bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90 px-6 py-6 text-base">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="https://github.com/umerDev" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/10 px-6 py-6 text-base">
                  <Github className="mr-2 w-4 h-4" />
                  GitHub Profile
                </Button>
              </a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
            <img src="/photo.jpeg" alt="Me" className="w-2/3 md:w-80 lg:w-96 rounded-lg shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
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
