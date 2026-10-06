import React, { createContext, useContext, useState } from 'react';
import { Sermon } from '../types';

interface AudioPlayerContextType {
  currentSermon: Sermon | null;
  isPlaying: boolean;
  playSermon: (sermon: Sermon) => void;
  pauseSermon: () => void;
  togglePlay: () => void;
  closePlayer: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSermon, setCurrentSermon] = useState<Sermon | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSermon = (sermon: Sermon) => {
    setCurrentSermon(sermon);
    setIsPlaying(true);
  };

  const pauseSermon = () => {
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const closePlayer = () => {
    setIsPlaying(false);
    setCurrentSermon(null);
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentSermon,
        isPlaying,
        playSermon,
        pauseSermon,
        togglePlay,
        closePlayer,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};
