import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Heart } from 'lucide-react';
import { churchInfo } from '../../data/church';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF7F2] pt-24 pb-16">
      {/* Background Graphic & Subtle Photo Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2000&q=85"
          alt="HCCF FUOYE Fellowship Worship"
          className="w-full h-full object-cover object-center opacity-10 filter grayscale contrast-125"
        />
        {/* Soft warm cream gradients overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-[#FAF7F2]/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center flex flex-col items-center">
        {/* Location & Institution Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EFE6] border border-[#E2DBD0] text-xs sm:text-sm font-bold text-neutral-800 mb-6 shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-black" />
          <span>FUOYE • EKITI, NIGERIA</span>
          <span className="text-neutral-400">·</span>
          <span className="text-black font-extrabold">EPHESIANS 4:13</span>
        </div>

        {/* Fellowship Name Sub-kicker */}
        <p className="text-xs sm:text-sm md:text-base font-black tracking-[0.2em] text-neutral-800 uppercase mb-4">
          HIS COMING CAMPUS FELLOWSHIP • FUOYE
        </p>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#141414] tracking-tight leading-[1.05] max-w-5xl uppercase mb-6"
          style={{ textWrap: 'balance' }}
        >
          RAISING STUDENTS <br className="hidden sm:inline" />
          <span className="underline decoration-[#F4D900] decoration-wavy decoration-4 underline-offset-8">
            FOR CHRIST.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-2xl font-normal leading-relaxed mb-10">
          A vibrant campus fellowship at the Federal University Oye-Ekiti committed to knowing Christ, growing together in God's Word, and preparing for His coming.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <Link
            to="/first-timer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#141414] hover:bg-black active:scale-[0.98] text-[#FAF8F5] font-extrabold text-base px-8 py-4 rounded-md shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-black outline-none"
          >
            <span>JOIN US THIS WEEK</span>
            <ArrowRight className="w-5 h-5 text-[#F4D900]" />
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/fellowship"
            className="inline-flex items-center justify-center gap-2 bg-[#F3EFE6] hover:bg-[#EAE3D6] border border-[#D5CEBF] text-black font-bold text-base px-8 py-4 rounded-md transition-all focus-visible:ring-2 focus-visible:ring-black outline-none"
          >
            <span>EXPLORE HCCF</span>
          </Link>

          {/* Partner / Give Quick Action */}
          <Link
            to="/give"
            className="sm:hidden inline-flex items-center justify-center gap-2 bg-[#F4D900] text-black font-bold text-sm py-3 px-6 rounded-md hover:bg-[#E5CB00] transition-colors"
          >
            <Heart className="w-4 h-4 fill-black" />
            <span>Give to the Fellowship</span>
          </Link>
        </div>

        {/* Floating Service Indicator */}
        <div className="mt-14 sm:mt-18 pt-6 border-t border-[#E5DFD3] w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-neutral-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-black" />
            <span>Sundays: <strong className="text-black font-bold">{churchInfo.serviceTimes[0].time}</strong></span>
          </div>
          <span className="hidden sm:inline text-neutral-400">•</span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-black" />
            <span>Wednesdays: <strong className="text-black font-bold">{churchInfo.serviceTimes[1].time}</strong></span>
          </div>
          <span className="hidden sm:inline text-neutral-400">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-black" />
            <span>Venue: <strong className="text-black font-bold">{churchInfo.location.mainVenue}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
