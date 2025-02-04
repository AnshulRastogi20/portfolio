import { createContext, useContext, ReactNode } from 'react';

interface Project {
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
  behanceLink?: string;
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
        title: "INGENS MUN",
        year: 2021  ,
        type: "Basicest",
        problem: "A friend of mine needed a basic website for her work",
        solution: "Built a scalable e-commerce solution with modern tech stack, including real-time inventory management and analytics",
        technologies: ["React", "Node.js", "MongoDB", "Redux", "TailwindCSS"],
        beforeImage: "/placeholder.svg",
        afterImage: "/placeholder.svg",
        demoLink: "#",
        githubLink: "#"
      },
      {
        title: "DJKC Studios Website",
        year: 2025,
        type: "Frontend",
        problem: "Needed a unique way to showcase the brand and increase its online presence",
        solution: "Created an interactive and modern website with animations and modern design principles",
        technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS" , "NextJS"],
        beforeImage: "/placeholder.svg",
        afterImage: "/placeholder.svg",
        demoLink: "Under Maintainence",
        githubLink: "#"
      },
      {
        title: "Attendance Tracker Website",
        year: 2024,
        type: "Full Stack",
        problem: "Needed a a way to give track attendance of students in their hands",
        solution: "Created an interactive attendance tracer website with modern design",
        technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "NextJS", "MongoDB"],
        beforeImage: "/placeholder.svg",
        afterImage: "/placeholder.svg",
        demoLink: "https://www.attendit.tech/",
        githubLink: "https://github.com/AnshulRastogi20/self-attendence-system"
      },
      {
        title: "Portfolio Website",
        year: 2025,
        type: "Frontend",
        problem: "Needed a unique way to showcase skills and projects",
        solution: "Created an interactive portfolio with animations and modern design principles",
        technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
        beforeImage: "/placeholder.svg",
        afterImage: "/placeholder.svg",
        demoLink: "#",
        githubLink: "#"
      },
      {
        title: "AMA App",
        year: 2024,
        type: "Full Stack",
        problem: "Needed a way to provide feedback anonymously",
        solution: "Created an Anonymous Messaging App with modern design",
        technologies: ["React", "TypeScript", "TailwindCSS", "NextJS", "MongoDB"],
        beforeImage: "/placeholder.svg",
        afterImage: "/placeholder.svg",
        demoLink: "#",
        githubLink: "#"
      }
    // ... other web projects
  ];

  const videoProjects = [
    {
      title: "DJKC Channel",
      year: 2025,
      type: "Stories",
      problem: "Needed a unique and new way to present good stories",
      solution: "Delivered a new way to present good stories with top notch sound design and editing",
      technologies: ["DaVinci Resolve", "Adobe Premiere Pro", "After Effects", "Audacity"],
      beforeVideo: "/placeholder.svg",
      afterVideo: "/placeholder.svg",
      demoLink: "#",
      projectLink: "#"
    },
    // ... other video projects
  ];

  const designProjects = [
    {
      title: "Brand Identity Redesign",
      year: 2025,
      type: "Branding",
      problem: "Outdated brand identity not resonating with modern audience",
      solution: "Created a fresh, minimalist design system with versatile applications",
      technologies: ["Canva","Adobe Illustrator", "Photoshop", "Figma"],
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      demoLink: "#",
      behanceLink: "#"
    },
    // ... other design projects
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