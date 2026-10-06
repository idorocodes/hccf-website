import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const GiveCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#F4EFE6] text-[#141414] border-t border-b border-[#DFD7C9] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFD7C9] text-xs font-black uppercase tracking-wider text-black shadow-2xs">
          <Heart className="w-3.5 h-3.5 fill-[#F4D900] text-black" />
          <span>PARTNER IN ADVANCING THE GOSPEL</span>
        </div>

        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight uppercase text-[#141414]"
          style={{ textWrap: 'balance' }}
        >
          GIVE TO THE WORK <br className="hidden sm:inline" />
          OF GOD ON CAMPUS
        </h2>

        <p className="text-base sm:text-lg md:text-xl font-medium text-neutral-700 max-w-2xl mx-auto leading-relaxed">
          Your voluntary generosity fuels campus outreaches, student welfare foodbanks, audio-visual resources, freshers welcome banquets, and mission endeavors across Ekiti State.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/give"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#141414] hover:bg-black active:scale-[0.98] text-[#FAF7F2] font-black text-base px-8 py-4 rounded-xl shadow-md transition-all"
          >
            <span>GIVE NOW ONLINE</span>
            <ArrowRight className="w-5 h-5 text-[#F4D900]" />
          </Link>

          <Link
            to="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 border border-[#DFD7C9] text-black font-extrabold text-base px-8 py-3.5 rounded-xl transition-colors shadow-2xs"
          >
            <span>DISCOVER OUR VISION</span>
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-neutral-600">
          <span className="flex items-center gap-1.5 text-black">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Secure & Transparent Giving</span>
          </span>
          <span>·</span>
          <span>Tithes & Offerings</span>
          <span>·</span>
          <span>Welfare Foodbank Support</span>
          <span>·</span>
          <span>Campus Missions</span>
        </div>
      </div>
    </section>
  );
};
