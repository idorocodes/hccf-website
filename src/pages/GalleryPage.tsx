import React, { useState, useMemo } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { LightboxModal } from '../components/gallery/LightboxModal';
import { galleryPhotos } from '../data/gallery';
import { Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Fellowship', 'Worship', 'Outreach', 'Events', 'Campus', 'Community'];

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'All') return galleryPhotos;
    return galleryPhotos.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! + 1) % filteredPhotos.length));
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! - 1 + filteredPhotos.length) % filteredPhotos.length));
  };

  return (
    <>
      <SEO
        title="Photo Gallery | Life at HCCF FUOYE"
        description="Browse photo archives of fellowship, worship services, student discipleship, and campus outreach at Federal University Oye-Ekiti."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              VISUAL CHRONICLES
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              PHOTO <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">GALLERY</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Memories of God's tangible presence, joyful brotherly communion, and kingdom moves across the university.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs & Grid */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-black rounded-xl transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#141414] text-white shadow-xs'
                    : 'bg-white text-neutral-700 hover:text-black border border-[#DFD7C9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry / Editorial Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => {
              const aspectClass = idx % 5 === 0 ? 'aspect-[4/5]' : 'aspect-square';

              return (
                <div
                  key={photo.id}
                  onClick={() => handleOpenLightbox(idx)}
                  className={`group relative rounded-2xl overflow-hidden bg-white border border-[#DFD7C9] cursor-pointer shadow-xs ${aspectClass}`}
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                    <div className="self-end">
                      <span className="p-2 rounded-full bg-black/60 text-[#F4D900] backdrop-blur-sm inline-flex">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#F4D900] tracking-wider">
                        {photo.category}
                      </span>
                      <h3 className="text-base font-bold text-white leading-tight">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-neutral-200 line-clamp-2">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          photos={filteredPhotos}
          currentIndex={lightboxIndex}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};
