import React from "react";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["container"]}>
        <div className={styles["container-wrapper"]}>
          <div className={styles["ask-question"]}>
            <h1 className={styles["ask-question-title"]}>
              Направи запитване лесно и бързо!
            </h1>
          </div>
          <button className={styles["button2"]}>
            <div>
              <img src="/Icons/zapitvane.svg" alt="buy" />
            </div>
            <span>Направи запитване</span>
          </button>

          <div className={styles["filter-wrapper"]}>
            <div className={styles["custumer-questions"]}>
              <p className={styles["custumer-questions-number"]}>1821</p>
              <p className={styles["custumer-questions-custumers"]}>
                активни клиентски запитвания
              </p>
            </div>

            <div className={styles["Filters__icon"]}>
              <img src="/Icons/filter.svg" alt="buy" />
            </div>

            <div className={styles["Filters"]}>
              <div className={styles["Filters__head"]}>
                <h1>Филтри</h1>
                <div className={styles["Filters__head__icon"]}>
                  <img src="/Icons/clearFilter.svg" alt="buy" />
                  <p>Изчисти филтрите</p>
                </div>
              </div>
              <div className={styles["Filters__select"]}>
                <div className={styles["Filters__select__row"]}>
                  <div className={styles["selected"]}>
                    <select>
                      <option value="volvo">Марка</option>
                    </select>
                    <img
                      src="/Icons/arrowDown.svg"
                      alt="buy"
                      className={styles["Filters-arrow"]}
                    />
                  </div>

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

                  <div className={styles["selected"]}>
                    <select>
                      <option value="volvo">Населено място</option>
                    </select>
                    <img
                      src="/Icons/arrowDown.svg"
                      alt="buy"
                      className={styles["Filters-arrow"]}
                    />
                  </div>
                </div>
                <div className={styles["Filters__select__row"]}>
                  <div className={styles["selected"]}>
                    <select>
                      <option value="volvo">Модел</option>
                    </select>
                    <img
                      src="/Icons/arrowDown.svg"
                      alt="buy"
                      className={styles["Filters-arrow"]}
                    />
                  </div>
                  <div className={styles["selected"]}>
                    <select>
                      <option value="volvo">Подкатегория</option>
                    </select>
                    <img
                      src="/Icons/arrowDown.svg"
                      alt="buy"
                      className={styles["Filters-arrow"]}
                    />
                  </div>
                  <button className={styles["button"]}> Приложи</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
