import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { churchInfo } from '../data/church';
import { faqs } from '../data/faqs';
import { Sparkles, MapPin, Clock, BookOpen, Smile, CheckCircle2, Send, Heart, Navigation } from 'lucide-react';
import { CampusGoogleMap } from '../components/common/CampusGoogleMap';

export const FirstTimerPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    level: '100 Level',
    source: 'Friend / Roommate',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const expectations = [
    {
      title: "Atmosphere of Genuine Love",
      description: "No judgment, no awkward pressure. You will be greeted warmly by student ushers who are glad to have you.",
      icon: Smile,
    },
    {
      title: "Passionate Campus Worship",
      description: "High praise and reverent worship in spirit and in truth led by our Voice of Grace choir.",
      icon: Heart,
    },
    {
      title: "Sound, Practical Word",
      description: "Clear, expository teaching from the Holy Scriptures that makes sense for university life and eternity.",
      icon: BookOpen,
    },
    {
      title: "First-Timers' Welcome Lounge",
      description: "A short, cordial reception immediately after service with free refreshments and a gift pack.",
      icon: Sparkles,
    },
  ];

  return (
    <>
      <SEO
        title="First-Timer's Welcome | You Belong Here | HCCF FUOYE"
        description="Visiting His Coming Campus Fellowship for the first time? Learn what to expect, how to get here, and connect with our welcome team."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              WELCOME TO THE FAMILY
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              YOU'RE WELCOME <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">HERE.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Whether you are a newly admitted fresher or a returning student in FUOYE, we are thrilled to have you worship and grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* Expectations Grid */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black uppercase text-black tracking-wider block mb-2">
              WHAT TO EXPECT
            </span>
            <h2 className="text-3xl font-black text-[#141414]">
              Visiting HCCF for the First Time?
            </h2>
            <p className="text-sm text-neutral-700 mt-2">
              Here is what a typical gathering looks and feels like so you can arrive with confidence and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white border border-[#DFD7C9] hover:border-black/30 transition-colors space-y-3 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] flex items-center justify-center text-black">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-base font-black text-[#141414]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Where to Go & Visitor Registration Form */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (5 cols): Practical details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase text-black tracking-wider">
                  LOCATION & TIMING
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#141414]">
                  Where to Go & What to Bring
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Fellowship takes place at {churchInfo.location.mainVenue}. Easily accessible from the FUOYE Main Gate, Oye-Ekiti campus.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#DFD7C9] space-y-4 text-xs shadow-xs">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-black block font-bold">Service Hours</strong>
                    <span className="text-neutral-600">Sunday Fellowship: {churchInfo.serviceTimes[0].time}</span>
                    <br />
                    <span className="text-neutral-600">Wednesday Charge: {churchInfo.serviceTimes[1].time}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-black block font-bold">Location</strong>
                    <span className="text-neutral-600">{churchInfo.location.mainVenue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-black block font-bold">What to Bring</strong>
                    <span className="text-neutral-600">Your Bible, a notebook, an open heart, and your roommate!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): First-timer form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#DFD7C9] shadow-md">
                <div className="mb-6">
                  <span className="text-xs font-black uppercase text-black tracking-wider block mb-1">
                    CONNECT WITH US
                  </span>
                  <h3 className="text-2xl font-black text-[#141414] mb-2">
                    Let Us Know You're Coming
                  </h3>
                  <p className="text-xs text-neutral-600">
                    Fill out this short form so our follow-up and hospitality team can save a seat for you and prepare your welcome pack.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-[#FAF8F5] border border-black/30 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
                    <h4 className="text-lg font-bold text-black">We're Excited to Meet You!</h4>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. A fellowship member will reach out to ensure you have no trouble locating the auditorium this Sunday.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-xs text-black underline font-bold"
                    >
                      Fill another response
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-neutral-800 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Oluwaseun"
                        className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-neutral-800 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="david@fuoye.edu.ng"
                          className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-neutral-800 mb-1">Phone Number (WhatsApp)</label>
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
                        <label className="block font-bold text-neutral-800 mb-1">FUOYE Department</label>
                        <input
                          type="text"
                          required
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          placeholder="e.g. Civil Engineering"
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
                          <option>100 Level (Fresher)</option>
                          <option>200 Level</option>
                          <option>300 Level</option>
                          <option>400 Level</option>
                          <option>500 Level</option>
                          <option>Direct Entry</option>
                          <option>Postgraduate / Visitor</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-neutral-800 mb-1">How did you hear about HCCF?</label>
                      <select
                        value={formData.source}
                        onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black focus:outline-none focus:border-black font-medium"
                      >
                        <option>Friend / Roommate</option>
                        <option>Hostel Evangelism Walk</option>
                        <option>Social Media (Instagram/WhatsApp)</option>
                        <option>Freshers Orientation Outreach</option>
                        <option>Flyer / Poster on Campus</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#F4D900]" />
                      <span>I'M COMING THIS WEEK</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map for Campus Navigation */}
      <section className="py-16 bg-[#FAF7F2] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider mb-2">
              <Navigation className="w-4 h-4 text-black" />
              <span>INTERACTIVE CAMPUS MAP</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#141414]">
              How to Find Us on Campus
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Explore the exact pin position for both Oye Main Campus and Ikole Campus. Tap "Directions" to open real-time walking or driving directions directly in Google Maps.
            </p>
          </div>

          <CampusGoogleMap height="480px" />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-[#F3EFE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase text-black tracking-wider block mb-2">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl font-black text-[#141414]">
              Common Questions from Undergraduates
            </h2>
            <p className="text-sm text-neutral-700 mt-2">
              Everything you need to know about fellowship life, shuttle pickups, and campus balance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-[#DFD7C9] shadow-xs cursor-pointer"
              >
                <summary className="flex items-center justify-between font-black text-base text-[#141414] list-none select-none">
                  <span>{faq.question}</span>
                  <span className="ml-4 w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#E5DFD3] flex items-center justify-center text-xs text-black group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-neutral-700 leading-relaxed pt-3 border-t border-[#F0EBE0]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
