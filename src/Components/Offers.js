import React from "react";
import styles from "./Offers.module.css";
import ItemCard from "./ItemCard";

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
              <img src="/Icons/refresh.svg" alt="buy" />
              Обнови списъка
            </div>
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <ItemCard />
          <ItemCard />
        </div>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <ItemCard />
          <ItemCard />
        </div>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default Offers;
