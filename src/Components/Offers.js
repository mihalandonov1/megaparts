import React from "react";
import styles from "./Offers.module.css";
import RedreshIcon from "../Images/ Icons/RedreshIcon";
import battery from "../Images/ Icons/028-battery 1.svg";
import gear from "../Images/ Icons/043-gas 1.png";
import gas from "../Images/ Icons/043-gas1.svg";

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
            <div className={styles["refresh-list"]}>
              <RedreshIcon />
              Обнови списъка
            </div>
          </div>
          <div className={styles["offers-icons"]}>
            <img src={gas} alt="gas" />
            <img src={battery} alt="battery" />
            <img src={gear} alt="gas" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
