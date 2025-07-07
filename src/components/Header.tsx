
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import ThemeToggle from './ThemeToggle';
import LoginModal from './LoginModal';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userData, setIsLoggedIn, setUserData } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Franchise', link: '#franchise' },
    { label: 'Premium Info', link: '#premium' },
    { label: 'Contact Us', link: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleProfileClick = () => {
    navigate('/user-panel');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    navigate('/');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block">
                {/* Light theme logo */}
                <img 
                  src="/lovable-uploads/8f8fd103-0c72-489c-a2d7-31ff7dd23a8d.png" 
                  alt="Khan Trading World"
                  className="h-8 w-auto dark:hidden"
                />
                {/* Dark theme logo */}
                <img 
                  src="/lovable-uploads/7c581ad5-5b71-4691-aa34-95b7e9abd204.png" 
                  alt="Khan Trading World"
                  className="h-8 w-auto hidden dark:block"
                />
              </div>
              <div className="sm:hidden">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KTW</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => scrollToSection(item.link)}
                  className="text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Button>
              ))}
              
              {!isLoggedIn ? (
                <Button
                  variant="ghost"
                  onClick={handleLoginClick}
                  className="text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  Login / Signup
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span className="hidden sm:inline">{userData?.name || 'Profile'}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleProfileClick}>
                      <User className="h-4 w-4 mr-2" />
                      User Panel
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </nav>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden w-9 h-9 p-0"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2 animate-fade-in">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => scrollToSection(item.link)}
                  className="w-full justify-start text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Button>
              ))}
              
              {!isLoggedIn ? (
                <Button
                  variant="ghost"
                  onClick={handleLoginClick}
                  className="w-full justify-start text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  Login / Signup
                </Button>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleProfileClick}
                    className="w-full justify-start text-sm font-medium hover:text-primary transition-colors duration-200"
                  >
                    <User className="h-4 w-4 mr-2" />
                    User Panel
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="w-full justify-start text-sm font-medium hover:text-primary transition-colors duration-200"
                  >
                    Logout
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;
