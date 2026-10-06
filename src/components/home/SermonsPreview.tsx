import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sermons } from '../../data/sermons';
import { SectionHeading } from '../ui/SectionHeading';
import { VideoModal } from '../media/VideoModal';
import { Play, BookOpen, ArrowRight } from 'lucide-react';

export const SermonsPreview: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ title: string; url?: string } | null>(null);

  const primarySermon = sermons[0];
  const sideSermons = sermons.slice(1, 3);

  return (
    <section className="py-20 md:py-28 bg-[#F3EFE6] border-t border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SOUND DOCTRINE FOR CAMPUS MINDS"
          title="LATEST SERMONS & TEACHINGS"
          description="Grow in the apostolic understanding of Scripture. Listen to revelatory teachings crafted to anchor students in the reality of Christ."
          action={
            <Link
              to="/sermons"
              className="inline-flex items-center gap-1.5 text-black hover:underline text-sm font-extrabold"
            >
              <span>Browse Full Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Primary Featured Sermon (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#DFD7C9] rounded-2xl overflow-hidden shadow-sm group">
            <div className="relative aspect-video overflow-hidden bg-neutral-900">
              <img
                src={primarySermon.thumbnail}
                alt={primarySermon.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

              {/* Watch Play Trigger */}
              <button
                type="button"
                onClick={() => setActiveVideo({ title: primarySermon.title, url: primarySermon.videoUrl })}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#F4D900] text-black flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all"
                aria-label={`Watch ${primarySermon.title}`}
              >
                <Play className="w-7 h-7 fill-black translate-x-0.5" />
              </button>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded font-medium">
                  {primarySermon.duration}
                </span>
                <span className="bg-[#141414] px-2.5 py-1 rounded font-bold text-[#F4D900]">
                  {primarySermon.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
                <span className="font-bold text-black">{primarySermon.speaker}</span>
                <span>·</span>
                <span>{primarySermon.date}</span>
                <span>·</span>
                <span className="text-black font-extrabold">{primarySermon.scripture}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#141414] group-hover:underline transition-colors">
                {primarySermon.title}
              </h3>

              <p className="text-sm text-neutral-700 leading-relaxed">
                {primarySermon.summary}
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setActiveVideo({ title: primarySermon.title, url: primarySermon.videoUrl })}
                  className="inline-flex items-center gap-2 bg-[#141414] text-white font-extrabold text-xs px-5 py-2.5 rounded-md hover:bg-black transition-colors shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>WATCH SERMON</span>
                </button>

                <Link
                  to="/sermons"
                  className="text-xs font-bold text-neutral-800 hover:text-black"
                >
                  Study Notes & Audio
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary Sermons List (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-700 mb-2">
              Recent Teachings in This Series
            </h4>

            {sideSermons.map((sermon) => (
              <div
                key={sermon.id}
                className="p-5 rounded-xl bg-white border border-[#E5DFD3] hover:border-black/30 transition-colors flex gap-4 items-start group shadow-xs"
              >
                <div className="relative w-28 h-20 shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setActiveVideo({ title: sermon.title, url: sermon.videoUrl })}
                    className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-black/75 text-white flex items-center justify-center group-hover:bg-[#F4D900] group-hover:text-black transition-colors"
                    aria-label={`Play ${sermon.title}`}
                  >
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  </button>
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-medium">
                    <span>{sermon.date}</span>
                    <span>·</span>
                    <span>{sermon.duration}</span>
                  </div>
                  <h5 className="text-sm font-bold text-[#141414] group-hover:underline transition-colors line-clamp-2">
                    {sermon.title}
                  </h5>
                  <p className="text-xs text-neutral-600 truncate">
                    {sermon.speaker}
                  </p>
                </div>
              </div>
            ))}

            {/* Scripture Mandate Callout */}
            <div className="p-6 rounded-2xl bg-[#EAE3D6] border border-[#D5CEBF] space-y-3">
              <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-black" />
                <span>Ephesians 4:13 Anchor</span>
              </div>
              <p className="text-xs italic text-neutral-800 leading-relaxed font-medium">
                "Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fullness of Christ."
              </p>
              <Link
                to="/about"
                className="text-xs text-black font-extrabold hover:underline inline-block"
              >
                Learn our theological doctrine →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
        title={activeVideo?.title || 'HCCF Sermon'}
        videoUrl={activeVideo?.url}
      />
    </section>
  );
};
