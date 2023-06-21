import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Images/Logo";

import YoutubeIcon from "../Images/YoutubeIcon";

import FacebookIcon from "../Images/FacebookIcon";
import Phone from "../Images/Phone";
import HamburgerIcon from "../Images/HamburgerIcon";
import SearchIcon from "../Images/ Icons/SearchIcon";

const Navbar = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["container"]}>
        <div className={styles["Navbar"]}>
          <div className={styles["Navbar__logo"]}>
            <Logo />
          </div>
          <div className={styles["Navbar__hamburger"]}>
            <HamburgerIcon />
          </div>
          <div className={styles["Navbar__search"]}>
            <input
              type="text"
              placeholder="Търсене ..."
              className={styles["Navbar__search__input"]}
            />
            <div className={styles["Navbar__search__icon"]}>
              <SearchIcon />
            </div>
          </div>
          <div className={styles["Navbar__icons"]}>
            <div className={styles["Navbar__icons__profile"]}>E</div>
            <div className={styles["Navbar__icon"]}>
              <YoutubeIcon />
            </div>
            <div className={styles["Navbar__icon"]}>
              <FacebookIcon />
            </div>

            <div className={styles["Navbar__icon"]}>
              <Phone />
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
