import ReactMarkdown from 'react-markdown';
import { motion } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight, Play, X, Expand, Minimize } from "lucide-react";
import { useBlog } from "@/contexts/BlogContext";
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react';

interface MediaFile {
  type: 'image' | 'video';
  url: string;
}

const useMediaFiles = (blogId: string) => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMediaFiles = async () => {
      try {
        const response = await fetch(`/blog${blogId}/index.json`);
        if (!response.ok) {
          setMediaFiles([]);
          return;
        }
        
        const files = await response.json();
        const mediaFiles: MediaFile[] = files.map((file: string) => ({
          type: file.toLowerCase().endsWith('.mp4') ? 'video' : 'image',
          url: `/blog${blogId}/${file}`
        }));
        
        setMediaFiles(mediaFiles);
      } catch (error) {
        console.log(`No media found for blog ${blogId}`);
        setMediaFiles([]);
      } finally {
        setLoading(false);
      }
    };

    loadMediaFiles();
  }, [blogId]);

  return { mediaFiles, loading };
};

const MediaCarousel = ({ blogId }: { blogId: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mediaFiles, loading } = useMediaFiles(blogId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (loading) return <div className="w-full aspect-video animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg" />;
  if (mediaFiles.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaFiles.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaFiles.length) % mediaFiles.length);
    setIsPlaying(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
      <div className={`relative aspect-video rounded-lg overflow-hidden group ${isFullscreen ? 'h-full' : ''}`}>
        {mediaFiles[currentIndex].type === 'image' ? (
          <img
            src={mediaFiles[currentIndex].url}
            alt={`Blog media ${currentIndex + 1}`}
            className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover object-top'}`}
            loading="lazy"
          />
        ) : (
          <div className="relative w-full h-full">
            <video
              src={mediaFiles[currentIndex].url}
              className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover object-top'}`}
              controls={isPlaying}
              autoPlay={isPlaying}
              onEnded={() => setIsPlaying(false)}
              onClick={() => setIsPlaying(!isPlaying)}
            />
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              >
                <Play className="w-12 h-12 text-white" />
              </button>
            )}
          </div>
        )}
        
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={toggleFullscreen}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            {isFullscreen ? <Minimize size={20} /> : <Expand size={20} />}
          </button>
          {isFullscreen && (
            <button
              onClick={toggleFullscreen}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {mediaFiles.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {mediaFiles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPlaying(false);
                  }}
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
    </div>
  );
};

interface BlogDetailProps {
  postId: string;
}

export const BlogDetail = ({ postId }: BlogDetailProps) => {
  const { blogPosts, likedPosts, likeBlogPost } = useBlog();
  const post = blogPosts.find(post => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  const isLiked = likedPosts.has(post.id);

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
          <MediaCarousel blogId={post.id} />
          
          <div className="mt-8 p-8 rounded-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-6">
              <span>{post.date}</span>
              <button 
                onClick={() => likeBlogPost(post.id)}
                className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors duration-200 ${
                  isLiked 
                    ? 'bg-primary dark:bg-primary text-white' 
                    : 'bg-primary/10 dark:bg-white/10 text-primary dark:text-white hover:bg-primary/20 dark:hover:bg-white/20'
                }`}
                aria-label={isLiked ? "Unlike post" : "Like post"}
              >
                <Heart size={20} className={isLiked ? "fill-current" : ""} />
                <span>{isLiked ? 'Liked' : 'Like'}</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-primary/10 dark:bg-white/10 rounded-full text-sm text-primary dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;
