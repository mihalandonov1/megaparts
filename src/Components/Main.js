import React from "react";
import styles from "./Main.module.css";
import Offers from "./Offers";
import Orders from "./Orders";

const Main = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["container"]}>
        <div className={styles["container-wrapper"]}>
          <Orders />
          <Offers />
        </div>
      </div>
    </div>
  );
};

export default Main;
