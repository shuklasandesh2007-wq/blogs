import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroFeatured } from './components/HeroFeatured';
import { SecondaryFeatured } from './components/SecondaryFeatured';
import { ArticleCard } from './components/ArticleCard';
import { ArticleDetail } from './components/ArticleDetail';
import { WriteArticleModal } from './components/WriteArticleModal';
import { ReadingListModal } from './components/ReadingListModal';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { INITIAL_ARTICLES, INITIAL_COMMENTS } from './data/articles';
import { Article, Category, Comment } from './types';
import { SlidersHorizontal, BookOpen, Sparkles, Filter } from 'lucide-react';

export default function App() {
  // Articles state with localStorage sync and image path healing
  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem('meridian_articles');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_ARTICLES.length) {
          return parsed.map((item: Article) => {
            // If an older session stored obsolete /src/ paths, heal with imported bundled asset
            if (item.coverImage && typeof item.coverImage === 'string' && item.coverImage.startsWith('/src/')) {
              const matched = INITIAL_ARTICLES.find((init) => init.id === item.id);
              return matched ? { ...item, coverImage: matched.coverImage } : item;
            }
            return item;
          });
        }
      }
    } catch {
      // fallback
    }
    return INITIAL_ARTICLES;
  });

  // Selected article for reader view
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Filter & Search states
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'readTime'>('latest');

  // Bookmarks state with localStorage sync
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('meridian_saved_ids');
      return saved ? JSON.parse(saved) : ['art-01', 'art-04'];
    } catch {
      return ['art-01', 'art-04'];
    }
  });

  // Comments state with localStorage sync
  const [commentsMap, setCommentsMap] = useState<Record<string, Comment[]>>(() => {
    try {
      const saved = localStorage.getItem('meridian_comments');
      return saved ? JSON.parse(saved) : INITIAL_COMMENTS;
    } catch {
      return INITIAL_COMMENTS;
    }
  });

  // Modals state
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isReadingListOpen, setIsReadingListOpen] = useState(false);

  // Sync articles to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('meridian_articles', JSON.stringify(articles));
    } catch {
      // ignore
    }
  }, [articles]);

  // Sync saved articles to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('meridian_saved_ids', JSON.stringify(savedArticleIds));
    } catch {
      // ignore
    }
  }, [savedArticleIds]);

  // Sync comments to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('meridian_comments', JSON.stringify(commentsMap));
    } catch {
      // ignore
    }
  }, [commentsMap]);

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#essay/')) {
        const slug = hash.replace('#essay/', '');
        const found = articles.find((a) => a.slug === slug || a.id === slug);
        if (found) {
          setSelectedArticleId(found.id);
        }
      } else if (!hash || hash === '#home') {
        setSelectedArticleId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [articles]);

  // Selected article object
  const activeArticle = useMemo(() => {
    if (!selectedArticleId) return null;
    return articles.find((a) => a.id === selectedArticleId) || null;
  }, [selectedArticleId, articles]);

  // Save toggle
  const handleToggleSave = (articleId: string) => {
    setSavedArticleIds((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId]
    );
  };

  // Clap / Like increment
  const handleClap = (articleId: string) => {
    setArticles((prev) =>
      prev.map((art) => (art.id === articleId ? { ...art, claps: art.claps + 1 } : art))
    );
  };

  // Add Comment
  const handleAddComment = (articleId: string, author: string, content: string) => {
    const newComment: Comment = {
      id: `comm-${Date.now()}`,
      author,
      content,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      likes: 1,
    };

    setCommentsMap((prev) => ({
      ...prev,
      [articleId]: [newComment, ...(prev[articleId] || [])],
    }));
  };

  // Publish new custom article
  const handlePublishArticle = (newArticle: Article) => {
    setArticles((prev) => [newArticle, ...prev]);
    setSelectedArticleId(newArticle.id);
    window.location.hash = `#essay/${newArticle.slug}`;
  };

  // Select article for reading
  const handleSelectArticle = (article: Article) => {
    setSelectedArticleId(article.id);
    window.location.hash = `#essay/${article.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setSelectedArticleId(null);
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered and sorted articles
  const filteredArticles = useMemo(() => {
    let result = [...articles];

    // Category filter
    if (activeCategory !== 'All') {
      result = result.filter((a) => a.category === activeCategory);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.subtitle.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.author.name.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort order
    if (sortBy === 'popular') {
      result.sort((a, b) => b.claps - a.claps);
    } else if (sortBy === 'readTime') {
      result.sort((a, b) => parseInt(b.readTime) - parseInt(a.readTime));
    }

    return result;
  }, [articles, activeCategory, searchQuery, sortBy]);

  // Featured and Spotlight articles (when browsing "All" with no active search)
  const isDefaultBrowseMode = activeCategory === 'All' && !searchQuery.trim();

  const heroArticle = useMemo(() => {
    return articles.find((a) => a.featured) || articles[0];
  }, [articles]);

  const spotlightArticles = useMemo(() => {
    return articles.filter((a) => a.spotlight && a.id !== heroArticle?.id).slice(0, 2);
  }, [articles, heroArticle]);

  const standardArticles = useMemo(() => {
    if (isDefaultBrowseMode) {
      const spotlightIds = new Set(spotlightArticles.map((a) => a.id));
      return filteredArticles.filter((a) => a.id !== heroArticle?.id && !spotlightIds.has(a.id));
    }
    return filteredArticles;
  }, [filteredArticles, isDefaultBrowseMode, heroArticle, spotlightArticles]);

  // Related articles for reader view
  const relatedArticles = useMemo(() => {
    if (!activeArticle) return [];
    return articles
      .filter((a) => a.id !== activeArticle.id)
      .filter((a) => a.category === activeArticle.category || a.featured)
      .slice(0, 2);
  }, [activeArticle, articles]);

  // Bookmarked articles list
  const savedArticlesList = useMemo(() => {
    return articles.filter((a) => savedArticleIds.includes(a.id));
  }, [articles, savedArticleIds]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col font-sans selection:bg-stone-800 selection:text-white">
      {/* Navigation Top Bar Contract */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          if (selectedArticleId) setSelectedArticleId(null);
        }}
        onOpenWriteModal={() => setIsWriteModalOpen(true)}
        onOpenReadingList={() => setIsReadingListOpen(true)}
        savedCount={savedArticleIds.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onHomeClick={handleHomeClick}
      />

      {/* Main View: Reader vs Catalog View */}
      {activeArticle ? (
        <ArticleDetail
          article={activeArticle}
          onBack={handleHomeClick}
          onSelectRelated={handleSelectArticle}
          relatedArticles={relatedArticles}
          isSaved={savedArticleIds.includes(activeArticle.id)}
          onToggleSave={handleToggleSave}
          comments={commentsMap[activeArticle.id] || []}
          onAddComment={handleAddComment}
          onClap={handleClap}
          clapsCount={activeArticle.claps}
        />
      ) : (
        <main className="flex-1">
          {/* If browsing default front page: Show Tier 1 and Tier 2 Salience */}
          {isDefaultBrowseMode && heroArticle && (
            <>
              <HeroFeatured
                article={heroArticle}
                onSelectArticle={handleSelectArticle}
                isSaved={savedArticleIds.includes(heroArticle.id)}
                onToggleSave={handleToggleSave}
              />
              <SecondaryFeatured
                articles={spotlightArticles}
                onSelectArticle={handleSelectArticle}
                savedArticleIds={savedArticleIds}
                onToggleSave={handleToggleSave}
              />
            </>
          )}

          {/* Catalog Archive Section */}
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Catalog Toolbar & Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-stone-300 gap-4">
              <div>
                <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                  {isDefaultBrowseMode
                    ? 'Thematic Catalog & Essays'
                    : searchQuery.trim()
                    ? `Search Results for "${searchQuery}"`
                    : `${activeCategory} Inquiries`}
                </h2>
                <div className="flex items-center gap-2 text-xs text-stone-500 mt-1 font-mono-numbers">
                  <span>Showing {standardArticles.length} published {standardArticles.length === 1 ? 'manuscript' : 'manuscripts'}</span>
                  <span>·</span>
                  <span>All peer-reviewed</span>
                </div>
              </div>

              {/* Segmented Sort Controls (Interactive buttons) */}
              <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg text-xs self-start sm:self-auto">
                <button
                  onClick={() => setSortBy('latest')}
                  className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    sortBy === 'latest'
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Latest
                </button>
                <button
                  onClick={() => setSortBy('popular')}
                  className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    sortBy === 'popular'
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Most Applauded
                </button>
                <button
                  onClick={() => setSortBy('readTime')}
                  className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    sortBy === 'readTime'
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Long Reads
                </button>
              </div>
            </div>

            {/* Articles Grid (Tier 3) */}
            {standardArticles.length === 0 ? (
              <div className="text-center py-20 bg-white border border-stone-200 rounded-lg p-8">
                <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h3 className="font-serif-heading text-xl font-bold text-stone-800 mb-1">
                  No Inquiries Match Your Criteria
                </h3>
                <p className="text-xs text-stone-500 max-w-sm mx-auto mb-6">
                  Try broadening your search term or exploring another thematic category.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded transition cursor-pointer"
                >
                  Reset Catalog Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {standardArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onSelectArticle={handleSelectArticle}
                    isSaved={savedArticleIds.includes(article.id)}
                    onToggleSave={handleToggleSave}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Curated Dispatch Newsletter */}
          <NewsletterSection />
        </main>
      )}

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          if (selectedArticleId) setSelectedArticleId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenWriteModal={() => setIsWriteModalOpen(true)}
        onHomeClick={handleHomeClick}
      />

      {/* Write Article Modal */}
      <WriteArticleModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        onPublish={handlePublishArticle}
      />

      {/* Reading List Modal */}
      <ReadingListModal
        isOpen={isReadingListOpen}
        onClose={() => setIsReadingListOpen(false)}
        savedArticles={savedArticlesList}
        onSelectArticle={handleSelectArticle}
        onRemoveSave={handleToggleSave}
        onClearAll={() => setSavedArticleIds([])}
      />
    </div>
  );
}
