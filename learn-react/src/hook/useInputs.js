import { useState } from "react";

// src/hook/useInputs.js
export function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const handleForm = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return [form, handleForm, handleReset];
}
