import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { givingService, CheckoutResponse } from '../services/givingService';
import { Loader2, CheckCircle2, AlertTriangle, Home } from 'lucide-react';

export const PaymentStatusPage: React.FC = () => {
  const { reference } = useParams<{ reference: string }>();
  const [loading, setLoading] = useState(true);
  const [statusData, setStatusData] = useState<CheckoutResponse | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (!reference) return;

    givingService
      .getPaymentStatus(reference)
      .then((res) => {
        if (isMounted) {
          setStatusData(res);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setStatusData({
            reference,
            status: 'failed',
            amount: 0,
            category: 'Offering',
            date: new Date().toLocaleDateString(),
          });
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [reference]);

  return (
    <>
      <SEO
        title={`Payment Status ${reference} | HCCF FUOYE`}
        description="Verify your giving transaction status."
      />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FAF8F5] min-h-[90vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 w-full">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DFD7C9] shadow-lg text-center space-y-6">
            {loading ? (
              <div className="space-y-4 py-8">
                <Loader2 className="w-12 h-12 text-black animate-spin mx-auto" />
                <h2 className="text-xl font-black text-black">Checking Transaction Status...</h2>
                <p className="text-xs text-neutral-600">
                  Verifying reference <span className="font-mono text-black font-bold">{reference}</span> with payment provider...
                </p>
              </div>
            ) : statusData?.status === 'success' ? (
              <>
                <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border-2 border-black flex items-center justify-center mx-auto text-black">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-black text-black uppercase tracking-wider">
                    PAYMENT SUCCESSFUL
                  </span>
                  <h1 className="text-2xl font-black text-[#141414]">Transaction Verified</h1>
                  <p className="text-xs text-neutral-700">
                    Your contribution of <strong>₦{statusData.amount.toLocaleString()}</strong> ({statusData.category}) has been verified successfully.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-left text-xs space-y-2">
                  <p className="flex justify-between">
                    <span className="text-neutral-600">Ref:</span>
                    <span className="font-mono text-black font-bold">{statusData.reference}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-neutral-600">Date:</span>
                    <span className="text-neutral-800 font-semibold">{statusData.date}</span>
                  </p>
                </div>
                <Link
                  to="/"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#141414] text-white font-black text-xs py-3.5 rounded-xl hover:bg-black transition-colors shadow-sm"
                >
                  <Home className="w-4 h-4" />
                  <span>Return to Home</span>
                </Link>
              </>
            ) : (
              <>
                <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mx-auto text-red-600">
                  <AlertTriangle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    PAYMENT FAILED
                  </span>
                  <h1 className="text-2xl font-black text-[#141414]">Transaction Incomplete</h1>
                  <p className="text-xs text-neutral-700">
                    This reference could not be validated or the transaction was declined.
                  </p>
                </div>
                <div className="flex gap-3 pt-2">
                  <Link
                    to="/give"
                    className="flex-1 py-3 bg-[#141414] text-white font-black text-xs rounded-xl hover:bg-black text-center"
                  >
                    Try Again
                  </Link>
                  <Link
                    to="/"
                    className="flex-1 py-3 bg-[#FAF8F5] border border-[#DFD7C9] text-black font-extrabold text-xs rounded-xl text-center"
                  >
                    Home
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
