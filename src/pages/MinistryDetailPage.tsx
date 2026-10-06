import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { ministries } from '../data/ministries';
import { Clock, BookOpen, CheckCircle2, ArrowLeft, Send, Sparkles } from 'lucide-react';

export const MinistryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const ministry = ministries.find((m) => m.slug === slug);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    level: '100 Level',
    message: '',
  });

  if (!ministry) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center bg-[#FAF8F5]">
        <h2 className="text-2xl font-black text-black mb-2">Ministry Not Found</h2>
        <p className="text-neutral-600 text-sm mb-6">The requested fellowship department does not exist.</p>
        <Link
          to="/ministries"
          className="bg-[#141414] text-white font-bold text-xs px-6 py-3 rounded-md"
        >
          Back to Ministries Directory
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO
        title={`${ministry.name} | HCCF FUOYE Ministries`}
        description={ministry.shortDescription}
      />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAF8F5] border-b border-[#E5DFD3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/ministries"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Ministries</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-black bg-[#F3EFE6] px-3 py-1 rounded-md border border-[#E2DBD0] inline-block">
              {ministry.leadRole}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight leading-tight">
              {ministry.name}
            </h1>
            <p className="text-base sm:text-xl text-neutral-700 leading-relaxed font-medium">
              {ministry.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (7 cols): Full description, responsibilities, scripture */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-[#141414]">About the Unit</h2>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  {ministry.fullDescription}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#141414]">Key Responsibilities & Activities</h3>
                <div className="space-y-3">
                  {ministry.keyResponsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white border border-[#DFD7C9] flex items-start gap-3 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scripture Anchor */}
              <div className="p-6 rounded-2xl bg-[#EAE3D6] border border-[#D5CEBF] space-y-2">
                <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-black" />
                  <span>Scriptural Mandate</span>
                </div>
                <p className="text-sm italic text-neutral-800 font-medium">
                  {ministry.scriptureReference}
                </p>
              </div>

              {/* Schedule Info */}
              <div className="p-6 rounded-2xl bg-white border border-[#DFD7C9] flex items-center gap-4 shadow-xs">
                <Clock className="w-6 h-6 text-black shrink-0" />
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-neutral-500">
                    Rehearsal / Unit Meeting Time
                  </h4>
                  <p className="text-sm font-black text-black mt-0.5">
                    {ministry.schedule}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Join Ministry Form */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DFD7C9] shadow-md sticky top-28">
                <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Get Involved</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#141414] mb-2">
                  Join {ministry.name}
                </h3>
                <p className="text-xs text-neutral-600 mb-6">
                  Fill out this brief expression of interest. The unit head will reach out to schedule an orientation.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#FAF8F5] border border-black/30 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-black mx-auto" />
                    <h4 className="text-base font-bold text-black">Interest Received!</h4>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      Thank you for desiring to serve in <strong>{ministry.name}</strong>. A unit coordinator will contact you via WhatsApp or phone before our next rehearsal.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-3 text-xs text-black underline font-bold"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-neutral-800 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Samuel Adebayo"
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
                          placeholder="adebayo@fuoye.edu.ng"
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
                          placeholder="e.g. Biochemistry"
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
                          <option>Postgraduate / Alumni</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-neutral-800 mb-1">Previous Experience or Note (Optional)</label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your background or motivation..."
                        className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black rounded-lg transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#F4D900]" />
                      <span>SUBMIT JOIN REQUEST</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
