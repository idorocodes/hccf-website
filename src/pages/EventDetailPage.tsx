import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { events } from '../data/events';
import { Calendar, Clock, MapPin, ArrowLeft, CheckCircle2, Send, Sparkles } from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);

  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    level: '100 Level',
    needAccommodation: false,
  });

  if (!event) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center bg-[#FAF8F5]">
        <h2 className="text-2xl font-black text-black mb-2">Event Not Found</h2>
        <p className="text-neutral-600 text-sm mb-6">The requested campus event does not exist or has passed.</p>
        <Link
          to="/events"
          className="bg-[#141414] text-white font-bold text-xs px-6 py-3 rounded-md"
        >
          Back to Events Calendar
        </Link>
      </div>
    );
  }

  const relatedEvents = events.filter((e) => e.id !== event.id).slice(0, 2);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setRegistered(true);
  };

  return (
    <>
      <SEO
        title={`${event.title} | HCCF FUOYE Events`}
        description={event.description}
      />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAF8F5] border-b border-[#E5DFD3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Events</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-black bg-[#F3EFE6] px-3 py-1 rounded-md border border-[#E2DBD0] inline-block">
              {event.category}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight leading-tight">
              {event.title}
            </h1>
            {event.subtitle && (
              <p className="text-lg sm:text-2xl text-neutral-800 font-bold">
                {event.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (7 cols): Info, Description, Schedule */}
            <div className="lg:col-span-7 space-y-10">
              {/* Event Logistics Info Box */}
              <div className="p-6 rounded-2xl bg-white border border-[#DFD7C9] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs shadow-xs">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-black uppercase text-[11px]">Date</p>
                    <p className="text-neutral-700 font-medium mt-0.5">{event.formattedDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-black uppercase text-[11px]">Time</p>
                    <p className="text-neutral-700 font-medium mt-0.5">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-black uppercase text-[11px]">Venue</p>
                    <p className="text-neutral-700 font-medium mt-0.5">{event.venue}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-[#141414]">About the Gathering</h2>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Schedule Highlights */}
              {event.scheduleHighlights && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#141414]">Session Outline & Highlights</h3>
                  <div className="space-y-3">
                    {event.scheduleHighlights.map((hl, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-white border border-[#DFD7C9] flex items-start gap-3 shadow-xs"
                      >
                        <Sparkles className="w-4 h-4 text-black shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (5 cols): Registration Form */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DFD7C9] shadow-md sticky top-28">
                <span className="text-xs font-black uppercase text-black tracking-wider block mb-2">
                  CAMPUS REGISTRATION
                </span>
                <h3 className="text-xl font-black text-[#141414] mb-2">
                  Reserve Your Seat
                </h3>
                <p className="text-xs text-neutral-600 mb-6">
                  Admission is free. Pre-registration guarantees seating and helps our protocol team prepare materials.
                </p>

                {registered ? (
                  <div className="p-6 rounded-xl bg-[#FAF8F5] border border-black/30 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-black mx-auto" />
                    <h4 className="text-base font-bold text-black">Registration Confirmed!</h4>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      We look forward to hosting you for <strong>{event.title}</strong> at {event.venue}. An SMS / WhatsApp reminder will be sent before the event.
                    </p>
                    <button
                      type="button"
                      onClick={() => setRegistered(false)}
                      className="mt-3 text-xs text-black underline font-bold"
                    >
                      Register another attendee
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-neutral-800 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Emmanuel"
                        className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-neutral-800 mb-1">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="student@fuoye.edu.ng"
                          className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-neutral-800 mb-1">WhatsApp / Phone</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0800 000 0000"
                          className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-neutral-800 mb-1">Department</label>
                        <input
                          type="text"
                          required
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          placeholder="e.g. Mechanical Eng."
                          className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-neutral-800 mb-1">Level</label>
                        <select
                          value={formData.level}
                          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                          className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black focus:outline-none focus:border-black font-medium"
                        >
                          <option>100 Level</option>
                          <option>200 Level</option>
                          <option>300 Level</option>
                          <option>400 Level</option>
                          <option>500 Level</option>
                          <option>Alumni / Visitor</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-center gap-2 cursor-pointer text-neutral-700 font-medium">
                        <input
                          type="checkbox"
                          checked={formData.needAccommodation}
                          onChange={(e) => setFormData({ ...formData, needAccommodation: e.target.checked })}
                          className="rounded text-black focus:ring-black bg-[#FAF8F5] border-neutral-400"
                        />
                        <span>I require student hostel accommodation during the conference</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black rounded-lg transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#F4D900]" />
                      <span>CONFIRM REGISTRATION</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-16 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-black text-[#141414] mb-8">Other Upcoming Gatherings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedEvents.map((re) => (
                <div
                  key={re.id}
                  className="p-6 rounded-2xl bg-white border border-[#DFD7C9] flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <span className="text-xs font-black text-black">{re.formattedDate}</span>
                    <h4 className="text-lg font-black text-[#141414] mt-1 mb-2">{re.title}</h4>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">{re.description}</p>
                  </div>
                  <div className="pt-4">
                    <Link
                      to={`/events/${re.slug}`}
                      className="text-xs font-bold text-black hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
