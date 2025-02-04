import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const journeyItems = [
    {
      year: "2019",
      title: "Web Development",
      description: "Full-stack development with modern technologies",
      path: "/skills/web-development"
    },
    {
      year: "2024",
      title: "Video Editing",
      description: "Professional video editing and post-production",
      path: "/skills/video-editing"
    },
    {
      year: "2024",
      title: "Graphic Design",
      description: "Creative design solutions for digital media",
      path: "/skills/graphic-design"
    }
  ];

  return (
    <section className="py-20 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-16 text-center"
        >
          My Journey
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {journeyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link to={item.path}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border border-primary/10 dark:border-primary/20 hover:scale-105 group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-primary dark:text-primary">{item.year}</span>
                    <div className="h-8 w-1 bg-primary dark:bg-primary/40 rounded-full" />
                    <h3 className="text-xl font-semibold text-primary dark:text-primary group-hover:text-secondary dark:group-hover:text-secondary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;