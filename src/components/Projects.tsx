
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, FileCode } from 'lucide-react';
import { getPinnedRepos, PinnedRepo } from "@/lib/getPinnedRepos";
import { Skeleton } from "@/components/ui/skeleton";

const GITHUB_USERNAME = "umerDev";

const Projects = () => {
  // Fetch pinned projects
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['github-pinned-projects', GITHUB_USERNAME],
    queryFn: () => getPinnedRepos(GITHUB_USERNAME),
  });

  if (isLoading) {
    // Loading skeleton
    return (
      <section id="projects" className="section">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Loading pinned projects...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <Skeleton className="aspect-video w-full mb-4 rounded-t-md" />
                <CardHeader>
                  <Skeleton className="h-6 w-1/2 mb-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-3" />
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-12 rounded-full" />
                    <Skeleton className="h-5 w-12 rounded-full" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-8 w-24 mr-2 rounded-lg" />
                  <Skeleton className="h-8 w-24 rounded-lg" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    // Error message
    return (
      <section id="projects" className="section">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-red-500">
            {typeof error === "string" ? error : (error as Error)?.message}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">My Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Here are my GitHub pinned projects!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((project: PinnedRepo) => (
            <Card key={project.id} className="overflow-hidden card-hover flex flex-col justify-between">
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                {/* Language badges overlay */}
                {(project.languages?.nodes?.length > 0 || project.primaryLanguage) && (
                  <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-2">
                    {project.languages?.nodes?.length > 0
                      ? project.languages.nodes.slice(0, 3).map((lang: { name: string }) => (
                          <span
                            key={lang.name}
                            className="text-xs font-semibold bg-black/70 text-white px-3 py-1 rounded-full drop-shadow-lg border-2 border-white/70 backdrop-blur"
                          >
                            {lang.name}
                          </span>
                        ))
                      : project.primaryLanguage && (
                          <span
                            className="text-xs font-semibold bg-black/70 text-white px-3 py-1 rounded-full drop-shadow-lg border-2 border-white/70 backdrop-blur"
                          >
                            {project.primaryLanguage.name}
                          </span>
                        )}
                  </div>
                )}
                  <div className="w-full h-full flex items-center justify-center text-2xl text-gray-300 bg-gradient-to-br from-gray-100 to-gray-200">
                    <Github className="h-12 w-12" />
                  </div>
              </div>
              <CardHeader className="p-4">
                <h3 className="font-semibold text-xl">{project.name}</h3>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-700 mb-4">
                  {project.description || "No description provided."}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.languages?.nodes ?? []).slice(0, 3).map((lang) => (
                    <span
                      key={lang.name}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {lang.name}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 border-t bg-gray-50 flex flex-col items-center justify-between mt-auto">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.homepageUrl }
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
