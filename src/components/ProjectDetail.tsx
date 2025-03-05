import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Video, Palette, ChevronLeft, ChevronRight, Play, X, Expand, Minimize } from "lucide-react";
import YouTubePlayer from './YouTubePlayer';
import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
    id: string;
  };
  category: "web" | "video" | "design";
}

interface MediaFile {
  type: 'image' | 'video' | 'youtube';
  url: string;
}

const useMediaFiles = (projectId: string, category: string) => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMediaFiles = async () => {
      try {
        const response = await fetch(`/projects/${category}/${projectId}/index.json`);
        if (!response.ok) {
          setMediaFiles([]);
          return;
        }
        
        const files = await response.json();
        const mediaFiles: MediaFile[] = files.map((file: string) => ({
          type: file.includes('youtube.com') ? 'youtube' :
                file.toLowerCase().endsWith('.mp4') ? 'video' : 'image',
          url: file.includes('youtube.com') ? file : `/projects/${category}/${projectId}/${file}`
        }));
        
        setMediaFiles(mediaFiles);
      } catch (error) {
        console.log(`No media found for project ${projectId}`);
        setMediaFiles([]);
      } finally {
        setLoading(false);
      }
    };

    loadMediaFiles();
  }, [projectId, category]);

  return { mediaFiles, loading };
};

const MediaCarousel = ({ projectId, category }: { projectId: string; category: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mediaFiles, loading } = useMediaFiles(projectId, category);
  const [showFullscreen, setShowFullscreen] = useState(false);

  if (loading) return <div className="w-full aspect-video animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg" />;
  if (mediaFiles.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaFiles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaFiles.length) % mediaFiles.length);
  };

  const MediaContent = ({ isFullscreen = false }: { isFullscreen?: boolean }) => (
    <div className={`relative rounded-lg overflow-hidden ${
      isFullscreen ? 'w-full h-full' : 'aspect-video max-h-[500px]'
    }`}>
      {mediaFiles[currentIndex].type === 'image' ? (
        <img
          src={mediaFiles[currentIndex].url}
          alt={`Project media ${currentIndex + 1}`}
          className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover object-top'}`}
          loading="lazy"
        />
      ) : mediaFiles[currentIndex].type === 'youtube' ? (
        <YouTubePlayer 
          videoUrl={mediaFiles[currentIndex].url} 
          className="w-full h-full"
        />
      ) : (
        <video
          src={mediaFiles[currentIndex].url}
          className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover object-top'}`}
          controls
          controlsList="nodownload"
          playsInline
        />
      )}

      {/* Expand button (only show in non-fullscreen mode) */}
      {!isFullscreen && (
        <button
          onClick={() => setShowFullscreen(true)}
          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <Expand size={20} />
        </button>
      )}

      {mediaFiles.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {mediaFiles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      {/* Normal view */}
      <MediaContent />

      {/* Fullscreen modal */}
      <Dialog open={showFullscreen} onOpenChange={setShowFullscreen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-none">
          <div className="relative w-full h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setShowFullscreen(false)}
              className="absolute top-4 right-4 z-50 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
            <MediaContent isFullscreen />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

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
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-4">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
              <span>{project.year}</span>
              <span>{project.type}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[2fr_3fr] gap-8">
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

            <div className="md:sticky md:top-24 h-fit space-y-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <MediaCarousel projectId={project.id} category={category} />
              </div>
              
              {project.afterVideo && (
                <div>
                  <h3 className="text-xl font-semibold mb-2">Result Video</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <YouTubePlayer videoUrl={project.afterVideo} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail; 