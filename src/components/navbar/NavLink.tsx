import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  title: string;
}

const NavLink = ({ to, icon: Icon, title }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
        isActive 
          ? 'bg-primary dark:bg-accent text-white dark:text-primary-foreground' 
          : 'text-primary dark:text-accent hover:bg-primary/10 dark:hover:bg-accent/10'
      }`}
    >
      <Icon size={20} />
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;