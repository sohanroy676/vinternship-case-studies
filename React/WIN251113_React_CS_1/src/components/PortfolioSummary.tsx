import type Asset from "../types/asset";

interface PortfolioSummaryProps {
  assets: Asset[];
}

// 1. Create a PortfolioSummary functional component that:
// - Receives a typed array of assets (Asset[]) as props.
// - Renders the total value and average percentage change.
export default function PortfolioSummary({ assets }: PortfolioSummaryProps) {
  // Calculationg the total value and average percentage change
  let totalValue: number = 0;
  let avgChange: number = 0;
  for (const asset of assets) {
    totalValue += asset.value;
    avgChange += asset.change;
  }
  avgChange /= assets.length || 1;

  return (
    <>
      <h2>Portfolio Summary</h2>
      <ul>
        <li>Total Value: {totalValue}</li>
        <li>Average Change: {avgChange}</li>
      </ul>
    </>
  );
}
