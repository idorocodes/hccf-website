import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '../../data/events';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedEvent: React.FC = () => {
  const featured = events.find((e) => e.isFeatured) || events[0];

  return (
    <section className="py-20 bg-[#F3EFE6] border-t border-b border-[#E5DFD3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-[#DFD7C9] bg-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Cover (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#141414] text-white text-xs font-black uppercase tracking-wider shadow">
                  <Sparkles className="w-3.5 h-3.5 text-[#F4D900]" />
                  <span>Featured Campus Event</span>
                </span>
              </div>
            </div>

            {/* Details (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold text-black uppercase tracking-wider mb-2">
                  <span>{featured.category}</span>
                  <span className="text-neutral-400">·</span>
                  <span>{featured.formattedDate}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#141414] mb-2 leading-tight">
                  {featured.title}
                </h3>

                {featured.subtitle && (
                  <p className="text-sm sm:text-base font-bold text-neutral-800 mb-4">
                    {featured.subtitle}
                  </p>
                )}

                <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                  {featured.description}
                </p>

                {/* Logistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-t border-b border-[#EFE9DD] text-xs">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-black">Date</p>
                      <p className="text-neutral-700">{featured.formattedDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-black">Time</p>
                      <p className="text-neutral-700">{featured.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-black">Venue</p>
                      <p className="text-neutral-700">{featured.venue}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={`/events/${featured.slug}`}
                  className="inline-flex items-center gap-2 bg-[#141414] hover:bg-black text-[#FAF8F5] font-extrabold text-sm px-6 py-3 rounded-md transition-colors shadow-sm"
                >
                  <span>Event Details & Schedule</span>
                  <ArrowRight className="w-4 h-4 text-[#F4D900]" />
                </Link>

                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 text-neutral-800 hover:text-black text-sm font-bold transition-colors"
                >
                  <span>View All Upcoming Events</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
