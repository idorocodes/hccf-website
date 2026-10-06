import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HccfLogo } from '../common/HccfLogo';
import { X, Search, Heart, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import { churchInfo } from '../../data/church';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
}) => {
  const location = useLocation();

  if (!isOpen) return null;

  const primaryLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Fellowship', path: '/fellowship' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Ministry Fit Quiz', path: '/ministries' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Daily Devotional', path: '/devotional' },
    { name: 'Study Resources & Downloads', path: '/resources' },
    { name: 'Media Hub', path: '/media' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Testimonies', path: '/testimonies' },
    { name: 'Announcements', path: '/announcements' },
    { name: "First Timer's Welcome", path: '/first-timer' },
    { name: 'Prayer Request', path: '/prayer-request' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSearchClick = () => {
    onClose();
    onOpenSearch();
  };

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden bg-[#FAF7F2] text-[#141414] flex flex-col overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#E5DFD3] bg-[#FAF7F2] sticky top-0 z-20">
        <Link to="/" onClick={onClose}>
          <HccfLogo size="sm" textVariant="dark" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="p-2 text-neutral-700 hover:text-black rounded-lg hover:bg-[#EAE3D6] transition-colors"
          aria-label="Close navigation"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 px-4 py-6 space-y-6">
        {/* Prominent Give Button */}
        <Link
          to="/give"
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 bg-[#F4D900] active:bg-[#C9B400] text-[#141414] font-black text-base py-3.5 px-6 rounded-lg shadow-sm transition-all"
        >
          <Heart className="w-5 h-5 fill-[#141414]" />
          <span>Give to the Work</span>
        </Link>

        {/* Quick Search Button */}
        <button
          type="button"
          onClick={handleSearchClick}
          className="w-full flex items-center justify-between px-4 py-3 bg-[#F3EFE6] border border-[#E2DBD0] rounded-lg text-neutral-800 text-sm hover:border-black/50 transition-colors"
        >
          <span className="flex items-center gap-2 text-neutral-700 font-medium">
            <Search className="w-4 h-4 text-black" />
            Search sermons, events, ministries...
          </span>
          <span className="text-xs bg-[#EAE3D6] px-2 py-0.5 rounded text-neutral-800 font-semibold">Find</span>
        </button>

        {/* Navigation list */}
        <nav className="divide-y divide-[#EAE3D6] border-t border-b border-[#EAE3D6]">
          {primaryLinks.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center justify-between py-3.5 px-2 text-base font-semibold transition-colors ${
                  active ? 'text-black font-extrabold bg-[#F3EFE6]' : 'text-neutral-800 hover:text-black'
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className={`w-4 h-4 ${active ? 'text-black' : 'text-neutral-400'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Campus Fellowship Info Card */}
        <div className="bg-[#F3EFE6] border border-[#E5DFD3] rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Weekly Gatherings</span>
          </div>
          <div className="space-y-2 text-xs text-neutral-700">
            <div className="flex items-start gap-2">
              <Clock className="w-3.5 h-3.5 text-black mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-black">Sunday Fellowship</p>
                <p className="text-neutral-600">Sundays • {churchInfo.serviceTimes[0].time}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-black mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-black">Campus Venue</p>
                <p className="text-neutral-600">{churchInfo.location.mainVenue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer in drawer */}
      <div className="p-4 border-t border-[#E5DFD3] bg-[#EAE3D6]/60 text-center text-xs text-neutral-600">
        <p>© {new Date().getFullYear()} {churchInfo.shortName} • {churchInfo.institution}</p>
        <p className="text-[11px] text-neutral-500 mt-1">{churchInfo.themeScripture} • Ekiti, Nigeria</p>
      </div>
    </div>
  );
};
