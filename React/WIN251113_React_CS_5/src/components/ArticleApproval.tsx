import { ArticleCard } from "./ArticleCard";
import { useApproval } from "../hooks/useApproval";

interface ArticleApprovalProps {
  article: { title: string; author: string };
}

export function ArticleApproval({ article }: ArticleApprovalProps) {
  // Renders an ArticleCard and its status (Approved?)
  const { approved, approve } = useApproval();
  return (
    <div>
      <ArticleCard title={article.title} author={article.author} onApprove={approve} />
      {approved && <span>Approved!</span>}
    </div>
  );
}
