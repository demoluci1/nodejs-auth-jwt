
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import CustomButton from '../ui/CustomButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Partners', path: '/partners' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="solar-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/46906533-fc19-459f-acf6-b22b3d1e410e.png" 
              alt="Tirupati Enterprises Logo" 
              className="h-14 w-auto"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        'relative text-base font-medium transition-colors hover:text-tirupati-blue',
                        isActive
                          ? 'text-tirupati-blue after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-tirupati-blue after:content-[""]'
                          : 'text-gray-800'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <CustomButton variant="primary" size="md">
              Contact Us
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden text-gray-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 flex flex-col gap-8">
          <ul className="flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-lg font-medium transition-colors hover:text-tirupati-blue block',
                      isActive ? 'text-tirupati-blue' : 'text-gray-800'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <CustomButton variant="primary" size="lg" className="w-full">
            Contact Us
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
