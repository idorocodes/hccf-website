import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { churchInfo } from '../../data/church';
import { SectionHeading } from '../ui/SectionHeading';
import { CampusGoogleMap } from '../common/CampusGoogleMap';
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  ArrowRight,
  Sparkles,
  Phone,
  CheckCircle2,
  CalendarPlus,
} from 'lucide-react';

export const ServiceTimes: React.FC = () => {
  const [selectedCampus, setSelectedCampus] = useState<'oye' | 'ikole'>('oye');
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time until next Sunday 8:30 AM WAT (GMT+1)
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      // Target upcoming Sunday at 8:30 AM
      const nextSunday = new Date();
      const currentDay = now.getDay(); // 0 is Sunday
      const daysUntilSunday = currentDay === 0 && (now.getHours() < 8 || (now.getHours() === 8 && now.getMinutes() < 30)) ? 0 : ((7 - currentDay) % 7 || 7);
      
      nextSunday.setDate(now.getDate() + daysUntilSunday);
      nextSunday.setHours(8, 30, 0, 0);

      const diff = nextSunday.getTime() - now.getTime();
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeCampusData = churchInfo.campuses?.find((c) => c.id === selectedCampus) || churchInfo.campuses?.[0];

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("HCCF FUOYE Sunday Fellowship");
    const details = encodeURIComponent(
      "Atmosphere of passionate worship, revelatory teaching of God's Word, and warm campus fellowship. Venue: HCCF Auditorium, FUOYE."
    );
    const location = encodeURIComponent("Federal University Oye-Ekiti (FUOYE), Ekiti State");
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&recur=RRULE:FREQ=WEEKLY;BYDAY=SU`;
    window.open(googleCalUrl, '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden border-t border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="FELLOWSHIP WITH US"
          title="WEEKLY GATHERINGS & CAMPUS VENUES"
          description="We gather regularly throughout the week across FUOYE campuses to worship, be grounded in God's Word, and lift up our university in prevailing prayer."
          align="center"
        />

        {/* Live Gathering Countdown Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-[#F4EFE6] border border-[#DFD7C9] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#141414] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#141414]"></span>
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-black">
                Next Fellowship Gathering
              </p>
              <p className="text-xs text-neutral-600 font-medium">
                Sunday Main Worship • 08:30 AM WAT
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 font-mono text-center">
              <div className="bg-white border border-[#DFD7C9] px-2.5 py-1.5 rounded-lg min-w-[38px]">
                <span className="text-base font-black text-black block leading-none">{timeLeft.days}</span>
                <span className="text-[9px] text-neutral-600 font-bold uppercase">Days</span>
              </div>
              <span className="text-neutral-400 font-bold">:</span>
              <div className="bg-white border border-[#DFD7C9] px-2.5 py-1.5 rounded-lg min-w-[38px]">
                <span className="text-base font-black text-black block leading-none">{timeLeft.hours}</span>
                <span className="text-[9px] text-neutral-600 font-bold uppercase">Hrs</span>
              </div>
              <span className="text-neutral-400 font-bold">:</span>
              <div className="bg-white border border-[#DFD7C9] px-2.5 py-1.5 rounded-lg min-w-[38px]">
                <span className="text-base font-black text-black block leading-none">{timeLeft.minutes}</span>
                <span className="text-[9px] text-neutral-600 font-bold uppercase">Min</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCalendar}
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#141414] hover:bg-black text-[#FAF7F2] text-xs font-bold transition-all shrink-0"
              title="Add weekly service to Google Calendar"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-[#F4D900]" />
              <span className="hidden sm:inline">Add to Calendar</span>
            </button>
          </div>
        </div>

        {/* Dual Campus Selector Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F4EFE6] border border-[#DFD7C9] shadow-2xs">
            <button
              type="button"
              onClick={() => setSelectedCampus('oye')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                selectedCampus === 'oye'
                  ? 'bg-[#141414] text-[#FAF7F2] shadow-xs'
                  : 'text-neutral-700 hover:text-black hover:bg-white/50'
              }`}
            >
              🏛️ Oye Main Campus
            </button>
            <button
              type="button"
              onClick={() => setSelectedCampus('ikole')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                selectedCampus === 'ikole'
                  ? 'bg-[#141414] text-[#FAF7F2] shadow-xs'
                  : 'text-neutral-700 hover:text-black hover:bg-white/50'
              }`}
            >
              ⚙️ Ikole Campus (Engineering & Agric)
            </button>
          </div>
        </div>

        {/* Active Campus Spotlight Info */}
        {activeCampusData && (
          <div className="mb-10 p-6 rounded-2xl bg-[#F4EFE6] border border-[#DFD7C9] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-black text-[#F4D900]">
                  {activeCampusData.name} Center
                </span>
                <span className="text-xs text-neutral-600 font-semibold">{activeCampusData.faculties}</span>
              </div>
              <h4 className="text-lg font-black text-[#141414]">
                Venue: {activeCampusData.venue}
              </h4>
              <p className="text-xs text-neutral-600 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-black shrink-0" />
                <span>{activeCampusData.landmark}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
              <a
                href={`tel:${activeCampusData.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#DFD7C9] text-xs font-bold text-black hover:border-black transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>Call Coordinator</span>
              </a>
              <Link
                to="/first-timer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#141414] hover:bg-black text-[#FAF7F2] text-xs font-bold transition-colors"
              >
                <span>Plan Visit Here</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F4D900]" />
              </Link>
            </div>
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {churchInfo.serviceTimes.map((service, idx) => (
            <div
              key={service.name}
              className={`p-6 sm:p-8 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between shadow-xs ${
                idx === 0
                  ? 'border-black ring-2 ring-black/5 shadow-md'
                  : 'border-[#DFD7C9] hover:border-neutral-400'
              }`}
            >
              <div>
                {/* Badge & Day */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-black bg-[#F4D900] px-2.5 py-0.5 rounded">
                    {service.badge}
                  </span>
                  <span className="text-xs text-neutral-600 font-bold">
                    {service.day}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-black text-[#141414] mb-4">
                  {service.name}
                </h3>

                {/* Time & Venue details */}
                <div className="space-y-3 pt-3 border-t border-[#F0EBE0] mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-black shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] text-neutral-500 uppercase font-bold tracking-wider">Service Time</p>
                      <p className="text-sm font-bold text-black">{service.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-black shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] text-neutral-500 uppercase font-bold tracking-wider">Venue</p>
                      <p className="text-sm font-semibold text-neutral-800">
                        {selectedCampus === 'ikole' && idx === 0
                          ? 'Engineering Hall 2, Ikole Campus'
                          : service.venue}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <Link
                to="/first-timer"
                className={`w-full py-3 px-4 rounded-lg text-xs font-black text-center transition-colors flex items-center justify-center gap-1.5 ${
                  idx === 0
                    ? 'bg-[#141414] text-white hover:bg-black shadow-sm'
                    : 'bg-[#F4EFE6] text-black hover:bg-[#EAE3D6] border border-[#D5CEBF]'
                }`}
              >
                <span>Plan Your Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Interactive Google Map for Campus Navigation */}
        <div className="mb-12">
          <CampusGoogleMap initialCampus={selectedCampus} height="460px" />
        </div>

        {/* Venue Location Banner & CTAs */}
        <div className="p-8 rounded-2xl bg-[#F4EFE6] border border-[#DFD7C9] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-black text-black uppercase tracking-wider">
              <Navigation className="w-4 h-4 text-black" />
              <span>Campus Directions</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black text-[#141414]">
              Need Help Finding the Fellowship Venue on Campus?
            </h4>
            <p className="text-sm text-neutral-700 max-w-2xl leading-relaxed">
              {churchInfo.location.directionsNote} Whether you are in Phase 1, Phase 2, or Ikole hostels, our student ushers and transport protocol are ready to guide you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-black text-white font-extrabold text-sm px-6 py-3 rounded-md transition-colors shadow-sm"
            >
              <Navigation className="w-4 h-4 text-[#F4D900]" />
              <span>GET DIRECTIONS</span>
            </Link>

            <Link
              to="/first-timer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-black font-extrabold text-sm px-6 py-3 rounded-md border border-[#D5CEBF] transition-colors"
            >
              <span>FIRST TIMER'S PACK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
