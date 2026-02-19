/**
 * TypeScript Case Study 19: IoC Containers & Advanced Dependency Management
 * NPTEL Pinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 */

import "reflect-metadata";
import { Container, Service } from "typedi";
import { NewsAggregator } from "./NewsAggregator";
import { NEWS_SOURCE_TOKEN, NewsSource } from "./NewsSource";
import { APISource } from "./APISource";

const aggregator1 = Container.get(NewsAggregator);
aggregator1.getLatestArticles(); // Uses default RSSFeedSource

// 2. Swap the implementation from RSSFeedSource to APISource without changing the NewsAggregator code.
Container.set(NEWS_SOURCE_TOKEN, new APISource());
const aggregator2 = Container.get(NewsAggregator);
aggregator2.getLatestArticles(); // Now uses APISource

// 3. Write a test that injects a mock source to verify the aggregator’s behavior.
// Mock NewsSource for testing
@Service()
class MockNewsSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["Mock: Test Article X", "Mock: Test Article Y"];
  }
}

// Set the mock source in the container for testing
Container.set(NEWS_SOURCE_TOKEN, new MockNewsSource());
const testAggregator = Container.get(NewsAggregator);
// Testing the MockNewsSource
testAggregator.getLatestArticles(); // Should use MockNewsSource
