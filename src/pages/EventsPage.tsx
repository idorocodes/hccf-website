import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { events } from '../data/events';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const featured = events.find((e) => e.isFeatured) || events[0];
  const upcomingEvents = events.filter((e) => e.id !== featured.id);

  return (
    <>
      <SEO
        title="Campus Events & Conferences | HCCF FUOYE"
        description="Upcoming Christian conferences, academic symposiums, freshers banquets, and prayer walks at Federal University Oye-Ekiti."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              FELLOWSHIP CALENDAR
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              EVENTS & <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">CONFERENCES</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Special gatherings, spiritual retreats, and academic empowerments designed to catalyze student growth on FUOYE campus.
            </p>
          </div>
        </div>
      </section>

      {/* Large Featured Event */}
      <section className="py-16 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden bg-white border border-[#DFD7C9] shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-full">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#141414] text-white text-xs font-black uppercase tracking-wider shadow">
                  <Sparkles className="w-3.5 h-3.5 text-[#F4D900]" />
                  <span>Flagship Conference</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-black text-black uppercase tracking-wider">
                  {featured.category} • {featured.formattedDate}
                </span>

                <h2 className="text-2xl sm:text-4xl font-black text-[#141414] mt-2 mb-2 leading-tight">
                  {featured.title}
                </h2>

                {featured.subtitle && (
                  <p className="text-sm sm:text-base font-bold text-neutral-800 mb-4">
                    {featured.subtitle}
                  </p>
                )}

                <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                  {featured.description}
                </p>

                <div className="space-y-2 py-4 border-t border-b border-[#EFE9DD] text-xs">
                  <div className="flex items-center gap-2 text-neutral-700 font-medium">
                    <Calendar className="w-4 h-4 text-black" />
                    <span>{featured.formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-700 font-medium">
                    <Clock className="w-4 h-4 text-black" />
                    <span>{featured.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-700 font-medium">
                    <MapPin className="w-4 h-4 text-black" />
                    <span>{featured.venue}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`/events/${featured.slug}`}
                  className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black text-xs px-6 py-3.5 rounded-md transition-colors shadow-sm"
                >
                  <span>REGISTER / VIEW SCHEDULE</span>
                  <ArrowRight className="w-4 h-4 text-[#F4D900]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="UPCOMING SESSIONS"
            title="ALL UPCOMING EVENTS"
            description="Plan your attendance for our faculty seminars, freshers banquets, and campus-wide prayer marches."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white border border-[#DFD7C9] rounded-2xl overflow-hidden hover:border-black/30 transition-colors flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded">
                      {evt.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-black text-[#141414] group-hover:underline transition-colors leading-snug">
                      {evt.title}
                    </h3>

                    {evt.subtitle && (
                      <p className="text-xs font-bold text-neutral-800">
                        {evt.subtitle}
                      </p>
                    )}

                    <div className="space-y-1.5 py-3 border-t border-[#F0EBE0] text-xs text-neutral-600 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-black" />
                        <span>{evt.formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-black" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-black" />
                        <span className="truncate">{evt.venue}</span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-700 line-clamp-3 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/events/${evt.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F3EFE6] text-xs font-black text-black flex items-center justify-between border border-[#E5DFD3] transition-colors"
                  >
                    <span>Event Details & Registration</span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-black" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
