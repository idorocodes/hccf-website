import React, { useEffect } from 'react';
import { GalleryPhoto } from '../../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: GalleryPhoto[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fadeIn select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
    >
      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex items-center justify-between text-white z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-xs md:text-sm font-semibold tracking-wider text-[#F4D900]">
          {currentIndex + 1} / {photos.length}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors z-10 border border-neutral-800"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors z-10 border border-neutral-800"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image & Caption */}
      <div className="max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center">
        <img
          src={currentPhoto.imageUrl}
          alt={currentPhoto.title}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
          loading="lazy"
        />
        <div className="mt-4 text-center max-w-2xl">
          <h4 className="text-base font-bold text-white mb-1">
            {currentPhoto.title}
          </h4>
          <p className="text-xs md:text-sm text-neutral-400">
            {currentPhoto.caption}
          </p>
          <div className="mt-2 text-[11px] text-neutral-500">
            <span>{currentPhoto.category}</span>
            <span className="mx-2">·</span>
            <span>{currentPhoto.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
