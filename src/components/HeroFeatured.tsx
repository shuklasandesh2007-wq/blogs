import React from 'react';
import { ArrowRight, Bookmark, Clock, Eye } from 'lucide-react';
import { Article } from '../types';
import { EditorialImage } from './EditorialImage';
import { AuthorAvatar } from './AuthorAvatar';

interface HeroFeaturedProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  article,
  onSelectArticle,
  isSaved,
  onToggleSave,
}) => {
  return (
    <section className="relative border-b border-stone-200/80 bg-[#FAF7F2] pb-12 pt-6 sm:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header Stamp */}
        <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-8">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-sans text-stone-500">
            <span className="font-semibold text-stone-900">Vol. IV · Issue 10</span>
            <span aria-hidden="true">/</span>
            <span>Lead Investigation</span>
            <span aria-hidden="true">/</span>
            <span>Curator's Choice</span>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-stone-400">
            EST. 2026 · ESSAYS & INQUIRIES
          </span>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Headline & Narrative Context (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Quiet unboxed category kicker */}
              <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-3 tracking-wider uppercase">
                <span className="text-stone-900 font-semibold">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>Published {article.publishedAt}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 font-mono-numbers">
                  <Clock className="w-3 h-3 text-stone-400" />
                  {article.readTime}
                </span>
              </div>

              {/* Dominant Headline */}
              <h1
                onClick={() => onSelectArticle(article)}
                className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-4 hover:text-stone-700 cursor-pointer transition-colors text-balance"
              >
                {article.title}
              </h1>

              {/* Subtitle / Deck */}
              <p className="font-serif-heading italic text-lg sm:text-xl text-stone-700 mb-5 leading-snug">
                {article.subtitle}
              </p>

              {/* Excerpt */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 max-w-2xl">
                {article.excerpt}
              </p>
            </div>

            {/* Author Byline & Actions */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <AuthorAvatar
                  src={article.author.avatar}
                  name={article.author.name}
                  size="md"
                />
                <div>
                  <h4 className="text-sm font-semibold text-stone-900 leading-tight">
                    {article.author.name}
                  </h4>
                  <p className="text-xs text-stone-500 leading-tight">
                    {article.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onToggleSave(article.id)}
                  className={`p-2 rounded-md border text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isSaved
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                  aria-label={isSaved ? 'Remove from reading list' : 'Save to reading list'}
                  title={isSaved ? 'Saved to list' : 'Save for later'}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                  <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
                </button>

                <button
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer group shadow-sm"
                >
                  <span>Read Lead Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Curatorial Image Framing (5 cols) */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer block relative rounded-lg overflow-hidden bg-stone-200 border border-stone-300/80 shadow-md"
            >
              <div className="aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden">
                <EditorialImage
                  src={article.coverImage}
                  alt={article.title}
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-white font-medium">
                  <Eye className="w-3.5 h-3.5" /> Open Full Essay
                </span>
              </div>
            </div>
            {article.imageCaption && (
              <p className="mt-2 text-xs font-serif italic text-stone-500">
                {article.imageCaption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
