import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ministries } from '../../data/ministries';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { MinistryQuizModal } from '../common/MinistryQuizModal';

export const MinistriesPreview: React.FC = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  // Take top 4 ministries for home preview
  const previewMinistries = ministries.slice(0, 4);

  return (
    <>
      <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FIND YOUR PLACE TO SERVE"
            title="MINISTRIES & SERVICE TEAMS"
            description="Ministry at HCCF is a training ground for Christian leadership and spiritual gifts. Every student has a unique grace to supply."
            action={
              <Link
                to="/ministries"
                className="inline-flex items-center gap-1.5 text-black hover:underline text-sm font-extrabold"
              >
                <span>Explore All {ministries.length} Ministries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          {/* Interactive Ministry Quiz Banner Callout */}
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#F4EFE6] border border-[#DFD7C9] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xs">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#141414] text-[#F4D900] flex items-center justify-center shrink-0 shadow-xs">
                <Compass className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase tracking-wider text-black bg-[#F4D900] px-2 py-0.5 rounded">
                  Interactive Student Tool
                </span>
                <h4 className="text-lg sm:text-xl font-black text-[#141414]">
                  Not Sure Which Unit Fits Your Course Timetable & Gifts?
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-xl">
                  Answer 3 quick questions about your passions and weekly schedule to get matched with your ideal fellowship department.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setQuizOpen(true)}
              className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-[#FAF7F2] font-black text-xs px-6 py-3.5 rounded-xl transition-all shadow-sm shrink-0 active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-[#F4D900]" />
              <span>Take Ministry Quiz (30s)</span>
            </button>
          </div>

          {/* Ministries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewMinistries.map((ministry) => (
              <div
                key={ministry.id}
                className="group bg-white border border-[#DFD7C9] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-black/30 transition-all duration-300 shadow-xs"
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
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      {ministry.leadRole}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-black text-[#141414] mb-2 group-hover:underline transition-colors">
                      {ministry.name}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                      {ministry.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Action */}
                <div className="p-5 pt-0">
                  <Link
                    to={`/ministries/${ministry.slug}`}
                    className="w-full py-2.5 px-3 rounded-lg bg-[#FAF7F2] hover:bg-[#F4EFE6] text-xs font-bold text-neutral-800 hover:text-black flex items-center justify-between transition-colors border border-[#DED7C9]"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-black" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      <MinistryQuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
};
