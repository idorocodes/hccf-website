import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { announcements } from '../data/announcements';
import { ArrowRight, AlertCircle } from 'lucide-react';

export const AnnouncementsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Announcements & Notices | HCCF FUOYE"
        description="Official updates, exam revision retreats, campus shuttle notices, and student welfare bulletins from His Coming Campus Fellowship."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              FELLOWSHIP DISPATCHES
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              NEWS & <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">ANNOUNCEMENTS</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Official bulletins, welfare arrangements, exam tutorial schedules, and logistical notices for FUOYE students.
            </p>
          </div>
        </div>
      </section>

      {/* Announcement List */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DFD7C9] hover:border-black/30 transition-colors grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xs"
            >
              <div className="md:col-span-4 relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {item.urgent && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                    <AlertCircle className="w-3 h-3" />
                    <span>Important</span>
                  </span>
                )}
              </div>

              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs text-black font-extrabold">
                  <span>{item.category}</span>
                  <span className="text-neutral-400">·</span>
                  <span className="text-neutral-600 font-medium">{item.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#141414] leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    to={`/announcements/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-black hover:underline"
                  >
                    <span>Read Full Announcement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
