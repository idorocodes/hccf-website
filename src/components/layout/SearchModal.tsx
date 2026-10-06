import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Calendar, Users, Bell, ArrowRight, FileText, Sparkles } from 'lucide-react';
import { sermons } from '../../data/sermons';
import { events } from '../../data/events';
import { ministries } from '../../data/ministries';
import { announcements } from '../../data/announcements';
import { devotionals } from '../../data/devotionals';
import { studyResources } from '../../data/resources';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const searchResults = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return { sermons: [], events: [], ministries: [], announcements: [], devotionals: [], resources: [] };

    return {
      sermons: sermons.filter(
        (s) =>
          s.title.toLowerCase().includes(cleanQuery) ||
          s.speaker.toLowerCase().includes(cleanQuery) ||
          s.summary.toLowerCase().includes(cleanQuery) ||
          s.category.toLowerCase().includes(cleanQuery) ||
          s.scripture.toLowerCase().includes(cleanQuery)
      ),
      events: events.filter(
        (e) =>
          e.title.toLowerCase().includes(cleanQuery) ||
          e.description.toLowerCase().includes(cleanQuery) ||
          e.venue.toLowerCase().includes(cleanQuery) ||
          e.category.toLowerCase().includes(cleanQuery)
      ),
      ministries: ministries.filter(
        (m) =>
          m.name.toLowerCase().includes(cleanQuery) ||
          m.shortDescription.toLowerCase().includes(cleanQuery) ||
          m.fullDescription.toLowerCase().includes(cleanQuery)
      ),
      announcements: announcements.filter(
        (a) =>
          a.title.toLowerCase().includes(cleanQuery) ||
          a.excerpt.toLowerCase().includes(cleanQuery) ||
          a.category.toLowerCase().includes(cleanQuery)
      ),
      devotionals: devotionals.filter(
        (d) =>
          d.title.toLowerCase().includes(cleanQuery) ||
          d.scripture.toLowerCase().includes(cleanQuery) ||
          d.thought.toLowerCase().includes(cleanQuery)
      ),
      resources: studyResources.filter(
        (r) =>
          r.title.toLowerCase().includes(cleanQuery) ||
          r.description.toLowerCase().includes(cleanQuery) ||
          r.category.toLowerCase().includes(cleanQuery)
      ),
    };
  }, [query]);

  if (!isOpen) return null;

  const totalResults =
    searchResults.sermons.length +
    searchResults.events.length +
    searchResults.ministries.length +
    searchResults.announcements.length +
    searchResults.devotionals.length +
    searchResults.resources.length;

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Site Search Modal"
    >
      <div className="bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh] text-[#141414]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E5DFD3] gap-3 bg-[#FAF7F2]">
          <Search className="w-5 h-5 text-black shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sermons, events, ministries, announcements..."
            className="flex-1 bg-transparent text-black placeholder-neutral-500 text-sm focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-neutral-600 hover:text-black text-xs px-2 py-1 bg-[#EAE3D6] rounded"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-600 hover:text-black p-1 rounded hover:bg-[#EAE3D6]"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!query.trim() ? (
            <div className="py-8 text-center space-y-3">
              <p className="text-neutral-600 text-sm font-medium">
                Type a keyword to discover resources across HCCF FUOYE.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="text-xs text-neutral-500">Popular searches:</span>
                {['Sunday Fellowship', 'Prayer', 'Convocation', 'Worship', 'Giving', 'First Timer'].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="text-xs px-2.5 py-1 bg-[#F3EFE6] border border-[#E2DBD0] text-neutral-800 rounded hover:border-black transition-colors font-medium"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-neutral-600">
              <p className="text-base font-bold text-black mb-1">No results found for "{query}"</p>
              <p className="text-xs">Try different keywords or browse our main pages directly.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Sermons */}
              {searchResults.sermons.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-black mb-2 tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Sermons & Teachings ({searchResults.sermons.length})</span>
                  </div>
                  <div className="space-y-2">
                    {searchResults.sermons.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => handleNavigate(`/sermons`)}
                        className="w-full text-left p-3 rounded-lg bg-[#F3EFE6] hover:bg-[#EAE3D6] border border-[#E2DBD0] hover:border-neutral-400 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-bold text-black group-hover:underline">
                            {s.title}
                          </p>
                          <p className="text-xs text-neutral-600">
                            {s.speaker} • {s.date}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-black shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Events */}
              {searchResults.events.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-black mb-2 tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Events ({searchResults.events.length})</span>
                  </div>
                  <div className="space-y-2">
                    {searchResults.events.map((e) => (
                      <button
                        key={e.id}
                        type="button"
                        onClick={() => handleNavigate(`/events/${e.slug}`)}
                        className="w-full text-left p-3 rounded-lg bg-[#F3EFE6] hover:bg-[#EAE3D6] border border-[#E2DBD0] hover:border-neutral-400 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-bold text-black group-hover:underline">
                            {e.title}
                          </p>
                          <p className="text-xs text-neutral-600">
                            {e.formattedDate} • {e.venue}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-black shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Ministries */}
              {searchResults.ministries.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-black mb-2 tracking-wider">
                    <Users className="w-3.5 h-3.5" />
                    <span>Ministries ({searchResults.ministries.length})</span>
                  </div>
                  <div className="space-y-2">
                    {searchResults.ministries.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => handleNavigate(`/ministries/${m.slug}`)}
                        className="w-full text-left p-3 rounded-lg bg-[#F3EFE6] hover:bg-[#EAE3D6] border border-[#E2DBD0] hover:border-neutral-400 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-bold text-black group-hover:underline">
                            {m.name}
                          </p>
                          <p className="text-xs text-neutral-600 line-clamp-1">
                            {m.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-black shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Announcements */}
              {searchResults.announcements.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-black mb-2 tracking-wider">
                    <Bell className="w-3.5 h-3.5" />
                    <span>Announcements ({searchResults.announcements.length})</span>
                  </div>
                  <div className="space-y-2">
                    {searchResults.announcements.map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => handleNavigate(`/announcements/${a.slug}`)}
                        className="w-full text-left p-3 rounded-lg bg-[#F3EFE6] hover:bg-[#EAE3D6] border border-[#E2DBD0] hover:border-neutral-400 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-bold text-black group-hover:underline">
                            {a.title}
                          </p>
                          <p className="text-xs text-neutral-600 line-clamp-1">
                            {a.excerpt}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-black shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Devotionals */}
              {searchResults.devotionals.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-black mb-2 tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Daily Devotionals ({searchResults.devotionals.length})</span>
                  </div>
                  <div className="space-y-2">
                    {searchResults.devotionals.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => handleNavigate(`/devotional`)}
                        className="w-full text-left p-3 rounded-lg bg-[#F3EFE6] hover:bg-[#EAE3D6] border border-[#E2DBD0] hover:border-neutral-400 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-bold text-black group-hover:underline">
                            {d.title}
                          </p>
                          <p className="text-xs text-neutral-600 line-clamp-1">
                            {d.scripture} • {d.dayOfWeek}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-black shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Study Resources */}
              {searchResults.resources.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-black mb-2 tracking-wider">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Study Materials ({searchResults.resources.length})</span>
                  </div>
                  <div className="space-y-2">
                    {searchResults.resources.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => handleNavigate(`/resources`)}
                        className="w-full text-left p-3 rounded-lg bg-[#F3EFE6] hover:bg-[#EAE3D6] border border-[#E2DBD0] hover:border-neutral-400 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-bold text-black group-hover:underline">
                            {r.title}
                          </p>
                          <p className="text-xs text-neutral-600 line-clamp-1">
                            {r.category} • {r.format}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-black shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#EAE3D6] border-t border-[#DFD8CA] flex items-center justify-between text-[11px] text-neutral-600 font-medium">
          <span>Press ESC to close</span>
          <span>HCCF FUOYE Knowledge Base</span>
        </div>
      </div>
    </div>
  );
};
