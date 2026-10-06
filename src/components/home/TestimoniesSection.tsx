import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { testimonies } from '../../data/testimonies';
import { SectionHeading } from '../ui/SectionHeading';
import { Quote, ArrowRight, GraduationCap, Heart, Sparkles } from 'lucide-react';

export const TestimoniesSection: React.FC = () => {
  // Interactive reaction counters
  const [reactions, setReactions] = useState<Record<string, { amens: number; userReacted: boolean }>>({
    'testimony-1': { amens: 42, userReacted: false },
    'testimony-2': { amens: 38, userReacted: false },
    'testimony-3': { amens: 55, userReacted: false },
  });

  const handleToggleAmen = (id: string) => {
    setReactions((prev) => {
      const current = prev[id] || { amens: 20, userReacted: false };
      return {
        ...prev,
        [id]: {
          amens: current.userReacted ? current.amens - 1 : current.amens + 1,
          userReacted: !current.userReacted,
        },
      };
    });
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="REAL STORIES OF TRANSFORMATION"
          title="STUDENTS TRANSFORMED BY CHRIST"
          description="Hear from undergraduates at the Federal University Oye-Ekiti whose spiritual lives, academic journeys, and character have been anchored through HCCF."
          action={
            <Link
              to="/testimonies"
              className="inline-flex items-center gap-1.5 text-black hover:underline text-sm font-extrabold"
            >
              <span>Read More Testimonies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonies.map((testimony) => {
            const reaction = reactions[testimony.id] || { amens: 30, userReacted: false };

            return (
              <div
                key={testimony.id}
                className="p-8 rounded-2xl bg-white border border-[#DFD7C9] hover:border-black/30 transition-all flex flex-col justify-between space-y-6 shadow-xs"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-[#141414] opacity-80" />
                  <p className="text-base text-neutral-800 italic leading-relaxed">
                    "{testimony.quote}"
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#F0EBE0]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimony.photo}
                        alt={testimony.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-black"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-sm font-extrabold text-[#141414]">
                          {testimony.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                          <GraduationCap className="w-3.5 h-3.5 text-black" />
                          <span>{testimony.department} • {testimony.level}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Amen reaction button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleToggleAmen(testimony.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        reaction.userReacted
                          ? 'bg-[#141414] text-[#FAF7F2]'
                          : 'bg-[#F4EFE6] text-neutral-800 hover:bg-[#EAE3D6] border border-[#DFD7C9]'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#F4D900]" />
                      <span>Amen! 🙏 ({reaction.amens})</span>
                    </button>

                    <Link
                      to="/testimonies"
                      className="text-xs font-bold text-neutral-600 hover:text-black underline underline-offset-2"
                    >
                      Full story
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
