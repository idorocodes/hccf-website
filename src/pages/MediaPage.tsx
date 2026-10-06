import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { VideoModal } from '../components/media/VideoModal';
import { sermons } from '../data/sermons';
import { churchInfo } from '../data/church';
import { Play, Music, ExternalLink, ArrowRight, Video } from 'lucide-react';

export const MediaPage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ title: string; url?: string } | null>(null);

  const worshipHighlights = [
    {
      title: "Atmosphere of Consecration (Live Praise)",
      duration: "24m",
      date: "May 2026",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Chants of Ephesians 4:13 (Stature of Christ)",
      duration: "18m",
      date: "April 2026",
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Midnight Intercession Worship Strings",
      duration: "45m",
      date: "March 2026",
      thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <SEO
        title="Media Hub & Teachings | HCCF FUOYE"
        description="Stream sermons, worship sessions, video highlights, and photo albums from His Coming Campus Fellowship, Federal University Oye-Ekiti."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              AUDIO, VIDEO & VISUAL MEDIA
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              HCCF MEDIA <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">CENTRAL HUB</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Digital spiritual resources to fuel your secret place, academic focus, and fellowship devotion wherever you are in FUOYE.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Latest Sermons */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="AUDIO-VISUAL ARCHIVES"
            title="LATEST SERMONS & TEACHINGS"
            description="Expository messages preached across our Sunday and midweek campus gatherings."
            action={
              <Link
                to="/sermons"
                className="inline-flex items-center gap-1.5 text-black font-extrabold text-xs hover:underline"
              >
                <span>Full Sermon Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sermons.slice(0, 3).map((sermon) => (
              <div
                key={sermon.id}
                className="bg-white border border-[#DFD7C9] rounded-2xl overflow-hidden hover:border-black/30 transition-colors flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                    <img
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                    <button
                      type="button"
                      onClick={() => setActiveVideo({ title: sermon.title, url: sermon.videoUrl })}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#F4D900] text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      aria-label={`Play ${sermon.title}`}
                    >
                      <Play className="w-5 h-5 fill-black translate-x-0.5" />
                    </button>
                    <span className="absolute bottom-2 left-2 text-[10px] bg-black/80 text-white px-2 py-0.5 rounded font-medium">
                      {sermon.duration}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-black text-black uppercase tracking-wider">
                      {sermon.category}
                    </span>
                    <h3 className="text-base font-black text-[#141414] group-hover:underline transition-colors line-clamp-2">
                      {sermon.title}
                    </h3>
                    <p className="text-xs text-neutral-600 font-medium">
                      {sermon.speaker} • {sermon.date}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveVideo({ title: sermon.title, url: sermon.videoUrl })}
                    className="w-full py-2 bg-[#FAF8F5] hover:bg-[#F3EFE6] text-xs font-bold text-neutral-900 rounded-lg border border-[#E5DFD3] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-black text-black" />
                    <span>Watch Teaching</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Worship Sessions */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="VOICE OF GRACE CHOIR"
            title="CAMPUS WORSHIP & SOUNDS"
            description="Reverent, consecrated melodies recorded during fellowship worship gatherings and night vigils."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {worshipHighlights.map((worship, i) => (
              <div
                key={i}
                className="bg-white border border-[#DFD7C9] rounded-2xl overflow-hidden hover:border-black/30 transition-colors p-6 flex items-start gap-4 shadow-xs"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-900 shrink-0">
                  <img
                    src={worship.thumbnail}
                    alt={worship.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <button
                    type="button"
                    onClick={() => setActiveVideo({ title: worship.title })}
                    className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-[#F4D900] text-black flex items-center justify-center"
                    aria-label={`Play ${worship.title}`}
                  >
                    <Play className="w-4 h-4 fill-black translate-x-0.5" />
                  </button>
                </div>

                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-medium">
                    <Music className="w-3 h-3 text-black" />
                    <span>{worship.duration}</span>
                    <span>·</span>
                    <span>{worship.date}</span>
                  </div>
                  <h4 className="text-sm font-black text-[#141414] line-clamp-2">
                    {worship.title}
                  </h4>
                  <p className="text-xs text-neutral-600 font-medium">Voice of Grace HCCF</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: YouTube & Livestream Channel Callout */}
      <section className="py-20 bg-[#F3EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#DFD7C9] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider">
                <Video className="w-4 h-4 text-black" />
                <span>Sunday Livestreams</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#141414]">
                Can't Join Us Physically on Campus?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Connect live to our Sunday fellowships and special conferences on YouTube. Streamed in high clarity for students off-campus and alumni worldwide.
              </p>
            </div>

            <a
              href={churchInfo.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-[#FAF8F5] font-extrabold text-xs px-6 py-3.5 rounded-md shrink-0 transition-colors shadow-sm"
            >
              <Video className="w-4 h-4 text-[#F4D900]" />
              <span>SUBSCRIBE ON YOUTUBE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
        title={activeVideo?.title || 'HCCF Video'}
        videoUrl={activeVideo?.url}
      />
    </>
  );
};
