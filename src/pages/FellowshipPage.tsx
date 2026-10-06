import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BookOpen, Flame, Compass, HeartHandshake, Users, Award, ArrowRight, Sparkles } from 'lucide-react';

export const FellowshipPage: React.FC = () => {
  const campusPillars = [
    {
      title: "Intimate Prayer Altars",
      description:
        "Cultivating unbroken communion with the Holy Spirit. From dawn prayer walks on university pathways to solemn midnight intercessions, we teach students how to prevail in prayer.",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Systematic Bible Study",
      description:
        "Sound, contextual exegesis of Scripture. We demystify biblical truth so every undergraduate understands their identity, spiritual authority, and practical christian living.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1532012164546-f432f2e3777a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Hostel & Faculty Cells",
      description:
        "Fellowship doesn't stop at the auditorium doors. Our small-group cell networks in student hostels across Oye and Ikole provide intimate brotherly accountability and study circles.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bold Campus Evangelism",
      description:
        "Every campus faculty, department, and cafe is our mission field. We equip believers with wisdom, grace, and courage to witness Christ boldly to classmates and hostel roommates.",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Academic & Career Mentorship",
      description:
        "We reject the lie that spiritual students fail exams. Our senior scholars and alumni mentor younger members in study methodologies, exam composure, and research skills.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Brotherly Love & Welfare",
      description:
        "No brother or sister goes through university isolated or hungry. Through food distribution, exam survival packs, and hospital care, we demonstrate Christ's practical love.",
      icon: HeartHandshake,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const participationAreas = [
    {
      role: "Worship & Musical Instruments",
      description: "Lend your voice, keyboard, drum, or acoustic guitar skills to lead the campus in heavenly praise.",
      action: "/ministries/worship-choir"
    },
    {
      role: "Media, Design & Live Broadcasts",
      description: "Direct live cameras, edit sermon clips, take professional photographs, and create graphics that spread the Gospel.",
      action: "/ministries/media-publicity"
    },
    {
      role: "Intercessory Prayer Band",
      description: "Stand in the gap for FUOYE students, examination peace, and continuous spiritual revival.",
      action: "/ministries/prayer-intercession"
    },
    {
      role: "Evangelism & Soul-Winning Walkers",
      description: "Join Saturday outreach caravans to preach Christ in hostels, university gates, and market areas.",
      action: "/ministries/evangelism-missions"
    },
    {
      role: "Welfare & Hospitality Hostesses",
      description: "Serve as ushers, provide meals, welcome first-timers, and coordinate welfare parcels for needy students.",
      action: "/ministries/welfare-hospitality"
    },
    {
      role: "Creative Arts, Drama & Spoken Word",
      description: "Use theatrical storytelling, drama ministration, and poetry to convict and uplift student audiences.",
      action: "/ministries/drama-creative-arts"
    }
  ];

  return (
    <>
      <SEO
        title="Our Fellowship & Campus Life | HCCF FUOYE"
        description="Experience genuine Christian student community, prayer, Bible study, and campus evangelism at His Coming Campus Fellowship, FUOYE."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              CAMPUS COMMUNITY & SPIRITUAL VIBRANCY
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-6">
              LIFE IN OUR <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">FELLOWSHIP</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              A spiritual family where your walk with God deepens, genuine friendships are forged, and your university years count for eternity.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Pillars Grid */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE HEART OF HCCF"
            title="HOW WE GROW TOGETHER ON CAMPUS"
            description="Our fellowship revolves around tangible pillars designed to anchor undergraduates in Christ while flourishing as university students."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl overflow-hidden bg-white border border-[#DFD7C9] hover:border-black/30 transition-colors flex flex-col justify-between shadow-xs"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-neutral-100 relative">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 p-2 rounded-lg bg-black/75 backdrop-blur-sm text-[#F4D900]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-black text-[#141414]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* "THERE'S A PLACE FOR YOU HERE" Section */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-black" />
              <span>DISCOVER YOUR PURPOSE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#141414] uppercase tracking-tight mb-4">
              THERE'S A PLACE FOR YOU HERE.
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Whether you are a quiet scholar, an energetic technician, a gifted singer, or someone seeking God for the first time, God has designed a unique spot for you in this family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participationAreas.map((area) => (
              <div
                key={area.role}
                className="p-6 rounded-2xl bg-white border border-[#E5DFD3] hover:border-black/40 transition-colors flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div>
                  <h3 className="text-lg font-black text-[#141414] mb-2">
                    {area.role}
                  </h3>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <Link
                  to={area.action}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-black hover:underline"
                >
                  <span>Learn more about this unit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom callout */}
          <div className="mt-16 p-8 rounded-2xl bg-[#F3EFE6] border border-[#DFD7C9] text-center space-y-4 max-w-4xl mx-auto shadow-xs">
            <h3 className="text-xl sm:text-2xl font-black text-[#141414]">
              Ready to Connect With Fellowship Brethren?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 max-w-2xl mx-auto">
              Join us for Sunday morning fellowship or submit a first-timer form. A student coordinator will reach out to welcome you warmly.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/first-timer"
                className="bg-[#141414] hover:bg-black text-[#FAF8F5] font-extrabold text-xs px-6 py-3 rounded-md transition-colors shadow-sm"
              >
                I'M A FIRST TIMER
              </Link>
              <Link
                to="/contact"
                className="bg-white border border-[#D5CEBF] text-black font-extrabold text-xs px-6 py-3 rounded-md hover:bg-neutral-50 transition-colors"
              >
                CONTACT SECRETARIAT
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
