import React from 'react';
import { Link } from 'react-router-dom';
import { galleryPhotos } from '../../data/gallery';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight, Camera } from 'lucide-react';

export const GalleryPreview: React.FC = () => {
  const preview = galleryPhotos.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-[#F3EFE6] border-t border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CAMPUS MOMENTS & MEMORIES"
          title="LIFE IN OUR FELLOWSHIP"
          description="Glimpses of genuine worship, brotherly community, hostel prayers, and outreach across the Federal University Oye-Ekiti."
          action={
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-black hover:underline text-sm font-extrabold"
            >
              <Camera className="w-4 h-4" />
              <span>Open Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {preview.map((photo, index) => {
            const isTall = index === 0 || index === 3;
            return (
              <div
                key={photo.id}
                className={`relative group rounded-2xl overflow-hidden bg-white border border-[#DFD7C9] shadow-xs ${
                  isTall ? 'col-span-2 row-span-2 aspect-square' : 'col-span-1 aspect-square'
                }`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase font-bold text-[#F4D900] tracking-wider">
                    {photo.category}
                  </span>
                  <p className="text-xs font-bold text-white truncate">
                    {photo.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
