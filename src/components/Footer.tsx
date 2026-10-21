import React from 'react';
import { Category } from '../types';

interface FooterProps {
  onSelectCategory: (category: Category) => void;
  onOpenWriteModal: () => void;
  onHomeClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenWriteModal,
  onHomeClick,
}) => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-stone-200/90 pt-16 pb-12 text-stone-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-200">
          {/* Brand & Manifesto (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={onHomeClick}
              className="text-left font-serif-heading text-2xl font-bold tracking-tight text-stone-900 cursor-pointer block"
            >
              Meridian Journal
            </button>
            <p className="font-serif italic text-sm text-stone-600 leading-relaxed max-w-sm">
              "We shape our buildings; thereafter, our buildings shape us. The same holds true for our software and our public spaces."
            </p>
            <p className="text-xs text-stone-500 max-w-sm leading-relaxed">
              An independent digital journal dedicated to architectural permanence, sovereign computing, sensory ecology, and humanistic culture.
            </p>
          </div>

          {/* Directory Pillars (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 font-sans">
              Thematic Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('Architecture')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Architecture & Vernacular
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Technology')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Resilient & Local Computing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Ecology')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Planetary Ecology & Heat
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Culture')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Civic Forum & Attention
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional / Colophon (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 font-sans">
              Editorial Colophon
            </h4>
            <ul className="space-y-2 text-xs text-stone-500">
              <li>Typefaces: Cormorant Garamond & Plus Jakarta Sans</li>
              <li>Typesetting: Modular scale, 65-75 ch reading measure</li>
              <li>Audio Narration: Web SpeechSynthesis Integration</li>
              <li>
                <button
                  onClick={onOpenWriteModal}
                  className="text-stone-800 underline hover:text-stone-900 cursor-pointer"
                >
                  Submit a manuscript for peer review
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Meridian Journal. Curated under Creative Commons BY-NC 4.0.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onHomeClick} className="hover:text-stone-900 transition cursor-pointer">
              Index
            </button>
            <button
              onClick={() => onSelectCategory('All')}
              className="hover:text-stone-900 transition cursor-pointer"
            >
              All Essays (10)
            </button>
            <button
              onClick={onOpenWriteModal}
              className="hover:text-stone-900 transition cursor-pointer"
            >
              Contribute
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
