import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { GivingCategoryType, GivingPayload } from '../types';
import { givingService } from '../services/givingService';
import {
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export const GivePage: React.FC = () => {
  const navigate = useNavigate();

  const categories: GivingCategoryType[] = [
    'Tithe',
    'Offering',
    'Thanksgiving',
    'Missions',
    'Welfare',
    'Building Project',
    'Other',
  ];

  const presets = [1000, 2500, 5000, 10000, 20000, 50000];

  const [selectedCategory, setSelectedCategory] = useState<GivingCategoryType>('Offering');
  const [customCategory, setCustomCategory] = useState('');
  const [amount, setAmount] = useState<number>(5000);
  const [customAmountInput, setCustomAmountInput] = useState<string>('5000');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePresetClick = (val: number) => {
    setAmount(val);
    setCustomAmountInput(val.toString());
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmountInput(raw);
    const num = parseInt(raw, 10);
    setAmount(isNaN(num) ? 0 : num);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0) return;

    setIsLoading(true);

    const payload: GivingPayload = {
      amount,
      category: selectedCategory,
      customCategory: selectedCategory === 'Other' ? customCategory : undefined,
      donorName: isAnonymous ? 'Anonymous' : donorName,
      donorEmail: isAnonymous ? undefined : donorEmail,
      donorPhone: isAnonymous ? undefined : donorPhone,
      isAnonymous,
      notes,
    };

    try {
      const response = await givingService.createCheckoutSession(payload);
      navigate('/give/success', {
        state: {
          reference: response.reference,
          amount: response.amount,
          category: response.category,
          date: response.date,
          donorName: isAnonymous ? 'Anonymous' : donorName || 'Partner',
        },
      });
    } catch {
      navigate('/give/failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Give to the Work | Tithes, Offerings & Missions | HCCF FUOYE"
        description="Support His Coming Campus Fellowship, FUOYE. Your sacrificial giving fuels student welfare, evangelism walks, and campus ministry advancement."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAF8F5] border-b border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest text-black uppercase mb-3 block">
              KINGDOM STEWARDSHIP
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight uppercase leading-tight mb-4">
              GIVE TO <br />
              <span className="underline decoration-[#F4D900] decoration-4 underline-offset-4">THE WORK</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
              Your generosity helps us advance the work of Christ, provide for student welfare, and spread the Gospel across the Federal University Oye-Ekiti and surrounding host communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Giving Form */}
      <section className="py-20 bg-[#F3EFE6] border-b border-[#E5DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#DFD7C9] rounded-3xl p-6 sm:p-10 shadow-md space-y-10">
            {/* Step 1: Giving Category */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#141414] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-sm font-black uppercase tracking-wider text-black">
                  Select Giving Category
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`py-3 px-3 text-xs font-black rounded-xl transition-colors border text-center ${
                      selectedCategory === cat
                        ? 'bg-[#141414] text-white border-black shadow-xs'
                        : 'bg-[#FAF8F5] text-neutral-800 border-[#DFD7C9] hover:border-black/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {selectedCategory === 'Other' && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    placeholder="Specify project or purpose..."
                    className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-xl p-2.5 text-xs text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                  />
                </div>
              )}
            </div>

            {/* Step 2: Amount Selector */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#141414] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-sm font-black uppercase tracking-wider text-black">
                  Choose Giving Amount
                </h3>
              </div>

              {/* Presets */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
                {presets.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handlePresetClick(val)}
                    className={`py-2.5 px-2 text-xs font-bold rounded-xl border transition-colors ${
                      amount === val && customAmountInput === val.toString()
                        ? 'bg-[#F4D900] text-black border-black font-black'
                        : 'bg-[#FAF8F5] text-neutral-800 border-[#DFD7C9] hover:text-black hover:border-neutral-400'
                    }`}
                  >
                    ₦{val.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-black text-black">
                  ₦
                </span>
                <input
                  type="text"
                  value={customAmountInput}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter custom amount"
                  className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-xl pl-10 pr-4 py-3.5 text-xl font-bold text-black focus:outline-none focus:border-black"
                />
              </div>
            </div>

            {/* Step 3: Donor Details */}
            <form onSubmit={handleSubmit} className="space-y-6 pt-2 border-t border-[#F0EBE0]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#141414] text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-sm font-black uppercase tracking-wider text-black">
                    Donor Information
                  </h3>
                </div>

                {/* Anonymous Checkbox */}
                <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-700 font-bold">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 rounded text-black bg-[#FAF8F5] border-neutral-400 focus:ring-black"
                  />
                  <span>Give Anonymously</span>
                </label>
              </div>

              {!isAnonymous && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-neutral-800 mb-1">Full Name (Optional)</label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="e.g. John Emmanuel"
                      className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-neutral-800 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="john@example.com (for receipt)"
                        className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-neutral-800 mb-1">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        placeholder="0800 000 0000"
                        className="w-full bg-[#FAF8F5] border border-[#DFD7C9] rounded-lg p-2.5 text-black placeholder-neutral-500 focus:outline-none focus:border-black font-medium"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  disabled={amount <= 0 || isLoading}
                  className="w-full py-4 bg-[#141414] hover:bg-black active:scale-[0.99] disabled:opacity-50 text-[#FAF8F5] font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <span>PREPARING SECURE CHECKOUT...</span>
                  ) : (
                    <>
                      <span>CONTINUE TO GIVE ₦{amount.toLocaleString()}</span>
                      <ArrowRight className="w-4 h-4 text-[#F4D900]" />
                    </>
                  )}
                </button>

                {/* Trust Notices */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600 font-medium gap-2 pt-2">
                  <div className="flex items-center gap-1.5 text-black font-bold">
                    <ShieldCheck className="w-4 h-4 text-black" />
                    <span>Secure payment · 256-bit encryption</span>
                  </div>
                  <span>Payments will be processed securely via Bachs.</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Scriptural Assurance Section */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-base sm:text-lg text-neutral-800 italic font-medium">
            "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."
          </p>
          <p className="text-xs font-black text-black uppercase tracking-wider">
            2 Corinthians 9:7
          </p>
        </div>
      </section>
    </>
  );
};
