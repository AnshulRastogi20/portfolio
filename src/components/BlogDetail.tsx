import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useBlog } from "@/contexts/BlogContext";

interface BlogDetailProps {
  post: {
    id: string;
    title: string;
    content: string;
    date: string;
    tags: string[];
    likes: number;
  };
}

const BlogDetail = ({ post }: BlogDetailProps) => {
  const { likedPosts, likeBlogPost } = useBlog();
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
        <div className="max-w-4xl mx-auto glass p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => likeBlogPost(post.id)}
              disabled={isLiked}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                isLiked 
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed dark:bg-gray-800' 
                  : 'bg-primary/10 hover:bg-primary/20 text-primary dark:text-white transition-colors'
              }`}
            >
              <Heart size={20} className={isLiked ? "fill-gray-500" : ""} />
              <span>{post.likes} likes</span>
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString()}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {post.content}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;
