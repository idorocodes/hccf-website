import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { testimonies } from '../data/testimonies';
import { Quote, GraduationCap, Send, CheckCircle2 } from 'lucide-react';

export const TestimoniesPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    department: '',
    level: '100 Level',
    testimony: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.testimony) return;
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Student Testimonies | HCCF FUOYE"
        description="Discover stories of salvation, academic turnaround, healing, and spiritual growth experienced by undergraduates at FUOYE."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              GOD AT WORK ON CAMPUS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              STUDENT <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">TESTIMONIES</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Read how Jesus is transforming lives, restoring hope, and inspiring academic breakthroughs among FUOYE scholars.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonies List */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 max-w-4xl mx-auto">
            {testimonies.map((testimony) => (
              <div
                key={testimony.id}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-[#DFD7C9] hover:border-black/30 transition-colors space-y-6 shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <Quote className="w-10 h-10 text-black shrink-0 opacity-70" />
                  <blockquote className="text-lg sm:text-xl font-bold text-[#141414] italic leading-relaxed">
                    "{testimony.quote}"
                  </blockquote>
                </div>

                <div className="pl-14 text-sm text-neutral-700 leading-relaxed space-y-4">
                  <p>{testimony.fullStory}</p>
                </div>

                <div className="pl-14 pt-4 border-t border-[#F0EBE0] flex items-center gap-4">
                  <img
                    src={testimony.photo}
                    alt={testimony.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-black"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-base font-extrabold text-[#141414]">{testimony.name}</h4>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                      <GraduationCap className="w-3.5 h-3.5 text-black" />
                      <span>{testimony.department} • {testimony.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Testimony Form */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#DFD7C9] shadow-sm">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase text-black tracking-wider block mb-2">
                OVERCOME BY THE BLOOD & THE WORD
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#141414] mb-2">
                Share What God Has Done
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600">
                Has God answered a prayer, provided for school fees, granted academic success, or delivered you? Encourage your fellow students!
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#FAF8F5] border border-black/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
                <h3 className="text-lg font-bold text-black">Praise the Lord!</h3>
                <p className="text-xs text-neutral-700">
                  Your testimony has been submitted to the fellowship editorial team. Thank you for declaring God's goodness!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-black underline font-bold"
                >
                  Submit another testimony
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-neutral-800 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Sister Grace"
                    className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-neutral-800 mb-1">Department</label>
                    <input
                      type="text"
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      placeholder="e.g. Accounting"
                      className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-neutral-800 mb-1">Academic Level</label>
                    <select
                      value={form.level}
                      onChange={(e) => setForm({ ...form, level: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black focus:outline-none focus:border-black font-medium"
                    >
                      <option>100 Level</option>
                      <option>200 Level</option>
                      <option>300 Level</option>
                      <option>400 Level</option>
                      <option>500 Level</option>
                      <option>Alumni</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-neutral-800 mb-1">Your Testimony</label>
                  <textarea
                    rows={4}
                    required
                    value={form.testimony}
                    onChange={(e) => setForm({ ...form, testimony: e.target.value })}
                    placeholder="Briefly describe what happened and how God showed up..."
                    className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-[#F4D900]" />
                  <span>SUBMIT TESTIMONY</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
