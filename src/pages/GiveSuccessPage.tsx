import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { CheckCircle2, Heart, Home } from 'lucide-react';

export const GiveSuccessPage: React.FC = () => {
  const location = useLocation();
  const state = (location.state as {
    reference?: string;
    amount?: number;
    category?: string;
    date?: string;
    donorName?: string;
  }) || {};

  const reference = state.reference || `HCCF-BACH-${new Date().getFullYear()}-DEMO89`;
  const amount = state.amount || 5000;
  const category = state.category || 'Offering';
  const date = state.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const donorName = state.donorName || 'Beloved Partner';

  return (
    <>
      <SEO
        title="Thank You for Giving | HCCF FUOYE"
        description="Your sacrificial giving advances the Kingdom of God on campus at Federal University Oye-Ekiti."
      />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FAF8F5] min-h-[90vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 w-full">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DFD7C9] shadow-lg text-center space-y-6">
            {/* Success icon */}
            <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border-2 border-black flex items-center justify-center mx-auto text-black">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black text-black uppercase tracking-wider">
                GIVING CONFIRMATION
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#141414] uppercase tracking-tight">
                THANK YOU FOR GIVING.
              </h1>
              <p className="text-sm sm:text-base text-neutral-700">
                Your generosity is making an impact across FUOYE campus and preparing lives for eternity.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] text-left space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#EAE3D6]">
                <span className="text-neutral-600 font-medium">Partner / Donor:</span>
                <span className="font-bold text-black">{donorName}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-[#EAE3D6]">
                <span className="text-neutral-600 font-medium">Giving Category:</span>
                <span className="font-bold text-black">{category}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-[#EAE3D6]">
                <span className="text-neutral-600 font-medium">Amount Given:</span>
                <span className="font-black text-black text-sm">₦{amount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-[#EAE3D6]">
                <span className="text-neutral-600 font-medium">Transaction Reference:</span>
                <span className="font-mono text-neutral-800 font-bold">{reference}</span>
              </div>

              <div className="flex justify-between py-1.5">
                <span className="text-neutral-600 font-medium">Date:</span>
                <span className="text-neutral-800 font-semibold">{date}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black text-xs px-6 py-3.5 rounded-xl transition-colors shadow-sm"
              >
                <Home className="w-4 h-4" />
                <span>RETURN HOME</span>
              </Link>

              <Link
                to="/give"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF8F5] hover:bg-[#F3EFE6] text-black font-extrabold text-xs px-6 py-3.5 rounded-xl border border-[#DFD7C9] transition-colors"
              >
                <Heart className="w-4 h-4 fill-black" />
                <span>GIVE AGAIN</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
