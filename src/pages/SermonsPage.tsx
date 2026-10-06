import React, { useState, useMemo } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { VideoModal } from '../components/media/VideoModal';
import { sermons } from '../data/sermons';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { Search, Play, Headphones, Video } from 'lucide-react';

export const SermonsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState<{ title: string; url?: string } | null>(null);
  const { playSermon } = useAudioPlayer();

  const categories = useMemo(() => {
    const set = new Set(sermons.map((s) => s.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return sermons.filter((s) => {
      const matchSearch =
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.speaker.toLowerCase().includes(search.toLowerCase()) ||
        s.scripture.toLowerCase().includes(search.toLowerCase()) ||
        s.summary.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'All' || s.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  const featured = sermons[0];

  return (
    <>
      <SEO
        title="Sermons Archive & Teachings | HCCF FUOYE"
        description="Listen and watch life-transforming apostolic teachings from His Coming Campus Fellowship, Federal University Oye-Ekiti."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              THE PREACHED WORD
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              SERMONS & <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">TEACHINGS</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Equipping university students with sound doctrine, apostolic discernment, and deep communion with the Holy Spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sermon Hero Card */}
      <section className="py-12 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#DFD7C9] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-video rounded-xl overflow-hidden bg-neutral-900 group">
              <img
                src={featured.thumbnail}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
              <button
                type="button"
                onClick={() => setActiveVideo({ title: featured.title, url: featured.videoUrl })}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#F4D900] text-black flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                aria-label="Play featured sermon"
              >
                <Play className="w-7 h-7 fill-black translate-x-0.5" />
              </button>
              <span className="absolute bottom-3 left-3 bg-black/80 text-white text-xs px-2.5 py-1 rounded font-medium">
                Featured Sermon • {featured.duration}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-black uppercase text-black tracking-wider">
                {featured.series}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#141414]">
                {featured.title}
              </h2>
              <div className="text-xs text-neutral-600 space-y-1 font-medium">
                <p><strong className="text-black">Minister:</strong> {featured.speaker}</p>
                <p><strong className="text-black">Text:</strong> {featured.scripture}</p>
                <p><strong className="text-black">Delivered:</strong> {featured.date}</p>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {featured.summary}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveVideo({ title: featured.title, url: featured.videoUrl })}
                  className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black text-xs px-6 py-3 rounded-md transition-colors shadow-sm"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>WATCH SERMON NOW</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Archive Filter & List */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="mb-12 space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search sermon title, speaker, scripture..."
                  className="w-full bg-white border border-[#DFD7C9] rounded-xl pl-10 pr-4 py-2.5 text-xs text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium shadow-xs"
                />
              </div>

              {/* Category buttons */}
              <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                      category === cat
                        ? 'bg-[#141414] text-white shadow-xs'
                        : 'bg-white text-neutral-700 hover:text-black border border-[#DFD7C9]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs text-neutral-600 font-medium">
              Found {filtered.length} sermon{filtered.length === 1 ? '' : 's'}
            </div>
          </div>

          {/* Sermons Grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-neutral-600">
              <p className="text-base font-bold text-black">No sermons matched your search.</p>
              <p className="text-xs mt-1">Try resetting the category filter or searching a different term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((sermon) => (
                <div
                  key={sermon.id}
                  className="bg-white border border-[#DFD7C9] rounded-2xl overflow-hidden hover:border-black/30 transition-colors flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    {/* Thumbnail */}
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
                        className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#F4D900] text-black flex items-center justify-center transition-transform hover:scale-110 shadow-lg"
                        aria-label={`Play ${sermon.title}`}
                      >
                        <Play className="w-5 h-5 fill-black translate-x-0.5" />
                      </button>

                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white">
                        <span className="bg-black/80 px-2 py-0.5 rounded font-medium">{sermon.duration}</span>
                        <span className="bg-[#141414] px-2 py-0.5 rounded font-bold text-[#F4D900]">
                          {sermon.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="text-[11px] text-neutral-500 font-semibold flex items-center gap-2">
                        <span>{sermon.date}</span>
                        <span>·</span>
                        <span className="text-black">{sermon.scripture}</span>
                      </div>

                      <h3 className="text-lg font-black text-[#141414] group-hover:underline transition-colors leading-snug">
                        {sermon.title}
                      </h3>

                      <p className="text-xs text-neutral-700 font-bold">
                        {sermon.speaker}
                      </p>

                      <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                        {sermon.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex gap-2">
                    <button
                      type="button"
                      onClick={() => playSermon(sermon)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#141414] hover:bg-black text-xs font-black text-white flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <Headphones className="w-3.5 h-3.5 text-[#F4D900]" />
                      <span>LISTEN</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveVideo({ title: sermon.title, url: sermon.videoUrl })}
                      className="py-2.5 px-3 rounded-xl bg-[#FAF8F5] hover:bg-[#F3EFE6] text-xs font-black text-black border border-[#E5DFD3] flex items-center justify-center gap-1.5 transition-colors"
                      title="Watch Video"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>WATCH</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
        title={activeVideo?.title || 'HCCF Sermon'}
        videoUrl={activeVideo?.url}
      />
    </>
  );
};
