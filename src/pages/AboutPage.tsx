import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { churchInfo } from '../data/church';
import { BookOpen, CheckCircle, Clock, Heart, Users, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About HCCF | Who We Are & What We Believe"
        description="Learn about His Coming Campus Fellowship FUOYE: our vision, mission, doctrine, history, and leadership at Federal University Oye-Ekiti."
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAF8F5] border-b border-[#E5DFD3] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              OUR IDENTITY & CALLING
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-6">
              WHO WE ARE & <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">WHY WE EXIST</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              His Coming Campus Fellowship (HCCF) is a Christ-centered, campus-focused Christian fellowship operating at the Federal University Oye-Ekiti (FUOYE).
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#DFD7C9] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider mb-4">
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>The Vision</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#141414] mb-6">
                  Raising Mature Believers Prepared for Christ's Return
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">
                  {churchInfo.vision}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-xs text-black font-bold flex items-center gap-2">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Ephesians 4:13 — "Unto the measure of the stature of the fullness of Christ."</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#DFD7C9] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4 text-black" />
                  <span>Our Fivefold Mission</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#141414] mb-6">
                  How We Steward This Calling in FUOYE
                </h2>
                <ul className="space-y-3.5 text-sm text-neutral-700">
                  {churchInfo.mission.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#141414] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR JOURNEY"
            title="A BRIEF HISTORY OF HCCF FUOYE"
            description="From initial prayer altars to a thriving student movement touching lives across Oye-Ekiti and Ikole campuses."
          />

          <div className="relative border-l-2 border-[#D5CEBF] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
            {churchInfo.historyMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Node icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-black flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-black" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-black uppercase text-black tracking-wider">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#141414] group-hover:underline transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-3xl">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe (Statement of Faith) */}
      <section className="py-20 md:py-28 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="APOSTOLIC FOUNDATIONS"
            title="WHAT WE BELIEVE"
            description="Our theological convictions are rooted firmly in the inspired Word of God. We hold fast to the timeless truths of the Gospel."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {churchInfo.whatWeBelieve.map((doctrine, index) => (
              <div
                key={doctrine.title}
                className="p-6 rounded-2xl bg-white border border-[#DFD7C9] hover:border-black/30 transition-colors space-y-3 shadow-xs"
              >
                <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider">
                  <span>0{index + 1}.</span>
                  <span>{doctrine.title}</span>
                </div>
                <h4 className="text-lg font-black text-[#141414]">
                  {doctrine.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {doctrine.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CULTURE & ETHICS"
            title="OUR PILLARS & CORE VALUES"
            description="The guiding convictions that shape our character, fellowship meetings, academics, and conduct."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {churchInfo.coreValues.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-[#F3EFE6] border border-[#E2DBD0] space-y-2 shadow-xs"
              >
                <div className="flex items-center gap-2 text-black font-extrabold text-base">
                  <CheckCircle className="w-4 h-4 text-black" />
                  <span>{val.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Callout */}
      <section className="py-20 bg-[#F3EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#DFD7C9] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-black uppercase text-black tracking-wider">
                GOVERNANCE & CARE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#141414]">
                Meet the Leadership of HCCF FUOYE
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Meet our spiritual advisory council, executive officers, and unit coordinators who serve the student body with prayer, humility, and dedication.
              </p>
            </div>

            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-[#FAF8F5] font-extrabold text-sm px-6 py-3.5 rounded-md shrink-0 transition-colors shadow-sm"
            >
              <Users className="w-4 h-4 text-[#F4D900]" />
              <span>VIEW LEADERSHIP TEAM</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
