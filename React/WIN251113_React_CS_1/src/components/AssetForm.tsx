import React from "react";
import Form from "./Form";
import type Asset from "../types/asset";
import type FormState from "../types/form";

interface AssetFormProps {
  onAdd: (asset: Asset) => void;
}

export default class AssetForm extends React.Component<AssetFormProps, FormState> {
  state: FormState = { name: "", symbol: "", value: "", change: "" };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<FormState, keyof FormState>);
  };

  handleSubmit = (e: React.FormEvent) => {
    // calls the dispatch of type 'add'
    e.preventDefault();
    this.props.onAdd({
      name: this.state.name,
      symbol: this.state.symbol,
      value: parseFloat(this.state.value),
      change: parseFloat(this.state.change),
    });
    this.setState({ name: "", symbol: "", value: "", change: "" });
  };

  render() {
    return (
      <Form
        state={this.state}
        submitLabel="Add Asset"
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
