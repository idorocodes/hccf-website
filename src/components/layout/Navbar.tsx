import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HccfLogo } from '../common/HccfLogo';
import { Search, Menu, X, Heart, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname, setMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Fellowship', path: '/fellowship' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Media', path: '/media' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const moreLinks = [
    { name: 'Ministry Fit Quiz', path: '/ministries' },
    { name: 'Daily Devotional', path: '/devotional' },
    { name: 'Study Resources & Downloads', path: '/resources' },
    { name: 'Sermons Archive', path: '/sermons' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Testimonies', path: '/testimonies' },
    { name: 'Announcements', path: '/announcements' },
    { name: "First Timer's Welcome", path: '/first-timer' },
    { name: 'Prayer Request', path: '/prayer-request' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-lightgray py-3 shadow-sm'
          : 'bg-brand-cream/85 backdrop-blur-sm border-b border-brand-sand/60 py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="outline-none focus-visible:ring-2 focus-visible:ring-black rounded">
            <HccfLogo size="md" textVariant="dark" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-semibold transition-colors relative outline-none focus-visible:ring-2 focus-visible:ring-black rounded ${
                  isActive(link.path)
                    ? 'text-black font-extrabold'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-black" />
                )}
              </Link>
            ))}

            {/* Dropdown for More */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-neutral-700 hover:text-black transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
                aria-expanded={dropdownOpen}
                aria-label="More navigation links"
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180 text-black' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#FAF7F2] border border-[#E5DFD3] rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                        isActive(item.path)
                          ? 'text-black bg-[#F4EFE6] font-bold'
                          : 'text-neutral-700 hover:text-black hover:bg-[#F4EFE6]/70'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right actions: Search + Prominent Give Button */}
          <div className="flex items-center space-x-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-neutral-700 hover:text-black hover:bg-[#EAE3D6]/60 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-black outline-none"
              aria-label="Search website"
              title="Search (Sermons, Events, Ministries)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Give Button */}
            <Link
              to="/give"
              className="inline-flex items-center gap-2 bg-[#F4D900] hover:bg-[#E5CB00] active:scale-[0.98] text-[#141414] font-black px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-sm transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-black outline-none"
            >
              <Heart className="w-4 h-4 fill-[#141414]" />
              <span>Give</span>
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-800 hover:text-black hover:bg-[#EAE3D6] rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
