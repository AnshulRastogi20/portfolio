import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Video, Palette } from "lucide-react";
import YouTubePlayer from './YouTubePlayer';

interface ProjectDetailProps {
  project: {
    title: string;
    year: number;
    type: string;
    problem: string;
    solution: string;
    technologies: string[];
    beforeImage?: string;
    afterImage?: string;
    beforeVideo?: string;
    afterVideo?: string;
    demoLink: string;
    githubLink?: string;
    projectLink?: string;
    canvaLink?: string;
  };
  category: "web" | "video" | "design";
}

const ProjectDetail = ({ project, category }: ProjectDetailProps) => {
  const getActionButtons = () => {
    switch (category) {
      case "web":
        return (
          <>
            <Button asChild variant="default" className="button-gradient">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={16} />
                View Demo
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={16} />
                View Code
              </a>
            </Button>
          </>
        );
      case "video":
        return (
          <>
            <Button asChild variant="default" className="button-gradient">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Video size={16} />
                Watch Demo
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={16} />
                Project Details
              </a>
            </Button>
          </>
        );
      case "design":
        return (
          <>
            <Button asChild variant="default" className="button-gradient">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Palette size={16} />
                View Designs
              </a>
            </Button>
            {/* <Button asChild variant="outline">
              <a href={project.canvaLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={16} />
                Canva
              </a>
            </Button> */}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white dark:from-dark dark:to-dark/50 pt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-4">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
              <span>{project.year}</span>
              <span>{project.type}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-white">Overview</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-primary dark:text-white">Problem</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.problem}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-primary dark:text-white">Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.solution}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-primary dark:text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 dark:bg-white/10 rounded-full text-sm text-primary dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {getActionButtons()}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {category === 'video' ? (
                <>
                  <div>
                    {/* <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Before</h3> */}
                    <YouTubePlayer videoUrl={project.beforeVideo} className="rounded-lg overflow-hidden" />
                  </div>
                  {/* <div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">After</h3>
                    <video src={project.afterVideo} controls className="rounded-lg w-full" />
                  </div> */}
                </>
              ) : (
                <>
                  <div>
                    {/* <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Before</h3> */}
                    <img src={project.beforeImage} alt="Before" className="rounded-lg w-full" />
                  </div>
                  {/* <div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">After</h3>
                    <img src={project.afterImage} alt="After" className="rounded-lg w-full" />
                  </div> */}
                </>
              )}
            </div>
          </div>

          {project.afterVideo && (
            <div className="my-4">
              <h3 className="text-xl font-semibold mb-2">Result Video</h3>
              <YouTubePlayer videoUrl={project.afterVideo} className="rounded-lg overflow-hidden" />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail; 