import React from 'react';
import { Menu, X, Bell } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'opportunities', label: 'Opportunities' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 float-animation">
              <div className="flex items-center space-x-3">
                <img 
                  src="/LOGO_KDKR.png" 
                  alt="OUR KANDUKUR Logo" 
                  className="w-10 h-10 rounded-lg object-contain bg-white p-1 shadow-md"
                />
                <div>
                  <h1 className="text-2xl font-bold text-blue-800">OUR KANDUKUR</h1>
                  <p className="text-xs text-gray-600">Startup Community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all btn-3d ${
                    currentSection === item.id
                      ? 'bg-blue-800 text-white neon-glow'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="relative">
                <button className="p-2 text-gray-700 hover:text-blue-800 hover:bg-blue-100 rounded-md transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentSection === item.id
                      ? 'bg-blue-800 text-white'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;