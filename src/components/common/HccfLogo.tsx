import React from 'react';

interface HccfLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textVariant?: 'light' | 'dark';
  className?: string;
}

export const HccfLogo: React.FC<HccfLogoProps> = ({
  size = 'md',
  showText = true,
  textVariant = 'light',
  className = '',
}) => {
  const sizeMap = {
    sm: { icon: 34, title: 'text-xs', subtitle: 'text-[9px]' },
    md: { icon: 44, title: 'text-sm font-bold tracking-tight', subtitle: 'text-[10px] tracking-wider' },
    lg: { icon: 60, title: 'text-base font-extrabold tracking-tight', subtitle: 'text-xs tracking-wider' },
    xl: { icon: 96, title: 'text-xl font-extrabold tracking-tight', subtitle: 'text-sm tracking-wider' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Crest Seal SVG */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105"
        role="img"
        aria-label="His Coming Campus Fellowship FUOYE Official Logo"
      >
        <defs>
          {/* Radial & linear gradients based on brand palette */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4D900" />
            <stop offset="100%" stopColor="#C9B400" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1729C7" />
            <stop offset="100%" stopColor="#0B134D" />
          </linearGradient>
          <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0B134D" stopOpacity="0.95" />
          </radialGradient>
        </defs>

        {/* Outer Ring with Gold Border */}
        <circle cx="80" cy="80" r="76" fill="#0A0A0A" stroke="#F4D900" strokeWidth="4" />
        <circle cx="80" cy="80" r="70" fill="none" stroke="#F4D900" strokeWidth="1" strokeDasharray="3 3" />

        {/* Circular text path for seal inscription */}
        <path
          id="textRingPath"
          d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
          fill="none"
        />

        {/* Inner Field: Deep Royal Blue */}
        <circle cx="80" cy="80" r="54" fill="url(#blueGradient)" stroke="#F4D900" strokeWidth="2" />

        {/* Globe Grid lines (World evangelism) */}
        <ellipse cx="80" cy="80" rx="38" ry="46" fill="none" stroke="#F4D900" strokeOpacity="0.25" strokeWidth="1" />
        <ellipse cx="80" cy="80" rx="20" ry="46" fill="none" stroke="#F4D900" strokeOpacity="0.25" strokeWidth="1" />
        <line x1="26" y1="80" x2="134" y2="80" stroke="#F4D900" strokeOpacity="0.25" strokeWidth="1" />
        <line x1="34" y1="64" x2="126" y2="64" stroke="#F4D900" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="34" y1="96" x2="126" y2="96" stroke="#F4D900" strokeOpacity="0.2" strokeWidth="1" />

        {/* Radiant Glory Rays */}
        <g stroke="#F4D900" strokeWidth="1.5" opacity="0.4">
          <line x1="80" y1="36" x2="80" y2="44" />
          <line x1="80" y1="116" x2="80" y2="124" />
          <line x1="36" y1="80" x2="44" y2="80" />
          <line x1="116" y1="80" x2="124" y2="80" />
          <line x1="49" y1="49" x2="55" y2="55" />
          <line x1="105" y1="105" x2="111" y2="111" />
          <line x1="111" y1="49" x2="105" y2="55" />
          <line x1="49" y1="111" x2="55" y2="105" />
        </g>

        {/* Open Bible Symbol */}
        <path
          d="M 52,94 C 64,88 74,90 80,94 C 86,90 96,88 108,94 L 108,110 C 96,104 86,106 80,110 C 74,106 64,104 52,110 Z"
          fill="#FFFFFF"
          stroke="#0A0A0A"
          strokeWidth="1.5"
        />
        {/* Book spine line & pages */}
        <line x1="80" y1="94" x2="80" y2="110" stroke="#C9B400" strokeWidth="1.5" />
        <line x1="58" y1="98" x2="74" y2="98" stroke="#101A73" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="58" y1="103" x2="74" y2="103" stroke="#101A73" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="86" y1="98" x2="102" y2="98" stroke="#101A73" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="86" y1="103" x2="102" y2="103" stroke="#101A73" strokeWidth="1" strokeOpacity="0.5" />

        {/* Central Kingdom Cross */}
        <g filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.5))">
          {/* Vertical Cross Beam */}
          <rect x="76.5" y="44" width="7" height="42" rx="1.5" fill="url(#goldGradient)" stroke="#050505" strokeWidth="1" />
          {/* Horizontal Cross Beam */}
          <rect x="66" y="54" width="28" height="7" rx="1.5" fill="url(#goldGradient)" stroke="#050505" strokeWidth="1" />
        </g>

        {/* Graduation Cap (Higher Education / Campus Ministry) */}
        <g transform="translate(80, 52) scale(0.65)">
          {/* Cap diamond */}
          <polygon points="0,-14 26,0 0,14 -26,0" fill="#0A0A0A" stroke="#F4D900" strokeWidth="2" />
          {/* Cap base skullcap */}
          <path d="M -15,2 C -15,10 15,10 15,2 Z" fill="#0A0A0A" stroke="#F4D900" strokeWidth="1.5" />
          {/* Tassel */}
          <line x1="0" y1="0" x2="22" y2="8" stroke="#F4D900" strokeWidth="1.5" />
          <circle cx="22" cy="10" r="2" fill="#F4D900" />
        </g>

        {/* Scripture ribbon / banner text */}
        <rect x="54" y="118" width="52" height="12" rx="3" fill="#0A0A0A" stroke="#F4D900" strokeWidth="1" />
        <text
          x="80"
          y="126.5"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="bold"
          fill="#F4D900"
          letterSpacing="0.8"
          fontFamily="system-ui, sans-serif"
        >
          EPH. 4:13
        </text>

        {/* Acronym badge at top */}
        <text
          x="80"
          y="32"
          textAnchor="middle"
          fontSize="11"
          fontWeight="900"
          fill="#F4D900"
          letterSpacing="2"
          fontFamily="system-ui, sans-serif"
        >
          HCCF
        </text>
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight ${
                textVariant === 'dark' ? 'text-black' : 'text-white'
              } ${currentSize.title}`}
            >
              HCCF
            </span>
            <span className="font-extrabold text-[#F4D900] tracking-wider text-xs">
              FUOYE
            </span>
          </div>
          <span
            className={`font-medium tracking-wider uppercase ${
              textVariant === 'dark' ? 'text-neutral-600' : 'text-neutral-400'
            } ${currentSize.subtitle}`}
          >
            His Coming Campus Fellowship
          </span>
        </div>
      )}
    </div>
  );
};
