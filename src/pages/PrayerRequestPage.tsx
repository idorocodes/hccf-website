import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { CheckCircle2, Send, Lock } from 'lucide-react';

export const PrayerRequestPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    isAnonymous: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.request) return;
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Prayer Request | Intercession Team | HCCF FUOYE"
        description="Submit your prayer needs confidentially. The HCCF FUOYE Intercessory Prayer Band will stand in faith with you."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              WE ARE STANDING WITH YOU
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              PRAYER <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">REQUEST</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              No matter what challenge you are facing academically, spiritually, financially, or emotionally, our prayer team will bring your burdens before God's altar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#DFD7C9] shadow-sm space-y-8">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-xs text-neutral-800 font-medium">
              <Lock className="w-5 h-5 text-black shrink-0" />
              <span>
                <strong>Confidentiality Assured:</strong> All prayer submissions are treated with utmost privacy and shared strictly with consecrated intercessors.
              </span>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#FAF8F5] border border-black/30 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-black mx-auto" />
                <h3 className="text-xl font-bold text-black">Your prayer request has been received.</h3>
                <p className="text-xs sm:text-sm text-neutral-700 max-w-lg mx-auto leading-relaxed">
                  Our intercessory unit will lift your need before the Lord during our daily watches. Remember the promise in 1 John 5:14: "If we ask anything according to His will, He hears us."
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', request: '', isAnonymous: false });
                  }}
                  className="mt-4 text-xs text-black underline font-bold"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                {/* Anonymous Toggle */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] flex items-center justify-between">
                  <div>
                    <p className="font-bold text-black">Submit Anonymously?</p>
                    <p className="text-neutral-600 text-[11px]">
                      Your identity will be completely hidden from the intercessory list.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.isAnonymous}
                    onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                    className="w-4 h-4 rounded text-black focus:ring-black bg-white border-neutral-400"
                  />
                </div>

                {!formData.isAnonymous && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-neutral-800 mb-1">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sister Mercy"
                        className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-neutral-800 mb-1">Email (Optional)</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="for pastoral follow-up"
                          className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-neutral-800 mb-1">Phone / WhatsApp (Optional)</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="for urgent calls"
                          className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-bold text-neutral-800 mb-1">
                    Your Prayer Need or Burden <span className="text-black">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={formData.request}
                    onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                    placeholder="Tell us what you would like the church to pray with you for (exams, health, family, spiritual breakthrough...)"
                    className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-3 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-[#F4D900]" />
                  <span>SUBMIT PRAYER REQUEST</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
