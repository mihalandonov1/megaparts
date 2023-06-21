import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["container"]}>
        <div className={styles["Navbar"]}>
          <div className={styles["Navbar__logo"]}>
            <img src="/Icons/logo.svg" alt="buy" />
          </div>
          <div className={styles["Navbar__hamburger"]}>
            <img src="/Icons/hamburger.svg" alt="buy" />
          </div>
          <div className={styles["Navbar__search"]}>
            <input
              type="text"
              placeholder="Търсене ..."
              className={styles["Navbar__search__input"]}
            />
            <div className={styles["Navbar__search__icon"]}>
              <img src="/Icons/search.svg" alt="buy" />
            </div>
          </div>
          <div className={styles["Navbar__icons"]}>
            <div className={styles["Navbar__icons__profile"]}>E</div>
            <div className={styles["Navbar__icon"]}>
              <img src="/Icons/youtube.svg" alt="buy" />
            </div>
            <div className={styles["Navbar__icon"]}>
              <img src="/Icons/facebook.svg" alt="buy" />
            </div>

            <div className={styles["Navbar__icon"]}>
              <img src="/Icons/phone.svg" alt="buy" />
            </div>
            <div style={{ fontFamily: "Exe 2" }} className="Navbar__phone">
              02 437 32 48
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
