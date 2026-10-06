import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { studyResources, StudyResource } from '../data/resources';
import { Download, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const handleDownload = (res: StudyResource) => {
    setDownloadedId(res.id);
    setTimeout(() => setDownloadedId(null), 3000);
  };

  return (
    <>
      <SEO
        title="Study Materials & Downloads | HCCF FUOYE Resources"
        description="Download free Bible study syllabuses, the freshers' survival guide, and semester examination prayer booklets."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              DISCIPLESHIP & ACADEMIC REPOSITORIES
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              STUDY MATERIALS & <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">DOWNLOADS</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Equip yourself with structured cell teaching outlines, freshman survival manuals, and exam prayer confessions.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyResources.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-white border border-[#DFD7C9] hover:border-black/30 transition-colors flex flex-col justify-between shadow-xs space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-black bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#E5DFD3]">
                      {item.category}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">
                      {item.fileSize} • {item.format}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#141414] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EBE0] flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium">Added {item.dateAdded}</span>

                  <button
                    type="button"
                    onClick={() => handleDownload(item)}
                    className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs"
                  >
                    {downloadedId === item.id ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#F4D900]" />
                        <span>DOWNLOADED!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 text-[#F4D900]" />
                        <span>DOWNLOAD FREE</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
