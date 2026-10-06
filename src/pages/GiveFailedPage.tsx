import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export const GiveFailedPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Payment Not Completed | HCCF FUOYE Giving"
        description="Your giving transaction could not be completed."
      />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FAF8F5] min-h-[90vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 w-full">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DFD7C9] shadow-lg text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mx-auto text-red-600">
              <AlertTriangle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                TRANSACTION NOTICE
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#141414] uppercase tracking-tight">
                PAYMENT NOT COMPLETED
              </h1>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                We were unable to verify or finalize your donation transaction. No charges have been deducted from your account.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-xs text-neutral-700 text-left space-y-1">
              <p className="font-bold text-black">Possible causes:</p>
              <ul className="list-disc pl-4 space-y-1 text-[11px] text-neutral-600">
                <li>Network timeout or interruption with your bank</li>
                <li>Declined transaction by card issuer or USSD gateway</li>
                <li>Cancelled before payment authorization</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/give"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-black text-[#FAF8F5] font-black text-xs px-6 py-3.5 rounded-xl transition-colors shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                <span>TRY AGAIN</span>
              </Link>

              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF8F5] hover:bg-[#F3EFE6] text-black font-extrabold text-xs px-6 py-3.5 rounded-xl border border-[#DFD7C9] transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>RETURN HOME</span>
              </Link>
            </div>

            <p className="text-[11px] text-neutral-600 pt-2">
              Need assistance? Contact our finance team at{' '}
              <Link to="/contact" className="text-black font-bold underline">
                contact@hccffuoye.org
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
