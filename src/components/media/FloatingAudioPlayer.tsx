import React, { useState, useEffect } from 'react';
import { useAudioPlayer } from '../../context/AudioPlayerContext';
import { Play, Pause, X, Volume2, VolumeX, RotateCcw, FastForward } from 'lucide-react';

export const FloatingAudioPlayer: React.FC = () => {
  const { currentSermon, isPlaying, togglePlay, closePlayer } = useAudioPlayer();
  const [progress, setProgress] = useState(12);
  const [speed, setSpeed] = useState<1 | 1.25 | 1.5>(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!currentSermon) return null;

  const cycleSpeed = () => {
    if (speed === 1) setSpeed(1.25);
    else if (speed === 1.25) setSpeed(1.5);
    else setSpeed(1);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-md border-t border-[#DFD7C9] shadow-2xl px-4 py-3 sm:py-3.5 animate-slideUp text-[#141414]"
      role="region"
      aria-label="Sermon Audio Player"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Sermon Metadata */}
        <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-neutral-900 shrink-0">
            <img
              src={currentSermon.thumbnail}
              alt={currentSermon.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1 sm:max-w-xs md:max-w-md">
            <p className="text-xs font-black text-black truncate leading-tight">
              {currentSermon.title}
            </p>
            <p className="text-[11px] text-neutral-600 truncate mt-0.5 font-medium">
              {currentSermon.speaker} • {currentSermon.duration}
            </p>
          </div>
        </div>

        {/* Playback Controls & Progress Bar */}
        <div className="flex-1 max-w-xl w-full flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setProgress((p) => Math.max(0, p - 5))}
              className="p-1 text-neutral-700 hover:text-black transition-colors"
              title="Rewind 15 seconds"
              aria-label="Rewind"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-[#141414] hover:bg-black text-[#FAF8F5] flex items-center justify-center transition-transform hover:scale-105 shadow-sm"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-white" />
              ) : (
                <Play className="w-4 h-4 fill-white translate-x-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setProgress((p) => Math.min(100, p + 5))}
              className="p-1 text-neutral-700 hover:text-black transition-colors"
              title="Fast Forward 15 seconds"
              aria-label="Fast forward"
            >
              <FastForward className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Slider */}
          <div className="w-full flex items-center gap-2">
            <span className="text-[10px] text-neutral-500 font-mono">
              {Math.floor((progress * 45) / 100)}:20
            </span>
            <div className="flex-1 h-1.5 bg-[#EAE3D6] rounded-full overflow-hidden relative cursor-pointer">
              <div
                className="h-full bg-black rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] text-neutral-500 font-mono">
              {currentSermon.duration}
            </span>
          </div>
        </div>

        {/* Speed, Volume, and Close */}
        <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
          <button
            type="button"
            onClick={cycleSpeed}
            className="px-2 py-0.5 rounded text-[11px] font-black bg-[#F3EFE6] border border-[#DFD7C9] text-black hover:bg-[#EAE3D6]"
            title="Playback Speed"
          >
            {speed}x
          </button>

          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="p-1 text-neutral-700 hover:text-black transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={closePlayer}
            className="p-1 text-neutral-600 hover:text-black rounded-md hover:bg-[#F3EFE6] transition-colors"
            aria-label="Close audio player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
