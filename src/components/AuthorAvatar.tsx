import React, { useState } from 'react';

interface AuthorAvatarProps {
  src: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AuthorAvatar: React.FC<AuthorAvatarProps> = ({
  src,
  name,
  size = 'md',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-6 h-6 text-[10px]',
    md: 'w-8 h-8 text-xs',
    lg: 'w-12 h-12 text-sm',
    xl: 'w-16 h-16 text-base',
  }[size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'];

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  if (hasError || !src) {
    return (
      <div
        className={`${sizeClasses} rounded-full bg-stone-300 text-stone-800 font-medium flex items-center justify-center shrink-0 border border-stone-400/50 ${className}`}
        title={name}
        aria-label={name}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`${sizeClasses} rounded-full object-cover shrink-0 border border-stone-300 ${className}`}
    />
  );
};
