import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, User, Mail, Briefcase, BookOpen, Download } from 'lucide-react';
import NavLink from './navbar/NavLink';
import ThemeToggle from './navbar/ThemeToggle';
import MobileMenu from './navbar/MobileMenu';
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/', icon: Home },
    { title: 'About', href: '/about', icon: User },
    { title: 'Skills & Projects', href: '/projects', icon: Briefcase },
    { title: 'Blog', href: '/blog', icon: BookOpen },
    { title: 'Contact', href: '/contact', icon: Mail },
  ];

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const handleResumeClick = () => {
    window.open("/cv.pdf", "_blank");
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`mx-auto px-4 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-primary dark:text-accent hover:text-secondary dark:hover:text-accent/80 transition-colors"
            >
              Anshul's Portfolio
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.href}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
              {/* <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} /> */}
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-primary dark:text-accent hover:bg-primary/10 dark:hover:bg-accent/10 hover:text-primary dark:hover:text-accent"
                onClick={handleResumeClick}
              >
                Resume
                <Download className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              <button
                className="p-2 rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        menuItems={menuItems}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
};

export default Navbar;