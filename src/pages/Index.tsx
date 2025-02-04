import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CursorFollow from '../components/CursorFollow';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Konami code easter egg
    let keys: string[] = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    const handleKeyDown = (e: KeyboardEvent) => {
      keys.push(e.key);
      keys = keys.slice(-10);

      if (JSON.stringify(keys) === JSON.stringify(konamiCode)) {
        toast({
          title: "🎮 Konami Code Activated!",
          description: "You've unlocked a secret achievement!",
          duration: 5000,
        });
        
        document.body.style.animation = "rainbow-bg 5s linear";
        setTimeout(() => {
          document.body.style.animation = "";
        }, 5000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toast]);

  return (
    <AnimatePresence mode="wait">
      <div className="bg-gradient-to-br from-light to-white dark:from-dark dark:to-dark/50 min-h-screen transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <CursorFollow />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Hero />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </motion.main>
      </div>
    </AnimatePresence>
  );
};

export default Index;