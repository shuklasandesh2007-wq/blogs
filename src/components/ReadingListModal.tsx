import React from 'react';
import { X, Bookmark, Trash2, ArrowUpRight, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface ReadingListModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveSave: (articleId: string) => void;
  onClearAll: () => void;
}

export const ReadingListModal: React.FC<ReadingListModalProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveSave,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-[#FAF7F2] border border-stone-300 rounded-lg shadow-xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#F4EFEA]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-stone-900 fill-stone-900" />
            <h2 className="font-serif-heading text-lg font-bold text-stone-900">
              Personal Reading Portfolio ({savedArticles.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-700 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {savedArticles.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto" />
              <h3 className="font-serif-heading text-lg font-semibold text-stone-800">
                Your Reading Portfolio is Empty
              </h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Bookmark essays from the catalog to curate your offline personal study list.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {savedArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-3.5 rounded-md border border-stone-200 bg-white hover:border-stone-400 transition-colors flex items-center justify-between gap-4 group"
                >
                  <div
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="cursor-pointer flex-1 min-w-0"
                  >
                    <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-1">
                      <span className="font-semibold text-stone-900">{article.category}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h4 className="font-serif-heading font-bold text-sm text-stone-900 group-hover:text-stone-700 truncate">
                      {article.title}
                    </h4>
                    <p className="text-xs text-stone-500 truncate mt-0.5">
                      {article.author.name}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onRemoveSave(article.id)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 rounded transition cursor-pointer"
                      title="Remove from reading list"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="p-1.5 text-stone-700 hover:text-stone-900 rounded transition cursor-pointer"
                      title="Open essay"
                      aria-label="Read essay"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={onClearAll}
                  className="text-xs text-stone-500 hover:text-rose-600 transition cursor-pointer"
                >
                  Clear all saved essays
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
