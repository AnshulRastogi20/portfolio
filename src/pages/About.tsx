import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, ShieldCheck, Heart, Zap, Brain, Rocket, GraduationCap } from "lucide-react";

const About = () => {
  const philosophies = [
    {
      icon: <Target className="w-8 h-8 text-primary dark:text-accent" />,
      title: "Depth Over Hacks",
      description: "Prioritizing robust, scalable systems like self-hosted n8n and multi-tenant SaaS architectures over quick, superficial fixes. Building for the long term."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary dark:text-accent" />,
      title: "Authenticity & Transparency",
      description: "Building trust by openly sharing learnings from both successes and failures. Analyzing technical shortcomings to demonstrate a mature approach."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary dark:text-accent" />,
      title: "Value-First Approach",
      description: "Providing tangible value before making an ask. Engaging thoughtfully and offering resources to establish expertise and rapport."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary dark:text-accent" />,
      title: "Offer-Centric Strategy",
      description: "Creating irresistible offers by identifying deep pain points, making clear promises, and providing strong risk reversals."
    }
  ];

  const ventures = [
    {
      title: "Socioverse",
      role: "Founder & Sole Architect",
      status: "Launching Jan 2026",
      description: "Advanced Content Intelligence & Automation Platform. Uses 'Emotional DNA' extraction to replicate the psychological impact of viral content. Features a 'Heavy Edge' architecture and multimodal analysis.",
      icon: <Brain className="w-10 h-10 mb-4 text-secondary dark:text-secondary" />,
      link: "https://socioverse.io"
    },
    {
      title: "Up N Running",
      role: "Founder",
      status: "Active Venture",
      description: "A productized AI Automation Agency. Delivers fixed-scope, transparent pricing, and expert setup. Products include the OTO (Outreach to Onboard) SaaS system and Appointment Automation.",
      icon: <Rocket className="w-10 h-10 mb-4 text-secondary dark:text-secondary" />,
      link: "https://upnrunning.in"
    },
    {
      title: "BunkToBrains",
      role: "Co-Founder",
      status: "Educational Platform",
      description: "A student-led platform focusing on practical, real-world skills beyond academic metrics. Offers workshops, 'Micro-Learnings', and a community for professional development.",
      icon: <GraduationCap className="w-10 h-10 mb-4 text-secondary dark:text-secondary" />,
      link: "https://www.bunktobrains.com"
    }
  ];

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
          className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-4xl mx-auto px-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative mb-8 md:mb-12"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden border-4 border-primary/20 dark:border-white/20 rounded-full shadow-2xl">
              <img 
                src="/photo.png"
                alt="Anshul Rastogi"
                className="w-full h-full object-cover object-top scale-100 transform"
              />
            </div>
            <div className="absolute inset-0 bg-primary/5 dark:bg-white/5 animate-pulse rounded-full" />
          </motion.div>

          <div className="flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4 md:mb-6"
            >
              Anshul Rastogi
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary/80 dark:text-white/90 mb-6 md:mb-8"
            >
              Systems Architect
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center leading-relaxed px-4"
            >
              I design and implement robust, end-to-end ecosystems that solve foundational business challenges. 
              My mission is to replace manual friction with intelligent, efficient, and automated pathways to growth.
            </motion.p>
          </div>
        </motion.div>

        {/* Core Philosophy Section */}
        <div className="mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary dark:text-white mb-12 md:mb-16"
          >
            Core Philosophy
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 md:p-8 glass hover:shadow-xl transition-all duration-300 border-primary/10">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="bg-primary/10 dark:bg-white/10 p-3 md:p-4 rounded-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-primary dark:text-white mb-2 md:mb-3">{item.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ventures Section */}
        <div className="mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary dark:text-white mb-12 md:mb-16"
          >
            Current Ventures
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ventures.map((venture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <a 
                  href={venture.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full p-6 md:p-8 glass flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border-secondary/20 cursor-pointer">
                    <div className="bg-secondary/10 p-4 md:p-6 rounded-full mb-4 md:mb-6">
                      {venture.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-2">{venture.title}</h3>
                    <div className="inline-block px-3 py-1 bg-primary/10 dark:bg-white/10 rounded-full text-xs md:text-sm font-medium mb-4">
                      {venture.role}
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                      {venture.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 w-full">
                      <span className="text-xs md:text-sm text-gray-500">{venture.status}</span>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;