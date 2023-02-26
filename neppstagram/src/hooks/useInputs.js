// src/hooks/useInputs.js

import { useState } from "react";

export function useInputs(form) {
  const [inputs, setInputs] = useState(form);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return [inputs, handleInputs];
}
