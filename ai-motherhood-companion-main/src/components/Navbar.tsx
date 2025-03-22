
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Bell, Menu, X } from 'lucide-react';

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-mother-blue-dark font-display font-bold text-2xl">mAI</span>
            <span className="text-mother-blue-dark font-display font-medium">Motherhood</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              className={`nav-link ${isActive('/marketplace') ? 'active' : ''}`}
            >
              Marketplace
            </Link>
            <Link
              to="/consultation"
              className={`nav-link ${isActive('/consultation') ? 'active' : ''}`}
            >
              Consultation
            </Link>
            <Link
              to="/account"
              className={`nav-link ${isActive('/account') ? 'active' : ''}`}
            >
              My Account
            </Link>
            
            <div className="ml-4 flex items-center space-x-2">
              <Link
                to="/chat"
                className="p-2 bg-mother-blue/20 text-mother-blue-dark rounded-full hover:bg-mother-blue/30 transition-colors"
                aria-label="Chat Assistant"
              >
                <MessageCircle size={20} />
              </Link>
              <button
                className="p-2 bg-mother-gray/30 text-mother-gray-dark rounded-full hover:bg-mother-gray/50 transition-colors"
                aria-label="Notifications"
              >
                <Bell size={20} />
              </button>
              <button className="btn-emergency ml-2 py-2 px-4 flex items-center">
                <span>Emergency</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-mother-blue-dark" />
            ) : (
              <Menu className="h-6 w-6 text-mother-blue-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className={`block py-2 px-3 rounded-md ${
                isActive('/') ? 'bg-mother-blue/20 text-mother-blue-dark' : 'text-mother-gray-dark'
              }`}
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              className={`block py-2 px-3 rounded-md ${
                isActive('/marketplace') ? 'bg-mother-blue/20 text-mother-blue-dark' : 'text-mother-gray-dark'
              }`}
            >
              Marketplace
            </Link>
            <Link
              to="/consultation"
              className={`block py-2 px-3 rounded-md ${
                isActive('/consultation') ? 'bg-mother-blue/20 text-mother-blue-dark' : 'text-mother-gray-dark'
              }`}
            >
              Consultation
            </Link>
            <Link
              to="/account"
              className={`block py-2 px-3 rounded-md ${
                isActive('/account') ? 'bg-mother-blue/20 text-mother-blue-dark' : 'text-mother-gray-dark'
              }`}
            >
              My Account
            </Link>
            <Link
              to="/chat"
              className="block py-2 px-3 rounded-md bg-mother-blue/10 text-mother-blue-dark"
            >
              Chat Assistant
            </Link>
            <button className="w-full btn-emergency mt-2 flex justify-center items-center">
              Emergency Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
