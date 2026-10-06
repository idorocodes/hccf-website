import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { churchInfo } from '../data/church';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Instagram,
  Facebook,
  Youtube,
  CheckCircle2,
  Navigation,
  ExternalLink,
} from 'lucide-react';
import { CampusGoogleMap } from '../components/common/CampusGoogleMap';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us | Secretariat & Enquiries | HCCF FUOYE"
        description="Get in touch with His Coming Campus Fellowship FUOYE: address, secretariat location, phone, social handles, and contact form."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              REACH OUT TO US
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              CONTACT & <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">SECRETARIAT</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Have questions about service times, campus shuttle routes, student accommodation, or fellowship units? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (5 cols): Contact details & Socials */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-black uppercase text-black tracking-wider">
                  FELLOWSHIP HEADQUARTERS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#141414]">
                  HCCF FUOYE Secretariat
                </h2>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Located within the Federal University Oye-Ekiti campus area. Accessible for all students from faculties in Oye and Ikole.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-[#DFD7C9] flex items-start gap-4 shadow-xs">
                  <MapPin className="w-5 h-5 text-black shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs font-black text-black uppercase tracking-wider">Campus Address</h3>
                    <p className="text-sm text-neutral-700 mt-1">{churchInfo.contact.address}</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DFD7C9] flex items-start gap-4 shadow-xs">
                  <Mail className="w-5 h-5 text-black shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs font-black text-black uppercase tracking-wider">Email Address</h3>
                    <p className="text-sm text-neutral-700 mt-1">{churchInfo.contact.email}</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DFD7C9] flex items-start gap-4 shadow-xs">
                  <Phone className="w-5 h-5 text-black shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs font-black text-black uppercase tracking-wider">Official Telephone</h3>
                    <p className="text-sm text-neutral-700 mt-1">{churchInfo.contact.phone}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">Support: {churchInfo.contact.supportPhone}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black text-black uppercase tracking-wider">Official Social Media</h4>
                <div className="flex items-center gap-3">
                  <a
                    href={churchInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-[#DFD7C9] text-neutral-800 hover:text-black hover:border-black transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={churchInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-[#DFD7C9] text-neutral-800 hover:text-black hover:border-black transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={churchInfo.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-[#DFD7C9] text-neutral-800 hover:text-black hover:border-black transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href={churchInfo.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-3 rounded-xl bg-white border border-[#DFD7C9] text-neutral-800 hover:text-black hover:border-black text-xs font-bold transition-colors"
                    aria-label="WhatsApp"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#DFD7C9] shadow-sm">
                <div className="mb-6">
                  <span className="text-xs font-black uppercase text-black tracking-wider block mb-1">
                    SEND A MESSAGE
                  </span>
                  <h3 className="text-2xl font-black text-[#141414] mb-2">
                    How Can We Assist You?
                  </h3>
                  <p className="text-xs text-neutral-600">
                    Our general secretary and communications team review and respond to inquiries promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-[#FAF8F5] border border-black/30 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
                    <h4 className="text-lg font-bold text-black">Message Delivered!</h4>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      Thank you for contacting HCCF FUOYE. A response will be sent to <strong>{form.email}</strong> as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="mt-3 text-xs text-black underline font-bold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-neutral-800 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Grace Adeola"
                        className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-neutral-800 mb-1">Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="adeola@fuoye.edu.ng"
                          className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-neutral-800 mb-1">Subject</label>
                        <input
                          type="text"
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          placeholder="General Enquiry / Unit Registration"
                          className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-neutral-800 mb-1">Your Message</label>
                      <textarea
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Write your inquiry or feedback here..."
                        className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-3 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#F4D900]" />
                      <span>SEND MESSAGE</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map for Campus Navigation */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase text-black tracking-wider block mb-2">
              CAMPUS NAVIGATION & DIRECTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#141414]">
              Find HCCF on Google Maps
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Switch between FUOYE Main Campus (Oye-Ekiti) and Ikole Campus to see live coordinates, meeting halls, and turn-by-turn directions.
            </p>
          </div>

          <CampusGoogleMap height="500px" />
        </div>
      </section>
    </>
  );
};
