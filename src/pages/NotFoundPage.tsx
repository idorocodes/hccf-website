import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Compass, Home, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found | HCCF FUOYE"
        description="The page you are looking for does not exist on His Coming Campus Fellowship website."
      />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FAF8F5] min-h-[90vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-white border border-[#DFD7C9] flex items-center justify-center mx-auto text-black shadow-xs">
            <Compass className="w-10 h-10 animate-pulse text-black" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-black">
              404 ERROR
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#141414] uppercase tracking-tight">
              PAGE NOT FOUND
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto font-medium">
              The page you are looking for may have been moved, renamed, or is temporarily unavailable.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black text-xs px-6 py-3.5 rounded-xl transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" />
              <span>RETURN TO HOME</span>
            </Link>

            <Link
              to="/sermons"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-black font-extrabold text-xs px-6 py-3.5 rounded-xl border border-[#DFD7C9] transition-colors"
            >
              <span>LISTEN TO SERMONS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
