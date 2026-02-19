import { TagsPanel } from "./components/TagsPanel";

const tags: ReadonlyArray<string> = ["Action", "Adventure", "Comedy", "Isekai"]; // Sample tags

export default function App() {
  return <TagsPanel tags={tags} />;
}
