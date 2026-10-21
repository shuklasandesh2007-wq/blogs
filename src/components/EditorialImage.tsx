import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  caption?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  caption,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-stone-200 ${containerClassName}`}>
      {hasError || !src ? (
        <div className="w-full h-full min-h-[180px] flex flex-col items-center justify-center p-6 text-center bg-stone-100 text-stone-500 border border-stone-200">
          <BookOpen className="w-8 h-8 mb-2 text-stone-400 stroke-1" />
          <span className="font-serif italic text-xs text-stone-600 line-clamp-1">{alt}</span>
          <span className="text-[10px] text-stone-400 tracking-wider uppercase mt-1">
            Archival Record Plate
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover ${className}`}
        />
      )}
      {caption && (
        <p className="mt-2 text-xs font-serif italic text-stone-500">{caption}</p>
      )}
    </div>
  );
};
