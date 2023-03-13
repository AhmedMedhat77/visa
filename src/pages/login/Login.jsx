import React from "react";
import Visa from "../../components/Visa";

import useStyles from "../../hooks/useStyles";
import FormVisa from "../../layouts/form/FormVisa";
import styles from "./Login.module.scss";
function Login() {
  const classes = useStyles(styles);
  const [login_state, set_login_state] = React.useState();

  const cardNumber = React.useMemo(() => {
    if (!login_state?.cardNumber) {
      return "0000 0000 0000 0000";
    }
    const cardnum = `${login_state?.cardNumber ?? ""}${"0".repeat(
      16 - login_state?.cardNumber?.length ?? 0
    )}`;

    return Array(...cardnum).reduce((p, c, i) => {
      if ((i + 1) % 4 === 0) {
        return p + c + " ";
      }
      return p + c;
    }, "");
  }, [login_state?.cardNumber]);

  return (
    <div className={classes("login")}>
      <div className={classes("login__header")}>
        <div className={classes("login__header__back")}>
          <Visa.BackVisa cvc={login_state?.cvc ?? "000"} />
        </div>
        <div className={classes("login__header__front")}>
          {/* 
          [1,2,3,4,5,6,7] => 
           */}
          <Visa.FrontVisa
            cardNumber={cardNumber}
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
