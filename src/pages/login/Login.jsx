import React from "react";
import Visa from "../../components/Visa";
import useStyles from "../../hooks/useStyles";
import FormVisa from "../../layouts/form/FormVisa";
import styles from "./Login.module.scss";
function Login() {
  const classes = useStyles(styles);
  return (
    <div className={classes("login")}>
      <div className={classes("login__header")}>
        <div className={classes("login__header__back")}>
          <Visa.BackVisa />
        </div>
        <div className={classes("login__header__front")}>
          <Visa.FrontVisa />
        </div>
      </div>
      <div className={classes("login__content")}>
        <FormVisa />
      </div>
    </div>
  );
}

export default Login;
