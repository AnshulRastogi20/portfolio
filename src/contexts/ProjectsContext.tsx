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
  const webProjects = [
    {
      id: "decentralized-uptime-monitor",
      title: "Decentralized Uptime Monitor",
      year: 2025,
      type: "Full Stack",
      problem: "Traditional uptime monitoring services are centralized, creating a single point of failure and requiring users to trust that the provider reports status accurately. This model is vulnerable to downtime, censorship, and manipulation, and offers no mechanism to distribute workload or reward external contributors, leaving critical websites—and increasingly decentralized applications—at risk of unnoticed outages and opaque reporting.",
      solution: "We built a decentralized, incentive-driven uptime monitoring network in which a central Hub assigns HTTP-status check tasks every three minutes to a pool of independent Validators selected at random. Validators receive tasks over WebSockets, perform HTTP requests to determine each site's status (good/bad/unknown), and then claim compensation in Solana (SOL) via on-chain smart contracts—ensuring transparent, immutable payments. The system is implemented in a Turborepo monorepo: the Hub and Validator services are written in Node.js/TypeScript (with Prisma/PostgreSQL for data and Clerk for authentication), the frontend is a Next.js/React app where users register sites, view real-time status dashboards, and validators connect their wallets, and all core logic is shared via common packages. This architecture eliminates single points of failure, fosters trust through randomness and cryptographic incentives, and delivers a resilient, censorship-resistant alternative to centralized uptime monitoring.",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Clerk", "WebSockets", "Solana", "Turborepo"],
      demoLink: "https://maintenance-iota-ten.vercel.app/",
      githubLink: "https://github.com/AnshulRastogi20/Website-Uptime-Check"
    },    
    {
      id: "waste-segregator",
      title: "Waste Segregator Website",
      year: 2025,
      type: "Full Stack",
      problem: "Landfills impacting sustainability and degrading air quality",
      solution: "Created an very simple website to segregate waste and mark them with different colours",
      technologies: ["React", "TypeScript","Flask","TensorFlow", "TailwindCSS", "MongoDB"],
      demoLink: "https://recyclopedia-xi.vercel.app/",
      githubLink: "https://github.com/AnshulRastogi20/waste-segregator"
    },
    {
      id: "attendance-tracker",
      title: "Attendance Tracker Website",
      year: 2024,
      type: "Full Stack",
      problem: "Needed a a way to give track attendance of students in their hands",
      solution: "Created an interactive attendance tracer website with modern design",
      technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "NextJS", "MongoDB"],

      demoLink: "https://www.attendit.tech/",
      githubLink: "https://github.com/AnshulRastogi20/self-attendence-system"
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      year: 2025,
      type: "Frontend",
      problem: "Needed a unique way to showcase skills and projects",
      solution: "Created an interactive portfolio with animations and modern design principles",
      technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
      beforeImage: "/portfolio.png",
      afterImage: "/placeholder.svg",
      demoLink: "https://anshulrastogi.me/",
      githubLink: "https://github.com/AnshulRastogi20/portfolio"
    },
    {
      id: "ama-app",
      title: "AMA App",
      year: 2024,
      type: "Full Stack",
      problem: "Needed a way to provide feedback anonymously",
      solution: "Created an Anonymous Messaging App with modern design",
      technologies: ["React", "TypeScript", "TailwindCSS", "NextJS", "MongoDB"],
      beforeImage: "/ama.png",
      afterImage: "/placeholder.svg",
      demoLink: "https://maintenance-iota-ten.vercel.app/",
      githubLink: "https://github.com/AnshulRastogi20/full-stack-ama-app"
    },
    {
      id: "ingens-mun",
      title: "INGENS MUN",
      year: 2021,
      type: "Basicest",
      problem: "A friend of mine needed a basic website for her work",
      solution: "Built a scalable e-commerce solution with modern tech stack, including real-time inventory management and analytics",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "TailwindCSS"],
      beforeImage: "/ingens.png",
      afterImage: "/placeholder.svg",
      demoLink: "https://ingens-mun.netlify.app/#",
      githubLink: "https://github.com/AnshulRastogi20/INGENS-MUN"
    }
    // {
      //   title: "DJKC Studios Website",
      //   year: 2025,
      //   type: "Frontend",
      //   problem: "Needed a unique way to showcase the brand and increase its online presence",
      //   solution: "Created an interactive and modern website with animations and modern design principles",
      //   technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS" , "NextJS"],
      //   beforeImage: "/maintenence.png",
      //   afterImage: "/placeholder.svg",
      //   demoLink: "https://maintenance-iota-ten.vercel.app/",
      //   githubLink: ""
      // }
      
    
    
    
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