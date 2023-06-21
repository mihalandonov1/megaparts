import React from "react";
import styles from "./Orders.module.css";

const Orders = () => {
  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["button-wrapper"]}>
        <button className={styles["button-sidebar"]}>Поръчки</button>
        <button className={styles["button-sidebar"]}>Моите запитавания</button>
        <div className={styles["list-menu-button"]}>\/</div>
      </div>

      <ul className={styles["list-menu"]}>
        <li className={styles["list"]}>Нови (1821)</li>
        <li className={styles["list"]}>Оферирани (0)</li>
        <li className={styles["list"]}>Бележник (0)</li>
        <li className={styles["list"]}>Прегледани (0)</li>
      </ul>
      <div className={styles["questions-answers"]}>Въпроси и отговори</div>
    </div>
  );
};

export default Orders;
