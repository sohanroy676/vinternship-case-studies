import Container, { Service } from "typedi";
import { NEWS_SOURCE_TOKEN, NewsSource } from "./NewsSource";
import { RSSFeedSource } from "./RSSFeedSource";

@Service()
export class NewsAggregator {
    constructor() {
        // Setting RSSFeedSource as the default NewsSource
        Container.set(NEWS_SOURCE_TOKEN, new RSSFeedSource());
    }

    getSource(): NewsSource {
        return Container.get<NewsSource>(NEWS_SOURCE_TOKEN);
    }

    async getLatestArticles() {
        const source: NewsSource = this.getSource();
        const articles: string[] = await source.fetchArticles();
        articles.forEach((article) => console.log(article));
    }
}
