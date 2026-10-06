import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HccfLogo } from '../common/HccfLogo';
import { churchInfo } from '../../data/church';
import {
  Instagram,
  Facebook,
  Youtube,
  Send,
  MapPin,
  Clock,
  CheckCircle2,
  Heart,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubmitted(true);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About HCCF', path: '/about' },
    { label: 'Our Fellowship', path: '/fellowship' },
    { label: 'Ministries', path: '/ministries' },
    { label: 'Leadership', path: '/leadership' },
    { label: 'Media & Teachings', path: '/media' },
    { label: 'Sermons Archive', path: '/sermons' },
    { label: 'Daily Devotional', path: '/devotional' },
    { label: 'Study Resources', path: '/resources' },
    { label: 'Events Calendar', path: '/events' },
    { label: 'Photo Gallery', path: '/gallery' },
    { label: 'Student Testimonies', path: '/testimonies' },
    { label: 'Announcements', path: '/announcements' },
    { label: "First Timer's Welcome", path: '/first-timer' },
    { label: 'Prayer Request', path: '/prayer-request' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Give to the Work', path: '/give' },
  ];

  return (
    <footer className="bg-[#EFE9DD] text-[#22201D] border-t border-[#DFD8CA] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#DFD8CA]">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-black rounded">
              <HccfLogo size="lg" textVariant="dark" />
            </Link>
            <p className="text-sm text-neutral-700 leading-relaxed max-w-sm">
              {churchInfo.description}
            </p>
            <div className="inline-block px-3 py-1.5 bg-[#FAF8F5] border border-[#D5CEBF] rounded text-xs text-black font-bold">
              {churchInfo.themeScripture} • FUOYE
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-3">
                Connect Across Campus & Online
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href={churchInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-[#FAF8F5] border border-[#D5CEBF] flex items-center justify-center text-neutral-800 hover:text-black hover:border-black transition-colors"
                  aria-label="Follow HCCF FUOYE on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={churchInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-[#FAF8F5] border border-[#D5CEBF] flex items-center justify-center text-neutral-800 hover:text-black hover:border-black transition-colors"
                  aria-label="Connect on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={churchInfo.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-[#FAF8F5] border border-[#D5CEBF] flex items-center justify-center text-neutral-800 hover:text-black hover:border-black transition-colors"
                  aria-label="Watch sermons on YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={churchInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-[#FAF8F5] border border-[#D5CEBF] flex items-center justify-center text-neutral-800 hover:text-black hover:border-black transition-colors font-bold text-xs"
                  aria-label="Chat on WhatsApp"
                >
                  WA
                </a>
                <a
                  href={churchInfo.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-[#FAF8F5] border border-[#D5CEBF] flex items-center justify-center text-neutral-800 hover:text-black hover:border-black transition-colors font-bold text-xs"
                  aria-label="Follow HCCF on TikTok"
                >
                  TT
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-extrabold text-black tracking-wider uppercase mb-5">
              Explore & Resources
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-neutral-700 hover:text-black font-medium transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Fellowship Times & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-sm font-extrabold text-black tracking-wider uppercase mb-4">
                Service Times & Venue
              </h3>
              <div className="space-y-3 text-xs text-neutral-800">
                <div className="flex items-start gap-2.5 bg-[#FAF8F5] p-3 rounded border border-[#D5CEBF]">
                  <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-black">Sunday Fellowship: </span>
                    <span>{churchInfo.serviceTimes[0].time}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FAF8F5] p-3 rounded border border-[#D5CEBF]">
                  <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-black">Midweek Service: </span>
                    <span>{churchInfo.serviceTimes[1].time}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-neutral-700">
                  <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <p>
                    {churchInfo.location.mainVenue}, {churchInfo.institution}, Oye-Ekiti.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2">
                Stay Connected with HCCF
              </h4>
              <p className="text-xs text-neutral-700 mb-3">
                Receive weekly sermon notes, fellowship announcements, and exam prayer notices.
              </p>
              {newsletterSubmitted ? (
                <div className="flex items-center gap-2 p-3 bg-[#FAF8F5] border border-black rounded text-xs text-black font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-black" />
                  <span>You're subscribed! Welcome to the HCCF updates loop.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="student@fuoye.edu.ng"
                    className="flex-1 bg-[#FAF8F5] border border-[#D5CEBF] rounded px-3 py-2 text-xs text-black placeholder-neutral-500 focus:outline-none focus:border-black"
                  />
                  <button
                    type="submit"
                    className="bg-[#141414] text-[#FAF8F5] font-bold px-4 py-2 rounded text-xs hover:bg-black transition-colors shrink-0 flex items-center gap-1.5"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-600 gap-4">
          <p>
            © {new Date().getFullYear()} {churchInfo.name} ({churchInfo.shortName}). All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-neutral-700 font-medium">Federal University Oye-Ekiti • Ekiti State, Nigeria</span>
            <Link to="/give" className="text-black font-bold hover:underline flex items-center gap-1">
              <Heart className="w-3 h-3 fill-black" />
              <span>Partner & Give</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
