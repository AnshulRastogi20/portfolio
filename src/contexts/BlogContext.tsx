import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
  likes: number;
  mediaFolder?: string; // Optional path to the media folder relative to public directory
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
    },
    {
      id: '4',
      title: "Blog 4: Hackathon Winning Journey ",
      excerpt: "We received a last-minute hackathon invite, endured sleepless nights, and built a winning waste segregator web app in just 2 days.",
      date: "23-02-2024",
      tags: ["Hackathon", "Web Development", "Competition", "Teamwork"],
      content: "# Aqualoop's Hackathon Journey – From Short Notice to Second Prize\n\n## The Beginning\nWe got a message from our mam about a hackathon on short notice. After some quick decisions, we decided to go for it.\n\n## >Day 1\nWe brainstormed our idea and prepared a PPT on the spot. We attended a mentoring session by influencers like **TensorBoy**, gathered valuable insights during the mentorship round, and raced against the clock to submit our PPT at **10:00 PM**. We worked through the night on our project and finally managed to grab some rest at **5 AM**.\n\n## >Day 2\nAfter getting **shortlisted in Round 1**, our motivation soared. We developed both the **front end and back end** for our **waste segregator web app** aimed at reducing the burning of recyclable waste in landfills. We sought advice from **senior volunteers** and implemented their feedback. By late night, we presented a **functional prototype** during Round 2 judgments.\n\n## >Day 3\nRunning on **minimal sleep**, we pushed through to **Round 3**. We created a **3D model** for our prototype and refined our website. As the **last presenters**, we waited for hours before our turn. Thankfully, our app worked **flawlessly at the critical moment**, saving our final round.\n\n## >The Results\nThen came the **result announcements**. They revealed the **third prize**, and next, when they announced the **second prize** for **Team 173, Aqualoop**, we were beyond thrilled! We collected our prizes, thanked our **faculties, mentors, and volunteers**, called our parents, let the excitement sink in, and left the university with our **prize hamper**.\n\n## >Learnings for Future Hackathons\n 1.**Take help** from volunteers, mentors, or faculties whenever possible.  \n2.**Engage** with judges and mentors before the judging round—ask questions, clarify doubts, and share your progress.  \n3.**Nail the PPT and maintain confidence** in your idea, even if there are some discrepancies, present it as the best project in the world.\n\nThanks for reading, and I hope to see you soon again!",
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
