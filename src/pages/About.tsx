import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "web" | "video" | "design" | "skill-web" | "skill-video" | "skill-design";
  path?: string;
}

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState<"web" | "video" | "design" | null>(null);

  const timelineData: TimelineItem[] = [
    // Main Skills
    {
      year: "2019",
      title: "Web Development",
      company: "Primary Skill",
      description: "Full-stack development with modern technologies",
      type: "web",
      path: "/skills/web-development"
    },
    {
      year: "2024",
      title: "Video Editing",
      company: "Primary Skill",
      description: "Professional video editing and post-production",
      type: "video",
      path: "/skills/video-editing"
    },
    {
      year: "2024",
      title: "Graphic Design",
      company: "Secondry Skill",
      description: "Creative design solutions for digital media",
      type: "design",
      path: "/skills/graphic-design"
    },
    // Skill-specific achievements
    {
      year: "2019",
      title: "INGENS MUN Website",
      company: "Personal Project",
      description: "Built using HTML & CSS in ONE DAY",
      type: "skill-web"
    },
    {
      year: "2024",
      title: "AMA APP",
      company: "Personal Project",
      description: "Built using NextJS, TypeScript , and MongoDB",
      type: "skill-web"
    },
    {
      year: "2024",
      title: "DJKC Studios Website",
      company: "Professional Project",
      description: "Built using NextJS, TypeScript, and MongoDB",
      type: "skill-web"
    },
    {
      year: "2024",
      title: "AttendIT",
      company: "Personal Project",
      description: "Built using NextJS , TypeScript, MongoDB & Material UI",
      type: "skill-web"
    },
    {
      year: "2025",
      title: "Portfolio Website",
      company: "Personal Project",
      description: "Built using React, TypeScript, and Framer Motion",
      type: "skill-web"
    },
    {
      year: "2023",
      title: "Short Film Edit",
      company: "Creative Studios",
      description: "Award-winning short film editing",
      type: "skill-video"
    },
    {
      year: "2023",
      title: "Brand Identity",
      company: "Design Agency",
      description: "Complete brand identity package",
      type: "skill-design"
    }
  ];

  const mainSkills = timelineData.slice(0, 3);
  const skillSpecificItems = timelineData.slice(3);

  const renderSkillGraph = (skillType: "web" | "video" | "design", position: number) => {
    const skillItems = skillSpecificItems.filter(item => item.type === `skill-${skillType}`);
    
    return (
      <AnimatePresence mode="wait">
        {selectedSkill === skillType && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute w-full md:w-1/3 ${
              position === 0 
                ? 'md:left-[16.67%]' 
                : position === 1 
                  ? 'md:left-1/2' 
                  : 'md:left-[83.33%]'
            } transform -translate-x-1/2 left-1/2`}
          >
            {/* Vertical Line */}
            <div className="absolute left-1/2 w-1 h-full bg-primary/30 dark:bg-white/20" />
            
            {/* Skill Items */}
            <div className="pt-8 space-y-12">
              {skillItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex justify-center"
                >
                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary dark:bg-white rounded-full">
                    <div className="absolute w-8 h-8 bg-primary/20 dark:bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full max-w-[300px] px-4"
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border border-primary/10 dark:border-white/10">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-primary dark:text-white">{item.year}</span>
                        <div className="h-8 w-1 bg-primary dark:bg-white/20 rounded-full" />
                        <div>
                          <h3 className="text-xl font-semibold text-primary dark:text-white">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-light to-white dark:from-dark dark:to-dark/50 py-20 px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-32 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative mb-12"
          >
            <div className="w-72 h-72 overflow-hidden border-4 border-primary/20 dark:border-white/20 rounded-2xl">
              <img 
                src="/photo.png"
                alt="Anshul Rastogi"
                className="w-full h-full object-cover object-top scale-95 transform rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 dark:bg-white/10 animate-pulse rounded-2xl" />
          </motion.div>

          <div className="flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-primary dark:text-white mb-4"
            >
              Anshul Rastogi
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-3xl text-primary/80 dark:text-white/80 mb-6"
            >
              Full Stack Developer & Creative Professional
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center"
            >
              A passionate developer and creative professional with expertise in web development, 
              video editing, and graphic design. I love bringing ideas to life through code and creativity, 
              always striving to create meaningful and impactful digital experiences.
            </motion.p>
          </div>
        </motion.div>

        {/* Existing Journey Section */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-24 text-center"
        >
          My Journey
        </motion.h2>

        <div className="relative min-h-[800px]">
          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {mainSkills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
                onClick={() => {
                  const baseType = item.type.replace('skill-', '') as "web" | "video" | "design";
                  setSelectedSkill(selectedSkill === baseType ? null : baseType);
                }}
              >
                {/* Timeline Point */}
                <div className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  selectedSkill === item.type 
                    ? 'bg-accent dark:bg-accent' 
                    : 'bg-primary dark:bg-white'
                }`}>
                  <div className="absolute w-8 h-8 bg-primary/20 dark:bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full max-w-[300px] mt-8 cursor-pointer transition-transform duration-300 ${
                    selectedSkill === item.type ? 'scale-105' : ''
                  }`}
                >
                  <Card className={`p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm border ${
                    selectedSkill === item.type
                      ? 'bg-accent/10 dark:bg-accent/10 border-accent'
                      : 'bg-white/80 dark:bg-dark-card/80 border-primary/10 dark:border-white/10'
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-bold text-primary dark:text-white">{item.year}</span>
                      <div className="h-8 w-1 bg-primary dark:bg-white/20 rounded-full" />
                      <div>
                        <h3 className="text-xl font-semibold text-primary dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Skill-specific Graphs */}
          {renderSkillGraph("web", 0)}
          {renderSkillGraph("video", 1)}
          {renderSkillGraph("design", 2)}
        </div>
      </motion.div>
    </section>
  );
};

export default About;