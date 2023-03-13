import React from "react";
import useStyles from "../../hooks/useStyles";
import styles from "./input.module.scss";

function Input(props) {
  const classes = useStyles(styles);

  return (
    <div className={classes("input")} style={props.containerStyle}>
      <label className={classes("input__label", "typo--bold")}>
        {props.label}
      </label>
      <input
        onChange={props.onChange}
        type="text"
        maxLength={props?.maxLength}
        placeholder={props?.placeholder}
        className={classes(
          "input__inpt",
          props.error ? "input__inpt--error" : ""
        )}
        name={props.name}
        value={props.value}
      />
    </div>
  );
}

export default React.memo(Input);
