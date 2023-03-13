import React from "react";

const useValidation = () => {
  const [valid, setValid] = React.useState(false);

  const handleValidation = (input, min, max) => {
    if (input === undefined) {
      return;
    }
    const [firstName, lastName] = input.split(" ");
    if (firstName.length > min && lastName.length < max) {
      setValid(false);
    }

    setValid(true);
  };
  return [valid, handleValidation];
};

export default useValidation;
