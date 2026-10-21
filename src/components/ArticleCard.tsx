import React from 'react';
import { ArrowUpRight, Bookmark, Clock, Heart } from 'lucide-react';
import { Article } from '../types';
import { EditorialImage } from './EditorialImage';
import { AuthorAvatar } from './AuthorAvatar';

interface ArticleCardProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelectArticle,
  isSaved,
  onToggleSave,
}) => {
  return (
    <article className="group flex flex-col justify-between bg-white border border-stone-200/90 rounded-lg p-5 hover:border-stone-400 transition-all hover:shadow-sm">
      <div>
        {/* Cover image thumbnail */}
        <div
          onClick={() => onSelectArticle(article)}
          className="relative overflow-hidden rounded-md mb-4 bg-stone-100 aspect-[16/10] cursor-pointer"
        >
          <EditorialImage
            src={article.coverImage}
            alt={article.title}
            className="group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Unboxed inline metadata */}
        <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-2">
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
          className="font-serif-heading text-lg sm:text-xl font-bold text-stone-900 group-hover:text-stone-700 cursor-pointer transition-colors leading-snug mb-2 text-balance"
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
          {article.excerpt}
        </p>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AuthorAvatar
            src={article.author.avatar}
            name={article.author.name}
            size="sm"
          />
          <span className="text-xs text-stone-700 font-medium truncate max-w-[120px]">
            {article.author.name}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 text-stone-400 font-mono-numbers text-[11px]">
            <Heart className="w-3 h-3 text-stone-400" />
            {article.claps}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(article.id);
            }}
            className={`p-1 rounded cursor-pointer transition-colors ${
              isSaved ? 'text-stone-900 bg-stone-100' : 'text-stone-400 hover:text-stone-700'
            }`}
            aria-label="Save for later"
            title={isSaved ? 'Saved' : 'Save for later'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => onSelectArticle(article)}
            className="inline-flex items-center gap-0.5 text-stone-900 font-medium hover:text-stone-600 cursor-pointer"
          >
            <span>Read</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </article>
  );
};
