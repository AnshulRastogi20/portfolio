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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: "Blog 1 : A New Beginning",
      excerpt: "Excited to start my blog journey! Sharing my experiences in web development, product building, and lessons learned.",
      date: "02-02-2025",
      tags: ["Web Development", "MERN Stack", "Next.js", "Career"],
      content: "# A New Beginning - My Blog Journey\n\n## Introduction\nHey everyone! \n\nI'm Anshul, a passionate web developer and tech enthusiast currently pursuing BTech. I've been deeply involved in web development, particularly with the MERN stack, and I love building products that solve real-world problems. From working on client projects to experimenting with different technologies, my journey so far has been full of learning experiences.\n\n## Why I Started This Blog\nStarting this blog is an exciting step for me!  I've always believed that sharing knowledge is one of the best ways to grow, and this blog will be my space to document my journey, experiences, and lessons learned. Whether it's about web development, product building, or challenges I've faced, I'll be writing about it all.\n\n## What to Expect\nIf you're interested in:\n- Web development (especially MERN stack & Next.js)\n- Learning from real-world project experiences\n- The highs and lows of building tech products\n\nThen stick around! I'll be posting regularly and sharing insights that I wish I had when I started. Let's grow together! ",
      likes: 0
    },
    {
      id: '2',
      title: "Blog 2 : My First Product Failure",
      excerpt: "How my first product failed due to improper database usage and the key lessons I learned from it.",
      date: "10-02-2025",
      tags: ["Web Development", "Databases", "Product Building", "Lessons Learned"],
      content: `# My First Product Failure - A Lesson in Databases\n\n## Introduction\nBuilding products is fun, but building them **right** is the real challenge.\n\nI recently built an **attendance tracking system** (www.attendit.tech), and despite having a well-designed frontend, the product **failed**. This blog post is about **what went wrong**, **what I learned**, and **how I plan to improve in the future**.\n\n## What Went Wrong?\nAs a developer, I always focused on the bigger vision of building products rather than just projects. I wanted my system to be scalable and efficient. But in my excitement, I made a critical mistake—I used **database connections for every small operation**, even for things like sorting, which **JavaScript could handle easily on the frontend**. This unnecessary database load slowed down the system, making it inefficient and ultimately unusable at scale.\n\n## Lessons Learned\nThis failure was a huge **learning experience** for me. I realized that designing a system isn't just about writing code—it's about **understanding how to use resources efficiently**. Now, I'm even more excited to build better, optimized products in the future.\n\nFailures like these push me to grow, and I'm looking forward to sharing my journey with you all. More products, more learning, and more experiences coming soon!`,
      likes: 0
    },
    {
      id: '3',
      title: "Blog 3: Diving into Advanced Web Dev",
      excerpt: "Starting my journey into advanced web development by learning Docker and explored the Wasp framework.",
      date: "16-02-2025",
      tags: ["Web Development", "Docker", "Wasp Framework", "Advanced Topics"],
      content: "# Diving Deeper into Advanced Web Development\n\n## Introduction\nWeb development is an ever-evolving field, and to stay ahead, I have decided to dive deeper into **advanced web development topics**. While I have already built multiple projects using the **MERN stack** and **Next.js**, I want to enhance my skills by learning tools that can **improve deployment, scalability, and developer experience**.\n\n## >Learning Docker\nThis week, I started learning **Docker**, a powerful tool for **containerization**. Docker simplifies deployment by ensuring that applications run smoothly across different environments. Understanding how to **containerize applications, create Docker images, and manage containers** has been a valuable experience. It is interesting to see how it can streamline deployments and make projects more scalable.\n\n## >Exploring the Wasp Framework\nAnother new concept I explored is the **Wasp framework**. It is an innovative full-stack framework that simplifies web app development by abstracting complex configurations while still offering flexibility. The idea of **writing high-level logic and letting Wasp handle the heavy lifting** is quite interesting, and I am looking forward to using it in future projects.\n\n## >Looking Ahead\nWith **Docker** and **Wasp**, I am just getting started on my journey into advanced web development. I am eager to explore more tools and technologies that will help me **build better, more efficient products**. Excited for what is next.",
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
    const newLikedPosts = new Set(likedPosts);
    
    if (likedPosts.has(postId)) {
      // Unlike the post
      newLikedPosts.delete(postId);
      setBlogPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === postId ? { ...post, likes: Math.max(0, post.likes - 1) } : post
        )
      );
    } else {
      // Like the post
      newLikedPosts.add(postId);
      setBlogPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === postId ? { ...post, likes: post.likes + 1 } : post
        )
      );
    }
    
    setLikedPosts(newLikedPosts);
    localStorage.setItem('likedPosts', JSON.stringify([...newLikedPosts]));
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
