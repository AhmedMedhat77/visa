import React from "react";
import Visa from "../../components/Visa";

import useStyles from "../../hooks/useStyles";
import FormVisa from "../../layouts/form/FormVisa";
import styles from "./Login.module.scss";
function Login() {
  const classes = useStyles(styles);
  const [login_state, set_login_state] = React.useState();

  console.log("loginState", login_state);
  return (
    <div className={classes("login")}>
      <div className={classes("login__header")}>
        <div className={classes("login__header__back")}>
          <Visa.BackVisa cvc={login_state?.cvc ?? "000"} />
        </div>
        <div className={classes("login__header__front")}>
          <Visa.FrontVisa
            cardNumber={login_state?.cardNumber ?? "0000 0000 0000 0000"}
            cardName={login_state?.cardName ?? "Jane Aplleaseed"}
            expDate={login_state?.expDate ?? "00"}
            year={login_state?.year ?? "00"}
          />
        </div>
      </div>
      <div className={classes("login__content")}>
        <FormVisa onDataChange={set_login_state} />
      </div>
    </div>
  );
}

export default Login;
