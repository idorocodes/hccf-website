import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { leaders } from '../data/leaders';
import { GraduationCap, ShieldCheck } from 'lucide-react';

export const LeadershipPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Executive' | 'Pastoral' | 'Unit Head'>('All');

  const filteredLeaders = filter === 'All'
    ? leaders
    : leaders.filter((l) => l.category === filter);

  return (
    <>
      <SEO
        title="Leadership | HCCF FUOYE"
        description="Meet the spiritual patrons, executive council, and ministry unit leaders serving His Coming Campus Fellowship at FUOYE."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              SERVANT LEADERSHIP IN CHRIST
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-6">
              FELLOWSHIP <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">LEADERSHIP</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Meet our spiritual advisers, student executive committee, and ministry heads called to shepherd the campus flock in humility, doctrine, and love.
            </p>
          </div>
        </div>
      </section>

      {/* Main Directory */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Segmented Filter Control */}
          <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 bg-white rounded-xl max-w-fit border border-[#DFD7C9] shadow-xs">
            {(['All', 'Pastoral', 'Executive', 'Unit Head'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-black rounded-lg transition-colors ${
                  filter === cat
                    ? 'bg-[#141414] text-white shadow-xs'
                    : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
                }`}
              >
                {cat === 'All' ? 'All Leaders' : cat}
              </button>
            ))}
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLeaders.map((leader) => (
              <div
                key={leader.id}
                className="bg-white border border-[#DFD7C9] rounded-2xl overflow-hidden hover:border-black/30 transition-colors flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Photo */}
                  <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover filter contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                      {leader.role}
                    </span>
                  </div>

                  {/* Bio & Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-black text-[#141414]">
                      {leader.name}
                    </h3>

                    {leader.departmentLevel && (
                      <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                        <GraduationCap className="w-3.5 h-3.5 text-black" />
                        <span>{leader.departmentLevel}</span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed pt-2 border-t border-[#F0EBE0]">
                      {leader.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl text-[11px] text-neutral-700 font-semibold flex items-center justify-between">
                    <span>Accountability & Care</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-black" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
