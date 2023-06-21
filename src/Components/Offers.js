import React from "react";
import styles from "./Offers.module.css";

const Offers = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["container"]}>
        <div className={styles["container-wrapper"]}>
          <div className={styles["offers-dropdown"]}>
            <select className={styles["dropdown"]}>
              <option value="volvo">Най-нови</option>
            </select>
            <div className={styles["offers-dropdown-buttons"]}>
              <button>Най-нови</button>
              <button>Без оферти</button>
              <button>Най-стари</button>
            </div>
            <div>Обнови списъка</div>
          </div>
          <div className={styles["offers-icons"]}>
            <div>Icon</div>
            <div>Icon</div>
            <div>Icon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
