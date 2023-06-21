import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["container"]}>
        <div className={styles["Menu"]}>
          <div
            style={{ backgroundColor: "#008aee" }}
            className={styles["button"]}
          >
            <div className={styles["Menu__icon"]}></div>
            <p className={styles["Menu__icon__text"]}>авточасти</p>
          </div>
          <div
            style={{ backgroundColor: "#F2992F" }}
            className={styles["button"]}
          >
            <div className={styles["Menu__icon"]}></div>
            <p className={styles["Menu__icon__text"]}>изкупуване</p>
          </div>
          <div
            style={{ backgroundColor: "#2CCACA" }}
            className={styles["button"]}
          >
            <div className={styles["Menu__icon"]}></div>
            <p className={styles["Menu__icon__text"]}>търгове</p>
          </div>
          <div
            style={{ backgroundColor: "#33BB5A" }}
            className={styles["button"]}
          >
            <div className={styles["Menu__icon"]}></div>
            <p className={styles["Menu__icon__text"]}>борса</p>
          </div>
          <div
            style={{ backgroundColor: "#BD5FE9" }}
            className={styles["button"]}
          >
            <div className={styles["Menu__icon"]}></div>
            <p className={styles["Menu__icon__text"]}>игри</p>
          </div>
          <div
            style={{ marginRight: "0px", backgroundColor: "#EE4700" }}
            className={styles["button"]}
          >
            <div className={styles["Menu__icon"]}></div>
            <p className={styles["Menu__icon__text"]}>новини</p>
          </div>
        </div>
        <div className={styles["Profile"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
