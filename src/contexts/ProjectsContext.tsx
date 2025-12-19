import { createContext, useContext, ReactNode } from 'react';

interface Project {
  id: string;
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
}

interface ProjectsContextType {
  webProjects: Project[];
  videoProjects: Project[];
  designProjects: Project[];
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {

//id and title should be named differently , not exactly same

  const webProjects = [
    {
      id: "socioverse",
      title: "Socioverse",
      year: 2026,
      type: "AI Platform",
      problem: "Creators and businesses struggle to create high-converting content consistently and convert engagement into leads automatically. Most AI tools copy content literally, missing the psychological nuances that make content viral.",
      solution: "An advanced Content Intelligence & Automation Platform that uses 'Emotional DNA' extraction to replicate the psychological impact of successful content without copying the topic. Features a 'Heavy Edge' architecture (Supabase Edge Functions), true multimodal analysis (video/audio/text), and a 'Smart Follow Gate' that increases follower conversion by 30-50%.",
      technologies: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "Supabase", "Edge Functions", "Gemini API", "Bunny CDN"],
      demoLink: "#", // Launching Jan 2026
      githubLink: "#",
      // projectLink: "https://socioverse.ai" // Placeholder if not provided
    },
    {
      id: "up-n-running",
      title: "Up N Running - OTO SaaS",
      year: 2025,
      type: "SaaS Product",
      problem: "Agencies and SMEs struggle with manual, inconsistent lead generation and operational overhead, trapped in a 'feast or famine' cycle.",
      solution: "A comprehensive 6-step client acquisition platform built as a multi-tenant SaaS. Features secure 'house' architecture with Row-Level Security, separate n8n execution pipelines, and AI agents for lead scraping, personalized email outreach, intelligent response handling, and automated proposal generation.",
      technologies: ["Supabase", "PostgreSQL", "n8n", "React", "Row-Level Security", "Google Workspace APIs", "Apollo.io API"],
      demoLink: "https://upnrunning.in",
      githubLink: "#"
    },
    {
      id: "appointment-automation",
      title: "Appointment Automation System",
      year: 2025,
      type: "SaaS Product",
      problem: "Service-based businesses lose revenue due to client no-shows and the administrative burden of manual follow-ups.",
      solution: "A multi-tenant SaaS for managing appointments with a full analytics frontend. Automates confirmations, reminders, and replies via Email and WhatsApp. Features strict data isolation, secure OAuth 2.0 flow, and a decoupled architecture using n8n for orchestration and Supabase for persistence.",
      technologies: ["React", "n8n", "Supabase", "PostgreSQL", "WhatsApp Business API", "Google/Microsoft Graph APIs"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: "instagram-rag",
      title: "Instagram RAG System",
      year: 2025,
      type: "AI Pipeline",
      problem: "Content creators face the 'blank page problem' and struggle to turn competitor analysis into actionable creative strategy.",
      solution: "A 5-module n8n pipeline that turns market intelligence into improved content. Uses multimodal AI to reverse-engineer viral videos, a Pinecone vector database for RAG-based context retrieval, and AI agents to generate brand-aligned scripts. Includes an automated 'Approval & Script Generator' workflow via Telegram.",
      technologies: ["n8n", "Google Gemini 2.5 Flash", "Pinecone", "Telegram API", "Apify"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: "bunktobrains",
      title: "BunkToBrains",
      year: 2024,
      type: "EdTech Platform",
      problem: "Traditional academic metrics like CGPA often fail to prepare students for the practical demands of the modern workforce.",
      solution: "A student-led educational platform focused on real-world skills suitable for careers. Offers workshops, 'Micro-Learnings' on Instagram, and deep tutorials on YouTube. The platform fosters a community for doubt-solving and networking.",
      technologies: ["YouTube", "Instagram", "WhatsApp", "Community Building", "Content Strategy"],
      demoLink: "https://www.bunktobrains.com",
      githubLink: "#"
    },
    {
      id: "website-uptime-monitor",
      title: "Decentralized Uptime Monitor",
      year: 2025,
      type: "Full Stack",
      problem: "Centralized uptime monitoring creates single points of failure and lacks transparency.",
      solution: "A decentralized, incentive-driven monitoring network. A central Hub assigns tasks to independent Validators via WebSockets. Validators check status and claim rewards in Solana. Built with a Turborepo monorepo architecture.",
      technologies: ["Next.js", "TypeScript", "Node.js", "Prisma", "Clerk", "WebSockets", "Solana", "Turborepo"],
      demoLink: "https://maintenance-iota-ten.vercel.app/",
      githubLink: "https://github.com/AnshulRastogi20/Website-Uptime-Check"
    },
    {
      id: "waste-segregator",
      title: "Waste Segregator",
      year: 2025,
      type: "Full Stack",
      problem: "Inefficient waste segregation practices impact sustainability.",
      solution: "A website using TensorFlow to identify and segregate waste types, promoting better recycling habits.",
      technologies: ["React", "TypeScript", "Flask", "TensorFlow", "TailwindCSS", "MongoDB"],
      demoLink: "https://recyclopedia-xi.vercel.app/",
      githubLink: "https://github.com/AnshulRastogi20/waste-segregator"
    },
    {
      id: "attendance-tracker",
      title: "Attendance Tracker",
      year: 2024,
      type: "Full Stack",
      problem: "Students lack easy access to track their own attendance records.",
      solution: "An interactive attendance tracking system with a modern design.",
      technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "NextJS", "MongoDB"],
      demoLink: "https://www.attendit.tech/",
      githubLink: "https://github.com/AnshulRastogi20/self-attendence-system"
    },
    {
      id: "ama-app",
      title: "AMA App",
      year: 2024,
      type: "Full Stack",
      problem: "Difficulty in collecting honest, anonymous feedback.",
      solution: "An Anonymous Messaging App allowing users to send and receive anonymous feedback.",
      technologies: ["React", "TypeScript", "TailwindCSS", "NextJS", "MongoDB"],
      beforeImage: "/ama.png",
      afterImage: "/placeholder.svg",
      demoLink: "https://maintenance-iota-ten.vercel.app/",
      githubLink: "https://github.com/AnshulRastogi20/full-stack-ama-app"
    }
  ];

  const videoProjects = [
    {
      id: "djkc-channel",
      title: "DJKC Channel",
      year: 2025,
      type: "Stories",
      problem: "Client needed a unique and new way to present good stories",
      solution: "Delivered a interesting way to present good stories with top notch sound design and editing",
      technologies: ["DaVinci Resolve", "Adobe Premiere Pro", "After Effects", "Audacity"],
      beforeVideo: "https://www.youtube.com/watch?v=TAflLpsZXO0&t=1771s",
      afterVideo: "",
      demoLink: "https://www.youtube.com/watch?v=I7knjeTSIls&t=2s",
      projectLink: "https://www.youtube.com/@djkcstudios"
    },
  ];

  const designProjects = [
    {
      id: "thumbnails-and-logos",
      title: "Thumnails and Logos",
      year: 2025,
      type: "Branding",
      problem: "Outdated brand identity not resonating with modern audience",
      solution: "Created fresh, minimalist designs with versatile applications",
      technologies: ["Canva","Adobe Illustrator", "Photoshop", "Figma"],
      beforeImage: "/design.png",
      afterImage: "/placeholder.svg",
      demoLink: "https://www.canva.com/design/DAGeNacFzWg/BOb-Mw3kb2zWyMJ1I2k3SA/edit?utm_content=DAGeNacFzWg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      canvaLink: "https://www.canva.com/design/DAGeNacFzWg/BOb-Mw3kb2zWyMJ1I2k3SA/edit?utm_content=DAGeNacFzWg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
  ];

  return (
    <ProjectsContext.Provider value={{ webProjects, videoProjects, designProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
}; 