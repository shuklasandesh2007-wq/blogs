export type Category = 'All' | 'Architecture' | 'Technology' | 'Ecology' | 'Culture';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
  likes: number;
}

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  pullQuote?: string;
  callout?: {
    title: string;
    text: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Architecture' | 'Technology' | 'Ecology' | 'Culture';
  author: Author;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  imageCaption?: string;
  featured?: boolean;
  spotlight?: boolean;
  claps: number;
  sections: ArticleSection[];
  tags: string[];
  keyTakeaways?: string[];
  footnotes?: string[];
}

export type ReaderTheme = 'alabaster' | 'crisp' | 'slate';
export type ReaderFont = 'serif' | 'sans';
export type ReaderFontSize = 'normal' | 'large' | 'xlarge';
