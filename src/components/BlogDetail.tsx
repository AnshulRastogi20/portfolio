import ReactMarkdown from 'react-markdown';
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useBlog } from "@/contexts/BlogContext";
import remarkGfm from 'remark-gfm';

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
        <div className="max-w-4xl mx-auto p-8 rounded-xl">
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
      </motion.div>
    </div>
  );
};

export default BlogDetail;
