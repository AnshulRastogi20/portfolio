import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowUp, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 100px
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="contact" className="py-20 bg-light dark:bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 relative"
        >
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
              Get in Touch
            </h2>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={navigateToContact}
                className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 text-white p-0"
                aria-label="Go to contact page"
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Let's discuss your project and make it happen
          </p>
        </motion.div>

        {showScrollButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8"
          >
            <Button
              onClick={scrollToTop}
              className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 text-white p-0 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;