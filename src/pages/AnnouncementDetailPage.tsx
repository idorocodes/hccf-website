import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { announcements } from '../data/announcements';
import { ArrowLeft } from 'lucide-react';

export const AnnouncementDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const announcement = announcements.find((a) => a.slug === slug);

  if (!announcement) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center bg-[#FAF8F5]">
        <h2 className="text-2xl font-black text-black mb-2">Announcement Not Found</h2>
        <p className="text-neutral-600 text-sm mb-6">The requested news item has expired or does not exist.</p>
        <Link
          to="/announcements"
          className="bg-[#141414] text-white font-bold text-xs px-6 py-3 rounded-md"
        >
          Back to Announcements
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${announcement.title} | HCCF FUOYE Announcements`}
        description={announcement.excerpt}
      />

      <article className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/announcements"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Announcements</span>
          </Link>

          <header className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider">
              <span>{announcement.category}</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-600 font-medium">{announcement.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] leading-tight">
              {announcement.title}
            </h1>

            <p className="text-base text-neutral-700 leading-relaxed font-semibold">
              {announcement.excerpt}
            </p>
          </header>

          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 mb-10 border border-[#DFD7C9] shadow-xs">
            <img
              src={announcement.image}
              alt={announcement.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-neutral-700 text-sm sm:text-base leading-relaxed space-y-6">
            <p>{announcement.content}</p>
            <p>
              For further inquiries, shuttle timings, or emergency assistance, visit the HCCF Secretariat at FUOYE Main Campus or reach out to our executive contact line.
            </p>
          </div>

          <footer className="mt-12 pt-6 border-t border-[#E5DFD3] flex items-center justify-between">
            <Link
              to="/announcements"
              className="text-xs font-black text-black hover:underline"
            >
              ← All Announcements
            </Link>
            <span className="text-xs text-neutral-600 font-medium">His Coming Campus Fellowship • FUOYE</span>
          </footer>
        </div>
      </article>
    </>
  );
};
