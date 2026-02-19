import "./App.css";
import AssetForm from "./components/AssetForm.tsx";
import AssetList from "./components/AssetList.tsx";
import AssetEditor from "./components/AssetEditor.tsx";
import PortfolioSummary from "./components/PortfolioSummary.tsx";
import type Asset from "./types/asset.ts";
import { useReducer } from "react";

interface PortfolioState {
  assets: Asset[];
}

type PortfolioAction =
  | { type: "add" | "update"; asset: Asset }
  | { type: "remove"; symbol: string };

function portfolioReducer(state: PortfolioState, action: PortfolioAction): PortfolioState {
  // Reducer fuction to handle complex state updates
  switch (action.type) {
    case "add":
      return { ...state, assets: [...state.assets, action.asset] };
    case "remove":
      return {
        ...state,
        assets: state.assets.filter((asset) => asset.symbol !== action.symbol),
      };
    case "update": // Update the state based on the asset symbol
      return {
        ...state,
        assets: state.assets.map((asset) =>
          asset.symbol === action.asset.symbol ? action.asset : asset
        ),
      };
    default:
      return state;
  }
}

export default function App() {
  // Renders the main app
  const [state, dispatch] = useReducer(portfolioReducer, { assets: [] }); // Reducer Hook
  return (
    <>
      <h1>Portfolio</h1>
      <AssetForm onAdd={(asset: Asset) => dispatch({ type: "add", asset: asset })} />
      <AssetList
        assets={state.assets}
        onRemove={(symbol: string) => dispatch({ type: "remove", symbol: symbol })}
      />
      <PortfolioSummary assets={state.assets} />
      <AssetEditor onUpdate={(asset: Asset) => dispatch({ type: "update", asset: asset })} />
    </>
  );
}
