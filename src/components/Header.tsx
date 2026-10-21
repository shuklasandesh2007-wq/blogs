import React from 'react';
import { Bookmark, PenTool, Search } from 'lucide-react';
import { Category } from '../types';

interface HeaderProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
  onOpenWriteModal: () => void;
  onOpenReadingList: () => void;
  savedCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onHomeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenWriteModal,
  onOpenReadingList,
  savedCount,
  searchQuery,
  onSearchChange,
  onHomeClick,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand title, single element, display face, whitespace-nowrap shrink-0 */}
          <button
            onClick={onHomeClick}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm"
          >
            <span className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 group-hover:text-stone-700 transition-colors whitespace-nowrap shrink-0">
              Meridian
            </span>
            <span className="sr-only">Meridian Journal Home</span>
          </button>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <button
              onClick={() => {
                onHomeClick();
                onSelectCategory('All');
              }}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer border-b-2 ${
                activeCategory === 'All'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              All Essays
            </button>
            <button
              onClick={() => {
                onHomeClick();
                onSelectCategory('Architecture');
              }}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer border-b-2 ${
                activeCategory === 'Architecture'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              Architecture
            </button>
            <button
              onClick={() => {
                onHomeClick();
                onSelectCategory('Technology');
              }}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer border-b-2 ${
                activeCategory === 'Technology'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => {
                onHomeClick();
                onSelectCategory('Ecology');
              }}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer border-b-2 ${
                activeCategory === 'Ecology'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              Ecology
            </button>
            <button
              onClick={() => {
                onHomeClick();
                onSelectCategory('Culture');
              }}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer border-b-2 ${
                activeCategory === 'Culture'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              Culture
            </button>
          </nav>

          {/* Zone 3: 1 primary action plus quiet utilities */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Input */}
            <div className="relative hidden sm:block w-44 lg:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search essays..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs text-stone-800 bg-white border border-stone-300 rounded-md placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition"
              />
            </div>

            {/* Reading list button with counter */}
            <button
              onClick={onOpenReadingList}
              className="relative p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 rounded-md transition-colors cursor-pointer"
              title="Saved Reading List"
              aria-label="View Reading List"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-stone-900 text-white text-[10px] font-mono font-medium rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenWriteModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Write Essay</span>
            </button>
          </div>
        </div>

        {/* Mobile Search & Category Bar */}
        <div className="md:hidden pb-3 pt-1 border-t border-stone-200/60 flex flex-col gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search essays, authors, topics..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs text-stone-800 bg-white border border-stone-300 rounded-md placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto py-1 text-xs text-stone-600 no-scrollbar">
            {(['All', 'Architecture', 'Technology', 'Ecology', 'Culture'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onHomeClick();
                  onSelectCategory(cat);
                }}
                className={`px-2.5 py-1 rounded whitespace-nowrap shrink-0 transition-colors ${
                  activeCategory === cat
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
