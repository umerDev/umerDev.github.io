
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
            <h3 className="text-2xl font-semibold mb-4">Lead Full Stack Software Engineer</h3>
            <p className="text-gray-700 mb-6">
              Hey there! I’m Umer, your friendly neighborhood Lead Full Stack Software Engineer who thrives on innovation and agility. With over 8 years of professional experience (and plenty of coffee), I’ve had the joy of guiding development squads to build high-performance, cloud native wonders that delight users and scale effortlessly.
            </p>
            <p className="text-gray-700 mb-8">
              I wield a toolkit bursting with <strong>TypeScript</strong>, <strong>React</strong>, <strong>Vue</strong>, <strong>Go</strong>, <strong>C#</strong>, <strong>Java</strong>, and <strong>Python</strong>—spanning the cloud playgrounds of AWS, GCP, and Azure. From event-driven architectures to CI/CD magic, I’m passionate about crafting solutions that empower teams and deliver real product impact. Mentoring fellow engineers is my jam, and I’m always chasing new ways to make tech better, faster, and a little more fun!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-tech-blue mb-2">8+</div>
                  <p className="text-gray-600">Years Leadership</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-tech-purple mb-2">Product-Driven</div>
                  <p className="text-gray-600">Team Mentor & Cloud Enthusiast</p>
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

