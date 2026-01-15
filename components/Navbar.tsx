import React, { useState, useEffect } from 'react';
import { Menu, X, Eye } from 'lucide-react';
import { NavItem, SectionId } from '../types';

const navItems: NavItem[] = [
  { label: 'Problem', href: `#${SectionId.PROBLEM}` },
  { label: 'Solution', href: `#${SectionId.SOLUTION}` },
  { label: 'Demo', href: `#${SectionId.DEMO}` },
  { label: 'Impact', href: `#${SectionId.IMPACT}` },
  { label: 'Reflection', href: `#${SectionId.REFLECTION}` },
  { label: 'Team', href: `#${SectionId.TEAM}` },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-beige-50/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Eye className="h-8 w-8 text-brand-yellow" />
            <span className="font-display font-bold text-xl tracking-tight text-brand-dark">TrapAlert</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-brand-gray hover:text-brand-dark transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-beige-50 border-t border-beige-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark hover:bg-beige-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;