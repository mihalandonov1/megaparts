import React from "react";
import styles from "./AdsBlock.module.css";

const AdsBlock = () => {
  return (
    <div className={styles["ads-block"]}>
      <div className={styles["ads-wrapper"]}>
        <div className={styles["ads-title"]}>
          <div className={styles["ads-title-text"]}>Ad</div>
          <div className={styles["ads-dots"]}>...</div>
        </div>
        <img src="/images/key.jpg" alt="key" />
        <div className={styles["ads-text"]}>
          <p className={styles["ads-text-new-car-text"]}>
            открийте своята нова кола!
          </p>
        </div>
        <img src="/images/car.jpg" alt="car" />
        <div className={styles["ads-text-more-wrapper"]}>
          <p className={styles["ads-text-more"]}>научете повече</p>
        </div>
      </div>
    </div>
  );
};

export default AdsBlock;
