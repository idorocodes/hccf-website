import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  action,
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-2">
          {align === 'center' && <span className="h-0.5 w-6 bg-black" />}
          <span className="text-xs font-black tracking-widest uppercase text-black">
            {eyebrow}
          </span>
          <span className="h-0.5 w-6 bg-black" />
        </div>
      )}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${align === 'center' ? 'items-center' : ''}`}>
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase ${
            isDark ? 'text-white' : 'text-[#141414]'
          }`}
          style={{ textWrap: 'balance' }}
        >
          {title}
        </h2>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            isDark ? 'text-neutral-300' : 'text-neutral-700 font-normal'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
