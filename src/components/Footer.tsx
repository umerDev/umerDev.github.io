
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-tech-lightblue to-tech-purple bg-clip-text text-transparent">Umer</h2>
            <p className="text-gray-400 mt-2 max-w-md">
              Building modern web applications with passion and precision.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/umerDev" target="_blank" rel="noopener noreferrer" className="hover:text-tech-lightblue transition-colors p-2" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/umer-raja/" target="_blank" rel="noopener noreferrer" className="hover:text-tech-lightblue transition-colors p-2" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Umer. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
