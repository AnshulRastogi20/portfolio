import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle = ({ isDark, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;