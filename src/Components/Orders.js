import React from "react";
import styles from "./Orders.module.css";
import AdsBlock from "./AdsBlock";

const Orders = () => {
  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["button-wrapper"]}>
        <button className={styles["button-sidebar"]}>Поръчки</button>
        <button className={styles["button-sidebar"]}>Моите запитавания</button>
        <div className={styles["list-menu-button"]}>\/</div>
      </div>

      <ul className={styles["list-menu"]}>
        <li className={styles["list"]}>
          <img src="/Icons/newOffers.svg" alt="buy" />
          Нови (1821)
        </li>
        <li className={styles["list"]}>
          <img src="/Icons/ofers.svg" alt="buy" />
          Оферирани (0)
        </li>
        <li className={styles["list"]}>
          <img src="/Icons/belejnik.svg" alt="buy" />
          Бележник (0)
        </li>
        <li className={styles["list"]}>
          <img src="/Icons/eye.svg" alt="buy" />
          Прегледани (0)
        </li>
      </ul>

      <div className={styles["questions-answers"]}>
        <img src="/Icons/question.svg" alt="buy" />
        Въпроси и отговори
      </div>

      <AdsBlock />
    </div>
  );
};

export default Orders;
