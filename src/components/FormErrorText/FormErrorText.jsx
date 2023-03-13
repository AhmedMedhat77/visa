import React from "react";
import useStyles from "../../hooks/useStyles";
import styles from "./FormErrorText.module.scss";
function FormErrorText(props) {
  const classes = useStyles(styles);
  return (
    <p className={classes("error-msg", "typo", "typo--xs")}>
      {props.errorMessage}
    </p>
  );
}

export default FormErrorText;
