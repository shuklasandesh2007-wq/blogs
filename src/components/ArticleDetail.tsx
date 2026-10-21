import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Heart,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Check,
  MessageSquare,
  Sparkles,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { Article, Comment, ReaderFont, ReaderFontSize, ReaderTheme } from '../types';
import { EditorialImage } from './EditorialImage';
import { AuthorAvatar } from './AuthorAvatar';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
  onSelectRelated: (article: Article) => void;
  relatedArticles: Article[];
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
  comments: Comment[];
  onAddComment: (articleId: string, author: string, content: string) => void;
  onClap: (articleId: string) => void;
  clapsCount: number;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  onBack,
  onSelectRelated,
  relatedArticles,
  isSaved,
  onToggleSave,
  comments,
  onAddComment,
  onClap,
  clapsCount,
}) => {
  // Reading state
  const [readingProgress, setReadingProgress] = useState(0);
  const [fontSize, setFontSize] = useState<ReaderFontSize>('normal');
  const [fontFamily, setFontFamily] = useState<ReaderFont>('serif');
  const [theme, setTheme] = useState<ReaderTheme>('alabaster');

  // Audio Speech state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [speechSupported, setSpeechSupported] = useState(false);

  // Comments form state
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  // Share feedback
  const [copiedLink, setCopiedLink] = useState(false);

  // Track reading progress
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  // SpeechSynthesis check & cleanup
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true);
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleAudio = () => {
    if (!speechSupported) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    // Assemble text to speak
    const fullText = `${article.title}. ${article.subtitle}. By ${article.author.name}. ${article.excerpt}. ` +
      article.sections.map(s => `${s.heading ? s.heading + '. ' : ''}${s.paragraphs.join(' ')}`).join(' ');

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.rate = playbackRate;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsPlayingAudio(false);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handleRateChange = (newRate: number) => {
    setPlaybackRate(newRate);
    if (isPlayingAudio && speechSupported) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      // Restart with new rate
      setTimeout(() => {
        handleToggleAudio();
      }, 50);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.subtitle,
          url,
        });
      } catch {
        // user cancelled or failed, fallback to copy
        await navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentAuthor.trim() || !commentText.trim()) return;
    onAddComment(article.id, commentAuthor.trim(), commentText.trim());
    setCommentAuthor('');
    setCommentText('');
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 3000);
  };

  // Theme container classes
  const themeClasses = {
    alabaster: 'bg-[#FAF7F2] text-stone-900',
    crisp: 'bg-white text-stone-900',
    slate: 'bg-[#18181B] text-stone-100',
  }[theme];

  const subtextClass = {
    alabaster: 'text-stone-600',
    crisp: 'text-stone-600',
    slate: 'text-stone-300',
  }[theme];

  const borderClass = {
    alabaster: 'border-stone-200',
    crisp: 'border-stone-200',
    slate: 'border-stone-800',
  }[theme];

  const cardBgClass = {
    alabaster: 'bg-stone-100/70',
    crisp: 'bg-stone-50',
    slate: 'bg-stone-900/80',
  }[theme];

  const fontSizeClass = {
    normal: 'text-base sm:text-lg leading-[1.8]',
    large: 'text-lg sm:text-xl leading-[1.85]',
    xlarge: 'text-xl sm:text-2xl leading-[1.9]',
  }[fontSize];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-stone-200/50 z-50">
        <div
          className="h-full bg-stone-900 dark:bg-stone-100 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Reader Floating / Sticky Toolbar */}
      <nav aria-label="Reading Controls" className={`sticky top-0 z-40 border-b ${borderClass} backdrop-blur-md px-4 sm:px-8 py-3 transition-colors ${theme === 'slate' ? 'bg-[#18181B]/95' : 'bg-[#FAF7F2]/95'}`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-medium cursor-pointer hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Journal</span>
            <span className="sm:hidden">Back</span>
          </button>

          {/* Center: Audio Player */}
          {speechSupported && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleAudio}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer border ${
                  isPlayingAudio
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'border-stone-300 hover:bg-stone-200/60'
                }`}
                title={isPlayingAudio ? 'Pause reading' : 'Listen to this essay'}
              >
                {isPlayingAudio ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause Audio</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span className="hidden sm:inline">Listen to Essay</span>
                    <span className="sm:hidden">Audio</span>
                  </>
                )}
              </button>

              {isPlayingAudio && (
                <div className="hidden md:flex items-center gap-1 text-xs font-mono">
                  {[1, 1.25, 1.5].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => handleRateChange(rate)}
                      className={`px-1.5 py-0.5 rounded text-[11px] cursor-pointer ${
                        playbackRate === rate ? 'bg-stone-300 font-bold' : 'hover:bg-stone-200/50'
                      }`}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Right: Reader Customization Tools */}
          <div className="flex items-center gap-2">
            {/* Font Family Toggle */}
            <div className="hidden sm:flex items-center border border-stone-300 rounded-md p-0.5 text-xs">
              <button
                onClick={() => setFontFamily('serif')}
                className={`px-2 py-0.5 rounded font-serif ${fontFamily === 'serif' ? 'bg-stone-900 text-white' : 'hover:bg-stone-200/50'}`}
                title="Serif typography"
              >
                Serif
              </button>
              <button
                onClick={() => setFontFamily('sans')}
                className={`px-2 py-0.5 rounded font-sans ${fontFamily === 'sans' ? 'bg-stone-900 text-white' : 'hover:bg-stone-200/50'}`}
                title="Clean sans-serif"
              >
                Sans
              </button>
            </div>

            {/* Font Size Selector */}
            <div className="flex items-center border border-stone-300 rounded-md p-0.5 text-xs font-mono">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'normal' ? 'bg-stone-900 text-white' : 'hover:bg-stone-200/50'}`}
                title="Default text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 py-0.5 rounded text-sm ${fontSize === 'large' ? 'bg-stone-900 text-white' : 'hover:bg-stone-200/50'}`}
                title="Large text size"
              >
                A+
              </button>
            </div>

            {/* Theme Toggle (Alabaster / Crisp / Slate) */}
            <div className="flex items-center gap-1 pl-1">
              <button
                onClick={() => setTheme('alabaster')}
                className={`w-5 h-5 rounded-full bg-[#FAF7F2] border border-stone-400 cursor-pointer ${theme === 'alabaster' ? 'ring-2 ring-stone-900 ring-offset-1' : ''}`}
                title="Warm Paper (Alabaster)"
                aria-label="Warm Paper Theme"
              />
              <button
                onClick={() => setTheme('crisp')}
                className={`w-5 h-5 rounded-full bg-white border border-stone-300 cursor-pointer ${theme === 'crisp' ? 'ring-2 ring-stone-900 ring-offset-1' : ''}`}
                title="Crisp White"
                aria-label="Crisp White Theme"
              />
              <button
                onClick={() => setTheme('slate')}
                className={`w-5 h-5 rounded-full bg-[#18181B] border border-stone-700 cursor-pointer ${theme === 'slate' ? 'ring-2 ring-stone-400 ring-offset-1' : ''}`}
                title="Gallery Slate"
                aria-label="Dark Slate Theme"
              />
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleSave(article.id)}
              className={`p-1.5 rounded border border-stone-300 transition-colors cursor-pointer ${
                isSaved ? 'bg-stone-900 text-white border-stone-900' : 'hover:bg-stone-200/50'
              }`}
              title={isSaved ? 'In your reading list' : 'Save to reading list'}
              aria-label="Save Article"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded border border-stone-300 hover:bg-stone-200/50 transition-colors cursor-pointer relative"
              title="Share essay"
              aria-label="Share Essay"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              {copiedLink && (
                <span className="absolute -bottom-8 right-0 text-[10px] bg-stone-900 text-white px-2 py-0.5 rounded shadow whitespace-nowrap">
                  Link copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Reading Container */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Curatorial Header */}
        <header className="mb-10 text-center sm:text-left">
          {/* Unboxed Metadata Kicker */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-medium tracking-wider uppercase mb-4 text-stone-500">
            <span className="font-semibold text-stone-900 dark:text-stone-200">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>Published {article.publishedAt}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-numbers">{article.readTime}</span>
          </div>

          {/* Article Title */}
          <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] mb-5 text-balance">
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="font-serif-heading italic text-lg sm:text-2xl text-stone-600 dark:text-stone-300 leading-snug mb-8 max-w-2xl">
            {article.subtitle}
          </p>

          {/* Author Card Row */}
          <div className={`pt-6 pb-6 border-t border-b ${borderClass} flex flex-wrap items-center justify-between gap-4`}>
            <div className="flex items-center gap-3.5">
              <AuthorAvatar
                src={article.author.avatar}
                name={article.author.name}
                size="lg"
              />
              <div>
                <h3 className="text-sm font-semibold leading-tight">
                  {article.author.name}
                </h3>
                <p className={`text-xs ${subtextClass} leading-tight mt-0.5`}>
                  {article.author.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onClap(article.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300 hover:border-stone-900 transition-colors cursor-pointer text-xs font-mono-numbers group"
                title="Applaud essay"
              >
                <Heart className="w-3.5 h-3.5 text-rose-500 group-hover:scale-110 transition-transform fill-rose-500/20" />
                <span>{clapsCount}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Visual */}
        <figure className="mb-12">
          <div className="rounded-lg overflow-hidden border border-stone-300/80 bg-stone-200 aspect-[16/10] sm:aspect-[16/9]">
            <EditorialImage
              src={article.coverImage}
              alt={article.title}
            />
          </div>
          {article.imageCaption && (
            <figcaption className={`mt-2.5 text-xs font-serif italic ${subtextClass}`}>
              {article.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Key Takeaways Box (if present) */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <aside className={`mb-12 p-6 rounded-lg border ${borderClass} ${cardBgClass}`}>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-3 text-stone-700 dark:text-stone-300">
              <BookOpen className="w-4 h-4" />
              <span>Core Propositions</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm leading-relaxed">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono-numbers text-xs text-stone-400 mt-0.5">0{idx + 1}.</span>
                  <span className={subtextClass}>{point}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Article Body Content */}
        <article className={`${fontFamily === 'serif' ? 'font-serif-prose' : 'font-sans-prose'} ${fontSizeClass} space-y-8`}>
          {article.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-6">
              {section.heading && (
                <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight pt-4 pb-2 text-stone-900 dark:text-stone-100 border-b border-stone-200/60 dark:border-stone-800">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => {
                // Apply drop cap to the very first paragraph of the first section
                const isOpening = sIdx === 0 && pIdx === 0;
                return (
                  <p
                    key={pIdx}
                    className={`${isOpening ? 'editorial-drop-cap' : ''} text-stone-800 dark:text-stone-200`}
                  >
                    {p}
                  </p>
                );
              })}

              {/* Pull quote with top and bottom hairline borders (anti-slop rule: NO thick left accent border!) */}
              {section.pullQuote && (
                <blockquote className={`my-10 py-6 border-t border-b ${borderClass} text-center px-4 sm:px-8`}>
                  <p className="font-serif-heading italic text-xl sm:text-2xl text-stone-800 dark:text-stone-200 leading-snug">
                    "{section.pullQuote}"
                  </p>
                </blockquote>
              )}

              {/* Callout box */}
              {section.callout && (
                <aside className={`my-8 p-5 rounded-md border ${borderClass} ${cardBgClass}`}>
                  <h4 className="font-serif-heading font-bold text-base sm:text-lg mb-2 text-stone-900 dark:text-stone-100">
                    {section.callout.title}
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${subtextClass}`}>
                    {section.callout.text}
                  </p>
                </aside>
              )}
            </div>
          ))}
        </article>

        {/* Footnotes & Citations */}
        {article.footnotes && article.footnotes.length > 0 && (
          <section className={`mt-14 pt-8 border-t ${borderClass}`}>
            <h3 className="text-xs tracking-widest uppercase font-semibold text-stone-500 mb-4 font-sans">
              Archival Notes & Citations
            </h3>
            <ol className="space-y-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono-numbers">
              {article.footnotes.map((fn, fIdx) => (
                <li key={fIdx}>{fn}</li>
              ))}
            </ol>
          </section>
        )}

        {/* Author Detailed Bio */}
        <section className={`mt-14 p-6 sm:p-8 rounded-lg border ${borderClass} ${cardBgClass} flex flex-col sm:flex-row items-center sm:items-start gap-5`}>
          <AuthorAvatar
            src={article.author.avatar}
            name={article.author.name}
            size="lg"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-serif-heading text-lg font-bold">
                {article.author.name}
              </h3>
              <span className="text-xs text-stone-400">/ Essayist</span>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${subtextClass} mb-3`}>
              {article.author.bio}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
              <span>{article.author.role}</span>
            </div>
          </div>
        </section>

        {/* Claps & Share Bar */}
        <div className={`mt-10 py-6 border-t border-b ${borderClass} flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onClap(article.id)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-300 hover:border-stone-900 transition cursor-pointer text-xs font-medium font-mono-numbers group"
            >
              <Heart className="w-4 h-4 text-rose-500 group-hover:scale-125 transition-transform fill-rose-500/20" />
              <span>Applaud ({clapsCount})</span>
            </button>
            <button
              onClick={() => onToggleSave(article.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition cursor-pointer ${
                isSaved
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'border-stone-300 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
              <span>{isSaved ? 'Saved in List' : 'Save for Later'}</span>
            </button>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Essay</span>
          </button>
        </div>

        {/* Comments Section */}
        <section className="mt-14" id="comments">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-300">
            <h3 className="font-serif-heading text-2xl font-bold flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-stone-500" />
              <span>Discussions & Inquiries ({comments.length})</span>
            </h3>
            <span className="text-xs font-mono text-stone-500">Public Record</span>
          </div>

          {/* New Comment Form */}
          <form onSubmit={handleCommentSubmit} className={`p-6 rounded-lg border ${borderClass} ${cardBgClass} mb-8`}>
            <h4 className="text-sm font-semibold mb-3">Add to the Inquiry</h4>
            <div className="space-y-3">
              <div>
                <label htmlFor="authorName" className="block text-xs font-medium text-stone-600 dark:text-stone-300 mb-1">
                  Your Name / Affiliation
                </label>
                <input
                  id="authorName"
                  type="text"
                  required
                  placeholder="e.g. Maria Thorne, Architect"
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
              <div>
                <label htmlFor="commentBody" className="block text-xs font-medium text-stone-600 dark:text-stone-300 mb-1">
                  Contribution / Reflection
                </label>
                <textarea
                  id="commentBody"
                  required
                  rows={3}
                  placeholder="Share a counterpoint, supporting field observation, or citation..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900 resize-none"
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-stone-400">
                  Contributions are moderated for intellectual rigor.
                </span>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
                >
                  Post Comment
                </button>
              </div>
              {commentSubmitted && (
                <div className="text-xs text-emerald-600 font-medium pt-1">
                  Your comment has been added to the public record.
                </div>
              )}
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className={`text-xs italic text-center py-6 ${subtextClass}`}>
                No responses yet. Be the first to initiate this inquiry.
              </p>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className={`p-5 rounded-lg border ${borderClass} bg-white dark:bg-stone-900/60`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      {comment.author}
                    </span>
                    <span className="font-mono text-stone-400">{comment.date}</span>
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${subtextClass}`}>
                    {comment.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Up Next: Related Articles */}
        {relatedArticles.length > 0 && (
          <section className={`mt-16 pt-10 border-t ${borderClass}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif-heading text-xl font-bold">
                Complementary Inquiries
              </h3>
              <span className="text-xs tracking-wider uppercase text-stone-500 font-sans">
                Next in Catalog
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectRelated(rel)}
                  className={`p-4 rounded-lg border ${borderClass} hover:border-stone-400 cursor-pointer transition-colors bg-white dark:bg-stone-900/60 group`}
                >
                  <div className="aspect-[16/10] overflow-hidden rounded mb-3 bg-stone-100">
                    <EditorialImage
                      src={rel.coverImage}
                      alt={rel.title}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-[11px] text-stone-500 uppercase tracking-wider mb-1">
                    {rel.category} · {rel.readTime}
                  </div>
                  <h4 className="font-serif-heading font-bold text-base group-hover:text-stone-600 transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
