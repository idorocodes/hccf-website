import React, { useState } from 'react';
import { BookOpen, Copy, Check, Share2, Sparkles } from 'lucide-react';
import { churchInfo } from '../../data/church';

export const ScriptureOfWeek: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const scripture = churchInfo.scriptureOfTheWeek;

  const handleCopy = () => {
    const textToCopy = `"${scripture.text}" — ${scripture.verse} (HCCF FUOYE Anchor Scripture)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      `📖 *HCCF FUOYE Anchor Scripture*\n\n"${scripture.text}"\n— *${scripture.verse}*\n\nReflection: ${scripture.reflection}\n\nJoin us at His Coming Campus Fellowship, FUOYE!`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-b border-[#E5DFD3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#F4EFE6] border border-[#DFD7C9] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
          {/* Subtle decorative watermark */}
          <div className="absolute -right-8 -bottom-8 pointer-events-none opacity-5 select-none text-9xl font-black text-black">
            †
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#E2D9C8]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141414] text-[#F4D900] flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-neutral-800">
                  SCRIPTURE OF THE WEEK • EPHESIANS 4:13
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#141414]">
                  {scripture.theme}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end md:self-center">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-neutral-50 border border-[#D5CEBF] text-xs font-bold text-[#141414] transition-all shadow-2xs"
                title="Copy scripture"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-black" />
                    <span>Copy Verse</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#141414] hover:bg-black text-[#FAF7F2] text-xs font-bold transition-all shadow-2xs"
                title="Share to WhatsApp Status"
              >
                <Share2 className="w-3.5 h-3.5 text-[#F4D900]" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Scripture Verse Text */}
          <div className="py-8 space-y-4">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#141414] leading-relaxed">
              "{scripture.text}"
            </blockquote>
            <p className="text-sm sm:text-base font-black text-black tracking-wider uppercase">
              — {scripture.verse}
            </p>
          </div>

          {/* Practical Application & Prayer Point */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#E2D9C8] text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
              <span className="text-[11px] font-black text-neutral-600 uppercase tracking-wider block mb-1">
                Campus Student Reflection
              </span>
              <p className="text-neutral-700 leading-relaxed font-medium">
                {scripture.reflection}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
              <span className="text-[11px] font-black text-neutral-600 uppercase tracking-wider block mb-1">
                Semester Prayer Focus
              </span>
              <p className="text-neutral-700 leading-relaxed font-medium">
                {scripture.prayerPoint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
