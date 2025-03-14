import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon, Download } from 'lucide-react';
import { Button } from "../ui/button";

interface MenuItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  onClose: () => void;
}

const MobileMenu = ({ isOpen, menuItems, onClose }: MobileMenuProps) => {
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="md:hidden glass dark:bg-dark/80 border-t border-primary/10 dark:border-white/10"
        >
          <div className="container mx-auto px-4 py-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className="flex items-center space-x-2 px-4 py-3 rounded-lg mb-2 text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 transition-all duration-300"
                  onClick={onClose}
                >
                  <Icon size={20} />
                  <span>{item.title}</span>
                </Link>
              );
            })}
            <Button
              variant="ghost"
              className="flex items-center gap-2 w-full justify-start px-4 py-3 rounded-lg text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10"
              onClick={handleResumeClick}
            >
              <Download size={20} />
              <span>Resume</span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;