import type Asset from "../types/asset";

interface AssetListProps {
  assets: Asset[];
  onRemove: (symbol: string) => void;
}

export default function AssetList({ assets, onRemove }: AssetListProps) {
  // Renders the list of assets if available, or a default message otherwise
  return (
    <>
      <h2>Assets List</h2>
      {assets.length ? (
        <ul>
          {assets.map((a) => (
            <li key={a.symbol}>
              {a.name} ({a.symbol}): ${a.value} ({a.change > 0 ? "+" : ""}
              {a.change}%)
              {/*calls the dispatch of type 'remove'*/}
              <button onClick={() => onRemove(a.symbol)}>Remove</button>{" "}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Assets Added</p> // Default message if there are no Assets
      )}
    </>
  );
}
