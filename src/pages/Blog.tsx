import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight, ChevronLeft, Play } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useBlog } from '@/contexts/BlogContext';

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
        // Try to fetch the index.json file from the blog's media folder
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

  return (
    <div className="relative w-full aspect-video rounded-t-lg overflow-hidden group">
      {mediaFiles[currentIndex].type === 'image' ? (
        <img
          src={mediaFiles[currentIndex].url}
          alt={`Blog media ${currentIndex + 1}`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <div className="relative w-full h-full">
          <video
            src={mediaFiles[currentIndex].url}
            className="w-full h-full object-cover object-top"
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
  );
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { blogPosts } = useBlog();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white dark:from-dark dark:to-dark/50 pt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-8">Blog</h1>
        
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search posts..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? 'bg-primary text-white dark:bg-white dark:text-dark'
                    : 'bg-primary/10 text-primary dark:bg-white/10 dark:text-white hover:bg-primary/20 dark:hover:bg-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/blog/${post.id}`}>
                <Card className="glass hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <MediaCarousel blogId={post.id} />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-primary dark:text-white mb-2">{post.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.date}
                      </span>
                      <ChevronRight className="text-primary dark:text-white" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;