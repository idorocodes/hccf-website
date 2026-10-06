import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ministries } from '../data/ministries';
import { ArrowRight, Search, Clock, Compass, Sparkles } from 'lucide-react';
import { MinistryQuizModal } from '../components/common/MinistryQuizModal';

export const MinistriesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [quizOpen, setQuizOpen] = useState(false);

  const filtered = ministries.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Ministries Directory | HCCF FUOYE"
        description="Discover service units and ministries at His Coming Campus Fellowship, FUOYE: Choir, Prayer, Bible Study, Media, Evangelism, Drama, and more."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              SERVICE & DISCIPLESHIP UNITS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-6">
              OUR MINISTRIES <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">& DEPARTMENTS</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal mb-8">
              Every believer has been graced with spiritual gifts to build the body of Christ. Discover the right department where you can serve, learn, and grow.
            </p>
            <button
              type="button"
              onClick={() => setQuizOpen(true)}
              className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-[#FAF7F2] font-black text-xs px-6 py-3.5 rounded-xl transition-all shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#F4D900]" />
              <span>Take the 30-Second Ministry Fit Quiz</span>
            </button>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          <div className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ministries by name or responsibility..."
                className="w-full bg-white border border-[#DFD7C9] rounded-xl pl-10 pr-4 py-2.5 text-xs text-black placeholder-neutral-500 focus:outline-none focus:border-black shadow-xs font-medium"
              />
            </div>
            <div className="text-xs text-neutral-600 font-semibold self-end sm:self-center">
              Showing {filtered.length} of {ministries.length} ministries
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((ministry) => (
              <div
                key={ministry.id}
                className="group bg-white border border-[#DFD7C9] rounded-2xl overflow-hidden hover:border-black/30 transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={ministry.image}
                      alt={ministry.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded">
                      {ministry.leadRole}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-black text-[#141414] group-hover:underline transition-colors">
                      {ministry.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed line-clamp-3">
                      {ministry.shortDescription}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs text-neutral-600 font-medium">
                      <Clock className="w-3.5 h-3.5 text-black" />
                      <span className="truncate">{ministry.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/ministries/${ministry.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F3EFE6] text-xs font-extrabold text-neutral-800 hover:text-black flex items-center justify-between transition-colors border border-[#E5DFD3]"
                  >
                    <span>Learn More & Join</span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-black" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MinistryQuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
};
