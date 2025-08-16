import { Card, CardContent } from "./ui/card";
import { Calendar, MapPin, Building2 } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Mark43",
    companyLogo: "https://uploads-us-west-2.insided.com/mark43-en/attachment/18770f64-87ff-42bc-bb42-d00441b9f5a2_thumb.png",
    location: "Manchester",
    period: "July 2025 - Present",
    description: [
      "Working on mission-critical public safety software solutions"
    ],
    technologies: ["AWS", "React", "Java", "TypeScript", "NodeJS", "GraphQL", "MySQL", "Docker", "Terraform", "Github"]
  },
  {
    title: "Technical Lead",
    company: "Oval3 (Web3)",
    companyLogo: "https://media.licdn.com/dms/image/v2/D4E0BAQFI7KVJWXIQ6w/company-logo_200_200/company-logo_200_200/0/1665670617347/oval3_game_logo?e=2147483647&v=beta&t=CvAgc568uQVDLZCBXdYQMH_5H2c4srCdgoAh0LgIgZQ",
    location: "Remote",
    period: "June 2024 - June 2025",
    description: [
      "Led a team delivering a blockchain-based rugby gaming product",
      "Reduced cloud costs by 49% migrating App Engine to Cloud Run",
      "Improved site performance (Lighthouse 43 → 84), refactored GraphQL APIs",
      "Delivered modular NFT system & integrated Stripe payments",
      "Introduced Terraform IaC, CI/CD, and private VPC networking",
      "Built dynamic SVG-based NFT generation, Playwright testing suite"
    ],
    technologies: ["GCP", "Firebase", "Vue/Nuxt3", "TypeScript", "NodeJS", "GraphQL", "PostgreSQL", "TypeORM", "AdonisJS", "Prisma", "Docker", "Terraform", "GitLab", "Playwright"]
  },
  {
    title: "Senior Software Engineer",
    company: "eBay (Web3)",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1280px-EBay_logo.svg.png",
    location: "Manchester",
    period: "Mar 2022 - Feb 2024",
    description: [
      "Built scalable EVM indexer (processed 21M blocks in 4 hours)",
      "Event driven architecture with CQRS read/write split",
      "ERC721/ERC1151 smart contracts execution and event indexing",
      "Developed Artist Dashboard & integrated Intercom on marketplace for support",
      "Led CI/CD automation and created IaC using Terraform and Terragrunt"
    ],
    technologies: ["GCP", "TypeScript", "VueJS", "Nuxt3", "NodeJS", "GraphQL", "TypeGraphQL", "PostgreSQL", "Prisma", "Intercom", "Docker", "Kubernetes", "Helm", "Terraform", "Terragrunt", "GitHub Actions"]
  },
  {
    title: "Software Engineer",
    company: "Fujitsu Ltd",
    companyLogo: "https://pbs.twimg.com/tweet_video_thumb/FHXp35IXIBYnXtb.jpg",
    location: "Bracknell",
    period: "Jan 2018 - Mar 2022",
    description: [
      "Government Backend: Scaled Go microservices to handle 6M+ file requests (12MB WSQ files) in 12-hour windows, optimized with pprof profiling",
      "Government Mobile PoC: Led 7 developers building serverless React Native app with OpenCV image processing, AWS Step Functions orchestration, and Saga pattern implementation",
      "Augmented Reality Mobile App: Built a cross-platform mobile application with MQTT IoT integration, custom shaders, native iOS/Android plugins, and custom webhook integrations. Showcased at Fujitsu World Tour"
    ],
    technologies: ["Go", "gRPC", "MongoDB", "NATS", "React-Native", "TypeScript", "Java", "Python", "OpenCV", "TensorFlow", "AWS", "Unity", "C#", "Objective-C", "MQTT", "Docker", "Terraform", "GitLab CI/CD"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-6 overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div className="flex gap-3">
                    {exp.companyLogo && (
                      <img 
                        src={exp.companyLogo} 
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 object-contain rounded-lg bg-white p-1"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;