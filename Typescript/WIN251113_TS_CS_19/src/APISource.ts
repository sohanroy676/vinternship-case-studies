import { Service } from "typedi";
import { NewsSource } from "./NewsSource";

// 1. Register a new APISource with the container
@Service()
export class APISource implements NewsSource {
    async fetchArticles(): Promise<string[]> {
        return ["API: Article A", "API: Article B"];
    }
}
