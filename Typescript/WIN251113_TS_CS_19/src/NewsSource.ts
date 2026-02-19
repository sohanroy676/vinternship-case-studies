import { Token } from "typedi";

export interface NewsSource {
    fetchArticles(): Promise<string[]>;
}

// Create a token for NewsSource to allow multiple implementations
export const NEWS_SOURCE_TOKEN = new Token<() => NewsSource>("NewsSourceToken");
