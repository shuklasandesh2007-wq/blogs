import React, { useState } from 'react';
import { X, PenTool, CheckCircle, Sparkles } from 'lucide-react';
import { Article, Category } from '../types';

interface WriteArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish: (newArticle: Article) => void;
}

export const WriteArticleModal: React.FC<WriteArticleModalProps> = ({
  isOpen,
  onClose,
  onPublish,
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<Category>('Architecture');
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [pullQuote, setPullQuote] = useState('');
  const [keyProposition, setKeyProposition] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !bodyText.trim() || !authorName.trim()) return;

    // Split paragraphs
    const paragraphs = bodyText
      .split('\n\n')
      .map((p) => p.trim())
      .filter(Boolean);

    // Estimate read time (approx 200 wpm)
    const wordCount = bodyText.split(/\s+/).length;
    const estMinutes = Math.max(2, Math.ceil(wordCount / 180));

    // Choose default cover image matching category
    const categoryCoverMap: Record<string, string> = {
      Architecture: '/src/assets/images/hero_editorial_journal_1792550307093.jpg',
      Technology: '/src/assets/images/article_local_computing_1792550307532.jpg',
      Ecology: '/src/assets/images/article_climate_architecture_1792550306007.jpg',
      Culture: '/src/assets/images/article_soundscape_urban_1792550308033.jpg',
    };

    const newArticle: Article = {
      id: `art-custom-${Date.now()}`,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      title: title.trim(),
      subtitle: subtitle.trim() || 'A critical examination of emergent patterns in the contemporary era.',
      excerpt: excerpt.trim() || paragraphs[0]?.slice(0, 160) + '...' || 'An ongoing inquiry into our collective physical and digital habitats.',
      category: category === 'All' ? 'Architecture' : category,
      author: {
        name: authorName.trim(),
        role: authorRole.trim() || 'Independent Contributor',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
        bio: `${authorName.trim()} is an independent researcher investigating the intersections of culture, design, and resilient technology.`,
      },
      publishedAt: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      readTime: `${estMinutes} min read`,
      coverImage: categoryCoverMap[category] || categoryCoverMap['Architecture'],
      imageCaption: 'Field study accompanying the manuscript.',
      claps: 1,
      sections: [
        {
          paragraphs: paragraphs.length > 0 ? paragraphs : ['An opening reflection on the theme.'],
          pullQuote: pullQuote.trim() || undefined,
        },
      ],
      tags: [category, 'Contributor Essay', 'Inquiry'],
      keyTakeaways: keyProposition.trim() ? [keyProposition.trim()] : undefined,
    };

    onPublish(newArticle);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      // Reset form
      setTitle('');
      setSubtitle('');
      setExcerpt('');
      setBodyText('');
      setPullQuote('');
      setKeyProposition('');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] border border-stone-300 rounded-lg shadow-xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#F4EFEA]">
          <div className="flex items-center gap-2">
            <PenTool className="w-4 h-4 text-stone-700" />
            <h2 className="font-serif-heading text-lg font-bold text-stone-900">
              Submit an Essay for Publication
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

        {/* Modal Body / Form */}
        {success ? (
          <div className="p-12 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-stone-900 mx-auto animate-bounce" />
            <h3 className="font-serif-heading text-2xl font-bold text-stone-900">
              Essay Published to the Catalog
            </h3>
            <p className="text-xs text-stone-600">
              Your contribution is now live in the journal archives and catalog.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Essay Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. The Silence of Dry Stone Masonry"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Pillar / Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-stone-900"
                >
                  <option value="Architecture">Architecture</option>
                  <option value="Technology">Technology</option>
                  <option value="Ecology">Ecology</option>
                  <option value="Culture">Culture</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Subtitle / Deck
              </label>
              <input
                type="text"
                placeholder="A one-line thesis or framing argument..."
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Author Byline *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name (e.g. S. Al-Mansoor)"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Author Affiliation / Role
                </label>
                <input
                  type="text"
                  placeholder="e.g. Urbanist & Material Researcher"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Abstract / Excerpt
              </label>
              <textarea
                rows={2}
                placeholder="A 2-3 sentence overview of your inquiry..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-stone-900 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Manuscript Body (Separate paragraphs with double enter) *
              </label>
              <textarea
                rows={6}
                required
                placeholder="Write your long-form essay here..."
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value)}
                className="w-full px-3 py-2 text-xs font-serif-prose bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Featured Pull Quote (Optional)
                </label>
                <input
                  type="text"
                  placeholder="A striking sentence for typographic emphasis"
                  value={pullQuote}
                  onChange={(e) => setPullQuote(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Core Proposition / Key Takeaway (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Key thesis sentence"
                  value={keyProposition}
                  onChange={(e) => setKeyProposition(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-[11px] text-stone-500">
                Peer review protocol: Published immediately to local catalog session.
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-stone-700 hover:text-stone-900 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded transition cursor-pointer"
                >
                  Publish Manuscript
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
