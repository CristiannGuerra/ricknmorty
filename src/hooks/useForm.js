import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (e) => {
    const {name, value, type, checked } = e.target;

    setInputs((previousState) => ({
      ...previousState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetValue = () => {
    setInputs(initialState);
  };

  return [inputs, handleChange, resetValue];
};
