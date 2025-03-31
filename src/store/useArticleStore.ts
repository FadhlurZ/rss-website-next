import { create } from "zustand";
import { Article } from "@/typings/rss";
import { FeedSource } from "@/typings/feedSource";

interface ArticleStore {
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article) => void;
  feedSource: FeedSource,
  setFeedSource: (feedSource: FeedSource) => void;
}

/**
 * This is the Zustand store used for articles
 */
export const useArticleStore = create<ArticleStore>((set) => ({
  selectedArticle: null,
  setSelectedArticle: (article) => set({ selectedArticle: article }),
  feedSource: FeedSource.Algemeen,
  setFeedSource: (source) => set({feedSource: source})
}));
