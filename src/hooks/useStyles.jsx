import React from "react";

const useStyles = (styles) => {
  const classes = React.useCallback((...arr) => {
    return arr.map((v) => styles?.[v]??v ).join(" ");
  }, [styles]);
  return classes;
};

export default useStyles;