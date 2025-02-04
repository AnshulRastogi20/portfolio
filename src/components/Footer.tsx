import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 dark:bg-dark-card py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary dark:text-accent">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400">Building amazing experiences together</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/AnshulRastogi20" target="_blank" rel="noopener noreferrer" 
               className="text-primary dark:text-accent hover:text-secondary dark:hover:text-accent/80 transition-colors">
              <Github size={24} />
            </a>
            <a href="www.linkedin.com/in/anshulrastogi20" target="_blank" rel="noopener noreferrer"
               className="text-primary dark:text-accent hover:text-secondary dark:hover:text-accent/80 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/AnshulR20" target="_blank" rel="noopener noreferrer"
               className="text-primary dark:text-accent hover:text-secondary dark:hover:text-accent/80 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="mailto:anshulrastogi20@gmail.com"
               className="text-primary dark:text-accent hover:text-secondary dark:hover:text-accent/80 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-8 text-gray-600 dark:text-gray-400"
        >
          <p>&copy; {currentYear} Anshul Rastogi. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;