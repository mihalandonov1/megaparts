import React from "react";
import styles from "./Orders.module.css";
import NewListItem from "../Images/ Icons/NewListItem";
import OfferListIcon from "../Images/ Icons/OfferListIcon";
import NotesListIcon from "../Images/ Icons/NotesListIcon";
import SeenListIcon from "../Images/ Icons/SeenListIcon";
import QuestionsListItem from "../Images/ Icons/QuestionsListItem";
import Offers from "./Offers";

const Orders = () => {
  return (
    // <div className={styles["layout"]}>
    //   <div className={styles["container"]}>
    <div className={styles["container-wrapper"]}>
      <div className={styles["button-wrapper"]}>
        <button className={styles["button-sidebar"]}>Поръчки</button>
        <button className={styles["button-sidebar"]}>Моите запитавания</button>
        <div className={styles["list-menu-button"]}>\/</div>
      </div>

      <ul className={styles["list-menu"]}>
        <li className={styles["list"]}>
          <NewListItem /> Нови (1821)
        </li>
        <li className={styles["list"]}>
          <OfferListIcon /> Оферирани (0)
        </li>
        <li className={styles["list"]}>
          <NotesListIcon /> Бележник (0)
        </li>
        <li className={styles["list"]}>
          <SeenListIcon />
          Прегледани (0)
        </li>
      </ul>
      <div className={styles["questions-answers"]}>
        <QuestionsListItem />
        Въпроси и отговори
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Orders;
