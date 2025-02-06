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
        title: "INGENS MUN",
        year: 2021  ,
        type: "Basicest",
        problem: "A friend of mine needed a basic website for her work",
        solution: "Built a scalable e-commerce solution with modern tech stack, including real-time inventory management and analytics",
        technologies: ["React", "Node.js", "MongoDB", "Redux", "TailwindCSS"],
        beforeImage: "/ingens.png",
        afterImage: "/placeholder.svg",
        demoLink: "https://ingens-mun.netlify.app/#",
        githubLink: "https://github.com/AnshulRastogi20/INGENS-MUN"
      },
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
      // },
      {
        title: "Attendance Tracker Website",
        year: 2024,
        type: "Full Stack",
        problem: "Needed a a way to give track attendance of students in their hands",
        solution: "Created an interactive attendance tracer website with modern design",
        technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "NextJS", "MongoDB"],
        beforeImage: "/attendance.png",
        afterImage: "",
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
        beforeImage: "/portfolio.png",
        afterImage: "/placeholder.svg",
        demoLink: "https://anshulrastogi.me/",
        githubLink: "https://github.com/AnshulRastogi20/portfolio"
      },
      {
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
      }
    // ... other web projects
  ];

  const videoProjects = [
    {
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
    // ... other video projects
  ];

  const designProjects = [
    {
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