import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { devotionals } from '../data/devotionals';
import { BookOpen, Calendar, Share2, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export const DevotionalPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const currentDev = devotionals[currentIndex];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `HCCF Daily Anchor: "${currentDev.title}" (${currentDev.scripture}) - ${currentDev.scriptureText}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <SEO
        title="Daily Campus Devotional | HCCF FUOYE"
        description="Start your university lecture day with scriptural clarity, targeted prayer, and faith-filled confessions."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              DAILY BREAD FOR CAMPUS LIFE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              DAILY <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">DEVOTIONAL</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Anchor your mind in God's timeless truth before navigating lecture halls, practicals, and campus activities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Devotional Article */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Day Navigation Tabs */}
          <div className="flex items-center justify-between mb-8">
            <button
              type="button"
              disabled={currentIndex >= devotionals.length - 1}
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DFD7C9] text-xs font-bold text-neutral-800 disabled:opacity-40 hover:border-black transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Day</span>
            </button>

            <span className="text-xs font-extrabold uppercase text-black">
              {currentDev.dayOfWeek} • {currentDev.date}
            </span>

            <button
              type="button"
              disabled={currentIndex <= 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DFD7C9] text-xs font-bold text-neutral-800 disabled:opacity-40 hover:border-black transition-colors"
            >
              <span>Next Day</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Devotional Card */}
          <article className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DFD7C9] shadow-sm space-y-8">
            {/* Header */}
            <div className="space-y-3 pb-6 border-b border-[#F0EBE0]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-black bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5DFD3]">
                  {currentDev.scripture}
                </span>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-black transition-colors"
                  title="Copy devotional verse"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black" />
                      <span className="text-black font-extrabold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Verse</span>
                    </>
                  )}
                </button>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-[#141414] leading-tight">
                {currentDev.title}
              </h2>
            </div>

            {/* Scripture Quote Box */}
            <blockquote className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Scripture Anchor — {currentDev.scripture}</span>
              </div>
              <p className="text-base sm:text-lg italic text-[#141414] font-medium leading-relaxed">
                "{currentDev.scriptureText}"
              </p>
            </blockquote>

            {/* Thought for the day */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-[#141414]">
                Today's Reflection
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                {currentDev.thought}
              </p>
            </div>

            {/* Prayer & Confession Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-[#F3EFE6] border border-[#E2DBD0] space-y-2">
                <h4 className="text-xs font-black text-black uppercase tracking-wider">
                  Targeted Prayer
                </h4>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                  {currentDev.prayer}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] space-y-2">
                <h4 className="text-xs font-black text-black uppercase tracking-wider">
                  Faith Confession
                </h4>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                  "{currentDev.confession}"
                </p>
              </div>
            </div>

            {/* Campus Focus Callout */}
            <div className="p-4 rounded-xl bg-white border-2 border-black flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-black shrink-0" />
              <div className="text-xs">
                <span className="font-black text-black uppercase mr-1">Daily Campus Focus:</span>
                <span className="text-neutral-700">{currentDev.campusFocus}</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
