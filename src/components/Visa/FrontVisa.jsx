import React from "react";
import useStyles from "../../hooks/useStyles";
import styles from "./Visa.module.scss";
import VisaCard from "../../assets/bg-card-front.png";
function Visa(props) {
  const classes = useStyles(styles);
  return (
    <div
      className={classes("card-visa")}
      style={{
        background: `url(${VisaCard})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={classes("card-visa__header")}>
        <div className={classes("card-visa__header__avatar")}></div>
        <div className={classes("card-visa__header__avatar-2")}></div>
      </div>
      <div className={classes("card-visa__content", "typo--bold", "typo--l")}>
        {props.cardNumber}
      </div>
      <div className={classes("card-visa__info")}>
        <div className={classes("card-visa__info__item", "typo--xs1")}>
          {props.cardName}
        </div>
        <div className={classes("card-visa__info__item", "typo--xs1")}>
          {props.expDate}/{props.year}
        </div>
      </div>
    </div>
  );
}

export default Visa;
