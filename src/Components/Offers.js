import React from "react";
import styles from "./Offers.module.css";
import ItemCard from "./ItemCard";

const Offers = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["container"]}>
        <div className={styles["container-wrapper"]}>
          <div className={styles["selected"]}>
            <select>
              <option value="volvo">Категория</option>
            </select>
            <img
              src="/Icons/arrowDown.svg"
              alt="buy"
              className={styles["Filters-arrow"]}
            />
          </div>
          <div className={styles["offers-dropdown-buttons"]}>
            <button className={styles["button"]}>Най-нови</button>
            <button className={styles["button"]}>Без оферти</button>
            <button className={styles["button"]}>Най-стари</button>
          </div>
          <div className={styles["refresh-list"]}>
            <img src="/Icons/refresh.svg" alt="buy" />
            Обнови списъка
          </div>

          <div className={styles["offers-icons"]}>
            <div className={styles["icons"]}>
              <img src="/Icons/Gasoline.svg" alt="buy" />
              <p>120</p>
            </div>
            <div className={styles["icons"]}>
              <img src="/Icons/battery.svg" alt="buy" />
              <p>10</p>
            </div>
            <div className={styles["icons"]}>
              <img src="/Icons/gear.svg" alt="buy" />
              <p style={{ display: "flex" }}>123</p>
            </div>
          </div>
        </div>
        <div className={styles["card-wrapper"]}>
          <ItemCard />
          <ItemCard />

          <ItemCard />
          <ItemCard />

          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default Offers;
