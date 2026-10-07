import React from 'react';
import HCCCFLOGO from "./hccf logo.jpg"
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
     
       <img src={HCCCFLOGO} className='w-10 rounded-4xl' />

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
            <span className="font-extrabold text-brand-gold tracking-wider text-xs">
              FUOYE
            </span>
          </div>
          <span
            className={`font-medium tracking-wider uppercase ${
              textVariant === 'dark' ? 'text-neutral-600' : 'text-neutral-400'
            } ${currentSize.subtitle}`}
          >
            His Coming Campus Fellowship Fuoye
          </span>
        </div>
      )}
    </div>
  );
};
