import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
  likes: number;
}

interface BlogContextType {
  blogPosts: BlogPost[];
  likedPosts: Set<string>;
  likeBlogPost: (postId: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: "My First Blog Post",
      excerpt: "Learn the basics of React and start building modern web applications",
      date: "2024-02-20",
      tags: ["React", "JavaScript", "Web Development"],
      content: "# Getting Started with React\n\nReact is a popular JavaScript library...",
      likes: 0
    }
  ]);

  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  useEffect(() => {
    const savedLikes = localStorage.getItem('likedPosts');
    if (savedLikes) {
      setLikedPosts(new Set(JSON.parse(savedLikes)));
    }
  }, []);

  const likeBlogPost = (postId: string) => {
    if (!likedPosts.has(postId)) {
      const newLikedPosts = new Set(likedPosts).add(postId);
      setLikedPosts(newLikedPosts);
      localStorage.setItem('likedPosts', JSON.stringify([...newLikedPosts]));
    }
  };

  return (
    <BlogContext.Provider value={{ blogPosts, likedPosts, likeBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
