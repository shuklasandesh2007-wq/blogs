import React from 'react';
import { ArrowUpRight, Bookmark, Clock } from 'lucide-react';
import { Article } from '../types';
import { EditorialImage } from './EditorialImage';
import { AuthorAvatar } from './AuthorAvatar';

interface SecondaryFeaturedProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  savedArticleIds: string[];
  onToggleSave: (articleId: string) => void;
}

export const SecondaryFeatured: React.FC<SecondaryFeaturedProps> = ({
  articles,
  onSelectArticle,
  savedArticleIds,
  onToggleSave,
}) => {
  if (articles.length === 0) return null;

  return (
    <section className="py-12 border-b border-stone-200/80 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-300">
          <h2 className="font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
            Spotlight Dispatches
          </h2>
          <div className="text-xs uppercase tracking-widest text-stone-500 font-sans">
            Tier II · Critical Analyses
          </div>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {articles.map((article) => {
            const isSaved = savedArticleIds.includes(article.id);
            return (
              <article
                key={article.id}
                className="group flex flex-col justify-between bg-white border border-stone-200/90 rounded-lg p-6 hover:border-stone-400 transition-colors shadow-sm"
              >
                <div>
                  {/* Visual container with 16:9 or 4:3 */}
                  <div
                    onClick={() => onSelectArticle(article)}
                    className="relative overflow-hidden rounded-md mb-5 bg-stone-100 aspect-[16/10] cursor-pointer"
                  >
                    <EditorialImage
                      src={article.coverImage}
                      alt={article.title}
                      className="group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-2.5">
                    <span className="text-stone-900 font-semibold">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishedAt}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 font-mono-numbers">
                      <Clock className="w-3 h-3 text-stone-400" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectArticle(article)}
                    className="font-serif-heading text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-stone-700 cursor-pointer transition-colors leading-tight mb-2.5 text-balance"
                  >
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer with Author and Action */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <AuthorAvatar
                      src={article.author.avatar}
                      name={article.author.name}
                      size="sm"
                    />
                    <span className="text-xs font-medium text-stone-800">
                      {article.author.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(article.id);
                      }}
                      className={`p-1.5 rounded transition-colors cursor-pointer ${
                        isSaved
                          ? 'text-stone-900 bg-stone-100'
                          : 'text-stone-400 hover:text-stone-800'
                      }`}
                      title={isSaved ? 'Saved' : 'Save'}
                      aria-label="Save article"
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => onSelectArticle(article)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-stone-900 hover:text-stone-600 cursor-pointer"
                    >
                      <span>Read Essay</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
