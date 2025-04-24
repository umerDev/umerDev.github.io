
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold gradient-text">Umer</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-medium hover:text-tech-blue transition-colors">About</a>
          <a href="#projects" className="font-medium hover:text-tech-blue transition-colors">Projects</a>
          <a href="#skills" className="font-medium hover:text-tech-blue transition-colors">Skills</a>
          <div className="flex gap-3 items-center">
            <a href="https://github.com/umerDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 hover:text-tech-blue transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/umer-raja/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-tech-blue transition-colors" />
            </a>
            <a
              href="/data/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-tech-blue to-tech-purple text-white font-semibold shadow-md text-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-tech-blue"
              aria-label="Download CV"
            >
              <FileText className="w-4 h-4" />
              CV
            </a>
            <ThemeToggle />
          </div>
          {/* <Button className="bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90">
            Resume
          </Button> */}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-800">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="font-medium hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="font-medium hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#skills" className="font-medium hover:text-tech-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <div className="flex gap-4 items-center">
              <a href="https://github.com/umerDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/umer-raja/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-tech-blue to-tech-purple text-white font-semibold shadow-md text-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-tech-blue"
                aria-label="Download CV"
              >
                <FileText className="w-4 h-4" />
                CV
              </a>
            </div>
            {/* <Button className="bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90 w-full">
              Resume
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
