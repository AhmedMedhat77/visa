import React from "react";
import useStyles from "../../hooks/useStyles";
import styles from "./Visa.module.scss";
import BackFaceVisa from "../../assets/bg-card-back.png";
function BackVisa() {
  const classes = useStyles(styles);

  return (
    <div
    className={classes("card-visa-back")}
      style={{
        background: `url(${BackFaceVisa})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height:'139px'
      }}
    >
        <div className={classes("card-visa-back__number")}>000</div>
    </div>
  );
}

export default BackVisa;
