import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { themeConfig, Theme } from '../utils/themeColors';
import WhiteCarLogo from "../assets/images/car/white_design_clean.png";

interface NavigationProps {
  theme: Theme;
}

export default function Navigation({ theme }: NavigationProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const colors = themeConfig[theme];

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  // Circle and logo sizes (same ratio as Hero)
  const circleSize = 40; // px
  const logoSize = circleSize * 0.85;

  return (
    <nav className={`fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b ${colors.border} transition-all`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section: logo + title */}
          <div className="flex items-center space-x-3">
            {/* Circle with logo */}
            <div
              className={`rounded-full shadow-lg relative bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center`}
              style={{
                width: `${circleSize}px`,
                height: `${circleSize}px`,
              }}
            >
              <img
                src={WhiteCarLogo}
                alt="F1 Car Logo"
                className="object-contain"
                style={{
                  width: `${logoSize}px`,
                  height: `${logoSize}px`,
                }}
              />
            </div>

            {/* Text next to circle */}
            <span className="text-white font-extrabold text-xl tracking-wider ml-2 sm:text-2xl" style={{ fontFamily: "'Jubilee', sans-serif" }}>
              Jubilee 2
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-1">
            {['home', 'car', 'gallery', 'team', 'members', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-2 rounded-lg text-gray-300 ${colors.hover} transition-colors font-medium text-sm`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden bg-black/98 border-t ${colors.border}`}>
          <div className="px-4 py-4 space-y-2">
            {['home', 'car', 'gallery', 'team', 'members', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-3 py-2 text-gray-300 ${colors.hover} transition-colors rounded-lg`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
