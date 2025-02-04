import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Video, Palette } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Web Development",
      icon: Code,
      description: "Building modern web applications with React, Next.js, and TypeScript",
      technologies: ["React", "TypeScript", "TailwindCSS", "Node.js"]
    },
    {
      title: "Video Editing",
      icon: Video,
      description: "Professional video editing and post-production",
      technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro"]
    },
    {
      title: "Graphic Design",
      icon: Palette,
      description: "Creative design solutions for digital and print media",
      technologies: ["Photoshop", "Illustrator", "Figma", "InDesign"]
    }
  ];

  return (
    <section className="section-padding bg-light dark:bg-dark">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-primary dark:text-white mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="glass hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <skill.icon className="w-8 h-8 text-primary dark:text-accent" />
                    <h3 className="text-xl font-semibold text-primary dark:text-white">{skill.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;