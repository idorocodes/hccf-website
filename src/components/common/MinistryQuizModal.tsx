import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Heart, Compass } from 'lucide-react';
import { ministryQuizQuestions } from '../../data/quiz';
import { ministries } from '../../data/ministries';
import { Link } from 'react-router-dom';

interface MinistryQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MinistryQuizModal: React.FC<MinistryQuizModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [matchedMinistryId, setMatchedMinistryId] = useState<string | null>(null);

  // Application form state
  const [studentName, setStudentName] = useState('');
  const [department, setDepartment] = useState('');
  const [level, setLevel] = useState('100 Level');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (questionId: number, ministryId: string) => {
    const updated = { ...selectedAnswers, [questionId]: ministryId };
    setSelectedAnswers(updated);

    if (currentStep < ministryQuizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate best match
      const counts: Record<string, number> = {};
      Object.values(updated).forEach((id) => {
        counts[id] = (counts[id] || 0) + 1;
      });

      let bestId = 'voice-of-grace';
      let maxCount = 0;
      Object.entries(counts).forEach(([id, count]) => {
        if (count > maxCount) {
          maxCount = count;
          bestId = id;
        }
      });

      setMatchedMinistryId(bestId);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setMatchedMinistryId(null);
    setSubmitted(false);
  };

  const matchedMinistry = ministries.find((m) => m.id === matchedMinistryId) || ministries[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !phone) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Find Your Ministry Fit Quiz"
    >
      <div className="bg-[#FAF7F2] border border-[#DFD7C9] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] text-[#141414]">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#E5DFD3] flex items-center justify-between bg-[#F4EFE6]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#141414] text-[#F4D900] flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black uppercase text-[#141414] tracking-tight">
                Find Your Ministry Unit
              </h3>
              <p className="text-xs text-neutral-600 font-medium">
                30-second quiz to discover where your gifts align in HCCF FUOYE
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-600 hover:text-black hover:bg-[#EAE3D6] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {!matchedMinistryId ? (
            <div>
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs font-bold text-neutral-600 mb-2">
                <span>
                  Question {currentStep + 1} of {ministryQuizQuestions.length}
                </span>
                <span>{Math.round(((currentStep + 1) / ministryQuizQuestions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-[#E5DFD3] h-1.5 rounded-full mb-6 overflow-hidden">
                <div
                  className="bg-[#141414] h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / ministryQuizQuestions.length) * 100}%` }}
                />
              </div>

              {/* Current Question */}
              <div className="mb-6">
                <h4 className="text-xl sm:text-2xl font-black text-[#141414] leading-snug mb-1">
                  {ministryQuizQuestions[currentStep].question}
                </h4>
                <p className="text-sm text-neutral-600">
                  {ministryQuizQuestions[currentStep].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {ministryQuizQuestions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(ministryQuizQuestions[currentStep].id, option.ministryId)}
                    className="w-full text-left p-4 rounded-xl border border-[#DFD7C9] bg-white hover:bg-[#F4EFE6] hover:border-black/40 transition-all flex items-start justify-between group shadow-2xs"
                  >
                    <div>
                      <p className="text-sm font-extrabold text-[#141414] group-hover:underline">
                        {option.label}
                      </p>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-black"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous question</span>
                </button>
              )}
            </div>
          ) : (
            /* Match Result State */
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#DFD7C9] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#141414] text-[#F4D900] flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-black bg-[#F4D900] px-2 py-0.5 rounded">
                    Your Recommended Fit
                  </span>
                  <h4 className="text-2xl font-black text-[#141414] mt-1.5">
                    {matchedMinistry.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 mt-2 leading-relaxed">
                    {matchedMinistry.shortDescription}
                  </p>
                  <p className="text-xs font-semibold text-neutral-600 mt-2">
                    Schedule: <span className="text-black font-bold">{matchedMinistry.schedule}</span>
                  </p>
                </div>
              </div>

              {!submitted ? (
                /* Registration form */
                <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                  <h5 className="text-sm font-black uppercase tracking-wider text-black">
                    Submit Interest to the Unit Coordinator
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Samuel Adebayo"
                        className="w-full bg-white border border-[#DFD7C9] rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="080 1234 5678"
                        className="w-full bg-white border border-[#DFD7C9] rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Department / Course *
                      </label>
                      <input
                        type="text"
                        required
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="e.g. Computer Science"
                        className="w-full bg-white border border-[#DFD7C9] rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Current Level
                      </label>
                      <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="w-full bg-white border border-[#DFD7C9] rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black font-medium"
                      >
                        <option>100 Level (Fresher)</option>
                        <option>200 Level</option>
                        <option>300 Level</option>
                        <option>400 Level</option>
                        <option>500 Level</option>
                        <option>Postgraduate</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-black text-[#FAF7F2] font-black text-xs px-6 py-3 rounded-xl transition-all shadow-sm"
                    >
                      <span>Join {matchedMinistry.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#F4D900]" />
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-bold text-neutral-600 hover:text-black py-2 px-3"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 rounded-2xl bg-white border border-[#DFD7C9] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#DFD7C9] text-black mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                  <h5 className="text-base font-black text-[#141414]">
                    Application Successfully Received!
                  </h5>
                  <p className="text-xs text-neutral-700 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{studentName}</strong>! The coordinator for <strong>{matchedMinistry.name}</strong> will connect with you on WhatsApp ({phone}) before the next rehearsal or meeting.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <Link
                      to={`/ministries/${matchedMinistry.slug}`}
                      onClick={onClose}
                      className="text-xs font-black text-black underline underline-offset-4"
                    >
                      Read full unit guidelines →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
