import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light to-white dark:from-dark dark:to-dark/50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <TypeAnimation
            sequence={[
              "Hi, I'm Anshul Rastogi",
              1000,
              "I'm a Web Developer",
              1000,
              "I'm a Video Editor",
              1000,
              "I'm a Graphic Designer",
              1000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary dark:text-white"
            repeat={Infinity}
          />
        </motion.div>
        
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl mb-8 text-secondary dark:text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Building Amazing Experiences
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-secondary transition-all transform hover:scale-105 dark:bg-accent dark:hover:bg-accent/80"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-white dark:bg-dark text-primary dark:text-accent border-2 border-primary dark:border-accent px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary dark:text-accent">
          <svg 
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;