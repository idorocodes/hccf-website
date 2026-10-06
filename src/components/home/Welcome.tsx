import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

export const Welcome: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F3EFE6] border-t border-b border-[#E5DFD3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Editorial Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-black" />
              <span className="text-xs font-black tracking-widest uppercase text-black">
                WELCOME TO OUR FELLOWSHIP
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] tracking-tight leading-tight uppercase"
              style={{ textWrap: 'balance' }}
            >
              WELCOME TO <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">HCCF FUOYE</span>
            </h2>

            <p className="text-lg sm:text-xl text-neutral-800 font-semibold leading-relaxed">
              HCCF FUOYE is a vibrant community of students at the Federal University Oye-Ekiti committed to following Christ, growing in God's Word, serving one another, and making Christ known on campus.
            </p>

            <p className="text-base text-neutral-700 leading-relaxed">
              University years are among the most pivotal seasons in life. Between lecture schedules, examinations, and campus transitions, we provide a warm, spiritually vibrant home where you can find genuine brethren, experience God's transforming power, and be equipped for academic and eternal distinction.
            </p>

            {/* Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-black font-extrabold text-sm">
                  <BookOpen className="w-4 h-4 text-black" />
                  <span>The Ephesians 4:13 Mandate</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Building students until we all come to the unity of the faith and the full stature of Christ.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-black font-extrabold text-sm">
                  <ShieldCheck className="w-4 h-4 text-black" />
                  <span>Scholars & Believers</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Refusing to separate academic excellence from passionate consecration to the Lord.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-[#FAF8F5] font-extrabold text-sm px-6 py-3.5 rounded-md transition-all active:scale-[0.98] shadow-sm"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-[#F4D900]" />
              </Link>

              <Link
                to="/first-timer"
                className="inline-flex items-center gap-2 text-neutral-800 hover:text-black text-sm font-bold px-4 py-3 transition-colors"
              >
                <span>Visiting for the first time?</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>

          {/* Image & Accent Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-[#DED7C9] bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
                  alt="HCCF FUOYE Student Fellowship Community"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center filter contrast-105"
                  loading="lazy"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                  <div className="flex items-center gap-2 text-xs font-black text-[#F4D900] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>One Family In Christ</span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    Federal University Oye-Ekiti • Ekiti State
                  </p>
                  <p className="text-xs text-neutral-300 mt-1">
                    Open to all students from all faculties, levels, and backgrounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
