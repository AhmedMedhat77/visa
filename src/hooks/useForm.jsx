import React from "react";

const useForm = () => {
  const [formState, setFormState] = React.useState({});

  const [valiations, setValidation] = React.useState({});

  const handleChange = (fn) => (e) => {
    const { value, name } = e.target;
    if (typeof fn === "function") {
      const result = fn(value);

      setValidation((old) => {
        return { ...old, [name]: result };
      });
    }
    setFormState((old) => ({
      ...old,
      [name]: value,
    }));
  };

  return { formState, handleChange, valiations };
};

export default useForm;
