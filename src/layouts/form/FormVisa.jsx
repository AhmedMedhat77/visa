import React from "react";
import Button from "../../components/Button/Button";
import FormErrorText from "../../components/FormErrorText/FormErrorText";
import Input from "../../components/Input/Input";
import useForm from "../../hooks/useForm";
import useStyles from "../../hooks/useStyles";
import styles from "./FormVisa.module.scss";

function FormVisa(props) {
  const { formState, handleChange, valiations } = useForm();
  const classes = useStyles(styles);

  const register = () => {
    // validation on confirm
    props.onDataChange(formState);
    console.log(formState);
  };

  const onCardNameChange = handleChange((value) => {
    if (value === undefined) {
      return;
    }
    return !(value?.length > 2 && value?.length < 15);
  });

  const onCardNumberChange = handleChange((value) => {
    if (value?.length === undefined) {
      return;
    }
    return value.length !== 16;
  });
  const onExpDateChange = handleChange((value) => {
    if (value?.length === undefined) {
      return;
    }
    return value.length !== 2;
  });
  const onYearChange = handleChange((value) => {
    if (value?.length === undefined) {
      return;
    }
    return value.length !== 2;
  });
  const onCvcChange = handleChange((value) => {
    if (value?.length === undefined) {
      return;
    }
    return value.length !== 3;
  });

  return (
    <div className={classes("form-visa")}>
      <div className={classes("form-visa__line")}>
        <Input
          placeholder={"e.g. Jane Aplleaseed"}
          label={"CARDHOLDER NAME"}
          name="cardName"
          error={valiations.cardName}
          onChange={onCardNameChange}
          value={formState["cardName"] || ""}
        />
      </div>
      <div className={classes("form-visa__line")}>
        <Input
          placeholder={"e.g. 123455 67889 19823"}
          label={"CARD NUMBER"}
          name="cardNumber"
          value={formState["cardNumber"] || ""}
          onChange={onCardNumberChange}
          error={valiations.cardNumber}
          maxLength="16"
        />
        {isNaN(Number(formState.cardNumber)) &&
        formState.cardNumber !== undefined ? (
          <FormErrorText errorMessage="Wrong Format, Numbers only" />
        ) : (
          ""
        )}
      </div>
      <div className={classes("form-visa__line", "form-visa__date")}>
        <div className={classes("form-visa__date__item")}>
          <Input
            label={"EXP. DATE"}
            placeholder={"MM"}
            name="expDate"
            containerStyle={{ width: "6rem" }}
            value={formState["expDate"] || ""}
            onChange={onExpDateChange}
            error={valiations.expDate}
            maxLength={"2"}
          />
        </div>
        <div className={classes("form-visa__date__item")}>
          <Input
            label={"(MM/YY)"}
            placeholder={"YY"}
            name="year"
            containerStyle={{ width: "6rem" }}
            value={formState["year"] || ""}
            onChange={onYearChange}
            maxLength="2"
            error={valiations.year}
          />
        </div>
        <div className={classes("form-visa__date__item")}>
          <Input
            label={"CVC"}
            placeholder={"eg 123"}
            name="cvc"
            value={formState["cvc"] || ""}
            onChange={onCvcChange}
            maxLength="3"
            error={valiations.cvc}
          />
        </div>
      </div>
      <div className={classes("form-visa__action")}>
        <Button text={"Confirm"} onClick={register} />
      </div>
    </div>
  );
}

export default FormVisa;
