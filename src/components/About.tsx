
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-tech-blue"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-tech-purple"></div>
            
            {/* Profile image */}
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Profile placeholder" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Software Developer</h3>
            <p className="text-gray-700 mb-6">
              Hello! I'm Umer, a passionate software developer with a focus on building web applications 
              that solve real-world problems. My journey in tech has equipped me with a versatile skill set 
              and an eye for detail. I specialize in modern JavaScript frameworks and love creating 
              responsive, performant web applications.
            </p>
            <p className="text-gray-700 mb-8">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and sharing my knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-tech-blue mb-2">2+</div>
                  <p className="text-gray-600">Years Experience</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-tech-purple mb-2">15+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
