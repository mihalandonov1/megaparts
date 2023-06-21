import React from "react";
import styles from "./ItemCard.module.css";
import Note from "./Note";
import EyeSvgIcon from "./EyeSvgIcon";

const ItemCard = () => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["img-wrapper"]}>
        <div className={styles["main-img"]}></div>
        <div className={styles["small-img-wrapper"]}>
          <div className={styles["small-img1"]}></div>
          <div className={styles["small-img2"]}></div>
        </div>
      </div>
      <div className={styles["info"]}>
        <div className={styles["info-user"]}>
          <div className={styles["info-user-img"]}>M</div>
          <div>Мартин, </div>
          <div>Шумен</div>
        </div>
        <div className={styles["info-time"]}>
          <div>Валидност:</div>
          <div>48 : 18 : 16</div>
        </div>
      </div>
      <div className={styles["offer"]}>
        <div className={styles["button-small-wrapper"]}>
          <button className={styles["button-small"]}>купувам</button>
        </div>
        <div className={styles["article-text"]}>
          Полуоска за Mercedes-Benz A-Class Hatchback (W168) (07.1997 - 08.2004)
          A 140 (168.031, 168.131), 82 к.с., позиция: предна, дясна
        </div>
        <div className={styles["offers-comments"]}>
          <div className={styles["offers-recieved"]}>
            <p>Получени оферти:</p> <span>9</span>
          </div>
          <div className={styles["comments-recieved"]}>
            <p> Коментар:</p> <span>Няма доопълнителна информация</span>
          </div>
        </div>
      </div>
      <div className={styles["specifications"]}>
        <div className={styles["specifications-row"]}>
          <div>Кубатура:</div>
          <div>1.4</div>
        </div>

        <div className={styles["specifications-row"]}>
          <div>Позиция:</div>
          <div>Предна, дясна</div>
        </div>
      </div>

      <div className={styles["specifications"]}>
        <div className={styles["specifications-row"]}>
          <div>Скоростна кутия:</div>
          <div>Ръчни скорости</div>
        </div>

        <div className={styles["specifications-row"]}>
          <div>Конски сили:</div>
          <div>82</div>
        </div>
      </div>

      <div className={styles["flex-row"]}>
        <button className={styles["button"]}>
          Изпрати оферта{" "}
          <img
            src="/Icons/arrowRight.svg"
            alt="arrow"
            className={styles["button-image"]}
          />
        </button>
      </div>
      <div className={styles["flex-row"]}>
        <button className={styles["b1"]}>
          <Note />В бележника
        </button>
        <button className={styles["b2"]}>
          <EyeSvgIcon />
          Прегледано
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
