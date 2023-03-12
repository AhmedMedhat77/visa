import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import useStyles from "../../hooks/useStyles";
import styles from "./FormVisa.module.scss";

function FormVisa() {
  const classes = useStyles(styles);
  return (
    <div className={classes("form-visa")}>
      <div className={classes("form-visa__line")}>
        <Input placeholder={"e.g. Jane Aplleaseed"} label={"CARDHOLDER NAME"} />
      </div>
      <div className={classes("form-visa__line")}>
        <Input placeholder={"e.g. 123455 67889 19823"} label={"CARD NUMBER"} />
      </div>
      <div className={classes("form-visa__line", "form-visa__date")}>
        <div className={classes("form-visa__date__item")}>
          <Input
            label={"EXP. DATE"}
            placeholder={"MM"}
            containerStyle={{ width: "6rem" }}
          />
        </div>
        <div className={classes("form-visa__date__item")}>
          <Input
            label={"(MM/YY)"}
            placeholder={"YY"}
            containerStyle={{ width: "6rem" }}
          />
        </div>
        <div className={classes("form-visa__date__item")}>
          <Input label={"CVC"} placeholder={"eg 123"} />
        </div>
      </div>
      <div className={classes("form-visa__action")}>
        <Button text={"Confirm"} onClick={() => {}} />
      </div>
    </div>
  );
}

export default FormVisa;
