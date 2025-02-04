import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

type ProjectType = "web" | "video" | "design";
type SortBy = "year" | "type";

const Projects = () => {
  const [selectedType, setSelectedType] = useState<ProjectType | "all">("all");
  const [sortBy, setSortBy] = useState<SortBy>("year");

  const skillPages = [
    {
      title: "Web Development",
      path: "/skills/web-development",
      description: "Full-stack web applications and responsive designs",
      icon: "🌐"
    },
    {
      title: "Video Editing",
      path: "/skills/video-editing",
      description: "Professional video editing and post-production",
      icon: "🎥"
    },
    {
      title: "Graphic Design",
      path: "/skills/graphic-design",
      description: "Creative design solutions and branding",
      icon: "🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white dark:from-dark dark:to-dark/50 pt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-12">Skills & Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillPages.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link to={skill.path}>
                <div className="glass hover:scale-105 transition-transform duration-300 rounded-xl p-6">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;