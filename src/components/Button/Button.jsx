import React from "react";
import useStyles from "../../hooks/useStyles";
import styles from "./Button.module.scss";

function Button(props) {
  const classes = useStyles(styles);
  return (
    <button
      className={classes(
        "button",
        "button--dark",
        "button--l",
        "button--t-center",
        "button--rounded-xs"
      )}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
