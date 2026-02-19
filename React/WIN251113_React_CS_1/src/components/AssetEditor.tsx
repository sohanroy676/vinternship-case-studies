import React from "react";
import Form from "./Form";
import type Asset from "../types/asset";
import type FormState from "../types/form";

interface AssetEditorProps {
  onUpdate: (asset: Asset) => void;
}

// 2. Create an AssetEditor class component that:
// - Has typed state for name, symbol, value, and change.
// - Accepts a callback prop onUpdate (typed) to update an asset.
// - Resets the form after submission.
export default class AssetEditor extends React.Component<AssetEditorProps, FormState> {
  // Component to updata an existing asset based on the input from the form
  state: FormState = { name: "", symbol: "", value: "", change: "" };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<FormState, keyof FormState>);
  };

  handleSubmit = (e: React.FormEvent) => {
    // calls the dispatch of type 'update'
    e.preventDefault();
    this.props.onUpdate({
      name: this.state.name,
      symbol: this.state.symbol,
      value: parseFloat(this.state.value),
      change: parseFloat(this.state.change),
    });
    this.setState({ name: "", symbol: "", value: "", change: "" }); // Reset the form
  };

  render() {
    return (
      <Form
        state={this.state}
        submitLabel="Update Asset"
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
