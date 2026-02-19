import React from "react";
import type FormState from "../types/form";

interface FormProps {
  state: FormState;
  submitLabel: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<Element>) => void;
}

export default function Form({ state, submitLabel, handleChange, handleSubmit }: FormProps) {
  // Template form to use in AssetForm and AssetEditor
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={state.name} onChange={handleChange} placeholder="Name" />
      <input name="symbol" value={state.symbol} onChange={handleChange} placeholder="Symbol" />
      <input
        name="value"
        value={state.value}
        onChange={handleChange}
        type="number"
        placeholder="Value"
      />
      <input
        name="change"
        value={state.change}
        onChange={handleChange}
        type="number"
        placeholder="Change (%)"
      />
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
